<template>
  <!-- Single scrollable container for headers + gutter + columns -->
  <div class="flex flex-1 min-h-0 overflow-y-auto overflow-x-auto">

    <!-- Left side: time gutter (sticky) + empty header corner -->
    <div class="sticky left-0 z-20 w-14 flex-shrink-0 flex flex-col bg-white">
      <!-- Corner spacer — only shown when day headers are present -->
      <div
        v-if="$slots['day-header']"
        class="flex-shrink-0 border-b border-r border-gray-200"
        style="height: 60px"
      />
      <!-- Time gutter -->
      <div
        class="relative flex-shrink-0 border-r border-gray-100"
        :style="{ height: totalHeight + 'px' }"
      >
        <div
          v-for="(slot, i) in timeSlots"
          :key="slot"
          class="absolute left-0 right-0 flex items-start justify-end pr-2"
          :style="{ top: `${i * slotHeight}px`, height: `${slotHeight}px` }"
        >
          <span v-if="i % 12 === 0" class="text-[10px] text-gray-400 -translate-y-2">{{ slot }}</span>
        </div>
      </div>
    </div>

    <!-- Right side: day headers (if slotted) + day columns -->
    <div class="flex flex-col flex-1">

      <!-- Day headers row -->
      <div
        v-if="$slots['day-header']"
        class="flex flex-shrink-0 border-b border-gray-200 bg-white"
        style="height: 60px"
      >
        <div
          v-for="(day, colIdx) in days"
          :key="colIdx"
          class="flex-1 min-w-[60px]"
        >
          <slot name="day-header" :day="day" />
        </div>
      </div>

      <!-- Day columns -->
      <div class="flex flex-1">
        <div
          v-for="(day, colIdx) in days"
          :key="colIdx"
          ref="columnRefs"
          class="flex-1 min-w-[60px] border-r border-gray-100 relative"
          :style="{ height: totalHeight + 'px' }"
          @dragover="onDragOver($event)"
          @drop="onDrop($event, day, columnRefs[colIdx])"
        >
        <!-- Horizontal hour lines -->
        <div
          v-for="(slot, i) in timeSlots"
          :key="slot"
          class="absolute left-0 right-0 border-t cursor-pointer hover:bg-pink-50 transition-colors"
          :class="i % 12 === 0 ? 'border-gray-200' : 'border-gray-50'"
          :style="{ top: `${i * slotHeight}px`, height: `${slotHeight}px` }"
          @click="handleSlotClick(day, slot)"
        />

        <!-- Current time indicator -->
        <div
          v-if="isToday(day)"
          class="absolute left-0 right-0 z-20 pointer-events-none"
          :style="{ top: `${currentTimeTop}px` }"
        >
          <div class="relative">
            <div class="absolute -left-1 w-2.5 h-2.5 rounded-full bg-pink-500 -translate-y-1/2" />
            <div class="border-t-2 border-pink-500" />
          </div>
        </div>

        <!-- Appointments -->
        <AppointmentBlock
          v-for="appt in appointmentsForDay(appointments, day)"
          :key="appt.id"
          :appointment="appt"
          :top="topForTime(appt.startTime)"
          :height="resizingId === appt.id ? resizingHeight : heightForDuration(appt.startTime, appt.endTime)"
          :resizing="resizingId === appt.id"
          @drag-start="(a, e) => onDragStart(a, e)"
          @drag-end="dragDrop.onDragEnd()"
          @edit="$emit('edit-appointment', appt)"
          @resize-start="(a, e) => onResizeStart(a, e, columnRefs[colIdx])"
          @touch-drag-start="(a, e) => onTouchDragStart(a, e)"
        />

        <!-- Touch drag ghost -->
        <div
          v-if="touchDragging && touchDragDayIdx === colIdx"
          class="absolute left-1 right-1 rounded-lg opacity-70 pointer-events-none z-40 border-2 border-white"
          :style="{
            top: `${touchDragTop}px`,
            height: `${touchDragging ? heightForDuration(touchDragging.startTime, touchDragging.endTime) : 0}px`,
            backgroundColor: touchDragging.blocked ? '#e5e7eb' : touchDragging.color,
          }"
        />
      </div>
      </div><!-- end day columns row -->
    </div><!-- end right side -->
  </div><!-- end scroll container -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDragDrop } from '../composables/useDragDrop'
import { useAppointmentsStore } from '../stores/appointments'
import AppointmentBlock from './AppointmentBlock.vue'
import type { Appointment } from '../types'

const props = defineProps<{
  days: Date[]
  appointments: Appointment[]
  timeSlots: string[]
  slotHeight: number
  topForTime: (d: Date) => number
  heightForDuration: (s: Date, e: Date) => number
  snapToFive: (d: Date) => Date
  appointmentsForDay: (appointments: Appointment[], day: Date) => Appointment[]
}>()

const emit = defineEmits<{
  'add-appointment': [date: Date]
  'edit-appointment': [appointment: Appointment]
}>()

const columnRefs = ref<HTMLElement[]>([])
const totalHeight = computed(() => props.timeSlots.length * props.slotHeight)
const dragDrop = useDragDrop(props.slotHeight)
const appointmentsStore = useAppointmentsStore()

// ─── Resize state ──────────────────────────────────────────────────────────
const resizingId = ref<string | null>(null)
const resizingHeight = ref(0)
let resizeAppointment: Appointment | null = null
let resizeStartY = 0
let resizeStartHeight = 0

function getClientY(event: MouseEvent | TouchEvent): number {
  if (event instanceof TouchEvent) {
    return event.touches[0]?.clientY ?? event.changedTouches[0]?.clientY ?? 0
  }
  return event.clientY
}

function onResizeStart(appointment: Appointment, event: MouseEvent | TouchEvent, _columnEl: HTMLElement) {
  resizeAppointment = appointment
  resizingId.value = appointment.id
  resizeStartY = getClientY(event)
  resizeStartHeight = props.heightForDuration(appointment.startTime, appointment.endTime)
  resizingHeight.value = resizeStartHeight

  if (event instanceof TouchEvent) {
    window.addEventListener('touchmove', onResizeTouchMove, { passive: false })
    window.addEventListener('touchend', onResizeTouchEnd)
    window.addEventListener('touchcancel', onResizeTouchEnd)
  } else {
    window.addEventListener('mousemove', onResizeMove)
    window.addEventListener('mouseup', onResizeEnd)
  }
}

function applyResizeDelta(clientY: number) {
  const deltaY = clientY - resizeStartY
  const snappedDelta = Math.round(deltaY / props.slotHeight) * props.slotHeight
  const minHeight = props.slotHeight
  resizingHeight.value = Math.max(minHeight, resizeStartHeight + snappedDelta)
}

function onResizeMove(event: MouseEvent) {
  if (!resizeAppointment) return
  applyResizeDelta(event.clientY)
}

function onResizeTouchMove(event: TouchEvent) {
  if (!resizeAppointment) return
  event.preventDefault() // prevent page scroll while resizing
  applyResizeDelta(event.touches[0].clientY)
}

async function onResizeEnd() {
  window.removeEventListener('mousemove', onResizeMove)
  window.removeEventListener('mouseup', onResizeEnd)
  await commitResize()
}

async function onResizeTouchEnd() {
  window.removeEventListener('touchmove', onResizeTouchMove)
  window.removeEventListener('touchend', onResizeTouchEnd)
  window.removeEventListener('touchcancel', onResizeTouchEnd)
  await commitResize()
}

async function commitResize() {
  if (!resizeAppointment) return

  const newDurationMinutes = Math.round(resizingHeight.value / props.slotHeight) * 5
  const newEnd = new Date(
    resizeAppointment.startTime.getTime() + newDurationMinutes * 60000
  )

  await appointmentsStore.updateAppointment(resizeAppointment.id, {
    endTime: newEnd,
  })

  resizingId.value = null
  resizeAppointment = null
}

// ─── Touch drag & drop ────────────────────────────────────────────────────
const touchDragging = ref<Appointment | null>(null)
const touchDragTop = ref(0)
const touchDragDayIdx = ref(-1)
let touchDragOffsetY = 0    // finger Y offset from top of the block

function onTouchDragStart(appointment: Appointment, event: TouchEvent) {
  if (resizingId.value) return  // don't start drag while resizing

  const touch = event.touches[0]
  touchDragging.value = appointment

  // Compute offset using the appointment's known top position + column rect.
  // getBoundingClientRect().top is already viewport-relative (scroll-adjusted),
  // so (clientY - colRect.top) gives position within the full column height directly.
  const colIdx = getDayIdxAtX(touch.clientX)
  touchDragDayIdx.value = colIdx
  if (colIdx >= 0 && colIdx < columnRefs.value.length) {
    const colRect = columnRefs.value[colIdx].getBoundingClientRect()
    const apptTopPx = props.topForTime(appointment.startTime)
    touchDragOffsetY = (touch.clientY - colRect.top) - apptTopPx
    const blockHeight = props.heightForDuration(appointment.startTime, appointment.endTime)
    touchDragOffsetY = Math.max(0, Math.min(touchDragOffsetY, blockHeight - props.slotHeight))
  }

  touchDragTop.value = props.topForTime(appointment.startTime)

  window.addEventListener('touchmove', onTouchDragMove, { passive: false })
  window.addEventListener('touchend', onTouchDragEnd)
  window.addEventListener('touchcancel', onTouchDragCancel)
}

function getDayIdxAtX(clientX: number): number {
  for (let i = 0; i < columnRefs.value.length; i++) {
    const rect = columnRefs.value[i].getBoundingClientRect()
    if (clientX >= rect.left && clientX <= rect.right) return i
  }
  return 0
}

function getSnappedTopInColumn(clientY: number, colIdx: number): number {
  if (colIdx < 0 || colIdx >= columnRefs.value.length) return 0
  const colRect = columnRefs.value[colIdx].getBoundingClientRect()
  // getBoundingClientRect().top is viewport-relative, so (clientY - colRect.top)
  // gives position within the full column without needing to add scrollTop
  const rawTop = clientY - colRect.top - touchDragOffsetY
  return Math.max(0, Math.round(rawTop / props.slotHeight) * props.slotHeight)
}

function onTouchDragMove(event: TouchEvent) {
  if (!touchDragging.value) return
  event.preventDefault()
  const touch = event.touches[0]

  touchDragDayIdx.value = getDayIdxAtX(touch.clientX)
  touchDragTop.value = getSnappedTopInColumn(touch.clientY, touchDragDayIdx.value)
}

async function onTouchDragEnd(_event: TouchEvent) {
  window.removeEventListener('touchmove', onTouchDragMove)
  window.removeEventListener('touchend', onTouchDragEnd)
  window.removeEventListener('touchcancel', onTouchDragCancel)

  if (!touchDragging.value) return
  const appt = touchDragging.value
  const colIdx = touchDragDayIdx.value

  touchDragging.value = null
  touchDragDayIdx.value = -1

  const targetDay = props.days[Math.max(0, Math.min(colIdx, props.days.length - 1))]
  const newMinutesFromMidnight = Math.round(touchDragTop.value / props.slotHeight) * 5

  const newStart = new Date(targetDay)
  newStart.setHours(0, 0, 0, 0)
  newStart.setMinutes(newMinutesFromMidnight)

  const duration = (appt.endTime.getTime() - appt.startTime.getTime()) / 60000
  const newEnd = new Date(newStart.getTime() + duration * 60000)

  await appointmentsStore.updateAppointment(appt.id, { startTime: newStart, endTime: newEnd })
}

function onTouchDragCancel() {
  window.removeEventListener('touchmove', onTouchDragMove)
  window.removeEventListener('touchend', onTouchDragEnd)
  window.removeEventListener('touchcancel', onTouchDragCancel)
  touchDragging.value = null
  touchDragDayIdx.value = -1
}

// ─── Current time indicator ───────────────────────────────────────────────
const currentTimeTop = ref(0)
let timeInterval: ReturnType<typeof setInterval>

function updateCurrentTime() {
  const now = new Date()
  currentTimeTop.value = props.topForTime(now)
}

onMounted(() => {
  updateCurrentTime()
  timeInterval = setInterval(updateCurrentTime, 60000)
  // Scroll to 8am on mount
  const scrollTarget = 8 * 60 * (props.slotHeight / 5)
  setTimeout(() => {
    const el = columnRefs.value[0]?.closest('.overflow-y-auto') as HTMLElement
    if (el) el.scrollTop = scrollTarget
  }, 50)
})

onUnmounted(() => clearInterval(timeInterval))

function isToday(date: Date) {
  const now = new Date()
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  )
}

function handleSlotClick(day: Date, slot: string) {
  const [h, m] = slot.split(':').map(Number)
  const d = new Date(day)
  d.setHours(h, m, 0, 0)
  emit('add-appointment', d)
}

function onDragStart(appointment: Appointment, event: DragEvent) {
  dragDrop.onDragStart(appointment, event)
}

function onDragOver(event: DragEvent) {
  dragDrop.onDragOver(event)
}

function onDrop(event: DragEvent, day: Date, columnEl: HTMLElement) {
  dragDrop.onDrop(event, day, columnEl)
}
</script>
