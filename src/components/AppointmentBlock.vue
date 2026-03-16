<template>
  <!-- Appointment block -->
  <div
    class="absolute left-1 right-1 rounded-lg px-2 py-1 text-xs font-medium shadow select-none overflow-hidden group"
    :class="[
      resizing ? 'cursor-ns-resize' : 'cursor-grab',
      appointment.blocked ? 'text-gray-600' : 'text-white',
      appointment.status === 'cancelled' ? 'opacity-50' : '',
      isHolding ? 'scale-[1.03] brightness-110' : '',
    ]"
    :style="{
      top: `${top}px`,
      height: `${height}px`,
      backgroundColor: appointment.blocked ? '#e5e7eb' : appointment.color,
      backgroundImage: appointment.blocked
        ? 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 8px)'
        : appointment.status === 'cancelled'
          ? 'repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 8px)'
          : 'none',
      borderLeft: appointment.blocked
        ? '3px solid #9ca3af'
        : appointment.status === 'no-show'
          ? '3px solid rgba(0,0,0,0.35)'
          : 'none',
      minHeight: '20px',
      zIndex: resizing ? 30 : 10,
      transition: 'transform 0.15s ease, filter 0.15s ease',
    }"
    :draggable="!resizing"
    @dragstart="!resizing && $emit('drag-start', appointment, $event)"
    @dragend="$emit('drag-end')"
    @click.stop="!resizing && $emit('edit', appointment)"
    @touchstart.stop="onTouchStart"
    @touchend.stop="onTouchEnd"
    @touchcancel.stop="cancelHold"
  >
    <!-- Hold-to-drag progress ring -->
    <div
      v-if="isHolding"
      class="absolute inset-0 rounded-lg pointer-events-none z-20 overflow-hidden"
    >
      <div class="absolute inset-0 bg-white opacity-20 animate-pulse rounded-lg" />
      <svg class="absolute top-1 right-1 w-4 h-4 -rotate-90" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="6" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
        <circle
          cx="8" cy="8" r="6"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          :stroke-dasharray="`${holdProgress * 37.7} 37.7`"
          style="transition: stroke-dasharray 0.05s linear"
        />
      </svg>
    </div>

    <div class="flex items-start gap-1 h-full min-w-0">
      <i v-if="appointment.blocked" class="pi pi-lock text-gray-400 flex-shrink-0 mt-0.5" style="font-size: 10px" />
      <i v-else-if="appointment.status === 'cancelled'" class="pi pi-times-circle flex-shrink-0 mt-0.5 opacity-80" style="font-size: 10px" />
      <i v-else-if="appointment.status === 'no-show'" class="pi pi-user-minus flex-shrink-0 mt-0.5 opacity-80" style="font-size: 10px" />
      <div class="min-w-0 flex-1">
        <p class="font-semibold leading-tight truncate" :class="appointment.status === 'cancelled' ? 'line-through' : ''">
          {{ appointment.clientName }}
        </p>
        <p v-if="!appointment.blocked && height > 30" class="opacity-80 truncate leading-tight">{{ appointment.typeName }}</p>
        <p v-if="height > 44" class="opacity-70 text-[10px] leading-tight"
          :class="appointment.blocked ? 'text-gray-500' : ''">
          {{ formatTime(appointment.startTime) }} – {{ formatTime(appointment.endTime) }}
        </p>
      </div>
    </div>

    <!-- Resize handle -->
    <div
      class="absolute bottom-0 left-0 right-0 h-5 flex items-center justify-center cursor-ns-resize group/handle"
      @mousedown.stop="$emit('resize-start', appointment, $event)"
      @touchstart.stop.prevent="$emit('resize-start', appointment, $event)"
    >
      <div class="w-6 h-0.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
        :class="appointment.blocked ? 'bg-gray-500' : 'bg-white'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Appointment } from '../types'

const props = defineProps<{
  appointment: Appointment
  top: number
  height: number
  resizing?: boolean
}>()

const emit = defineEmits<{
  'drag-start': [appointment: Appointment, event: DragEvent]
  'drag-end': []
  edit: [appointment: Appointment]
  'resize-start': [appointment: Appointment, event: MouseEvent | TouchEvent]
  'touch-drag-start': [appointment: Appointment, event: TouchEvent]
}>()

const HOLD_DURATION = 500 // ms before drag activates

const isHolding = ref(false)
const holdProgress = ref(0) // 0–1

let holdTimer: ReturnType<typeof setTimeout> | null = null
let holdRafTimer: ReturnType<typeof requestAnimationFrame> | null = null
let holdStartTime = 0
let holdTouchEvent: TouchEvent | null = null
let holdStartX = 0
let holdStartY = 0

function onTouchStart(event: TouchEvent) {
  if (props.resizing) return
  event.preventDefault() // prevent scroll starting immediately

  const touch = event.touches[0]
  holdStartX = touch.clientX
  holdStartY = touch.clientY
  holdTouchEvent = event
  isHolding.value = true
  holdProgress.value = 0
  holdStartTime = performance.now()

  // Animate the progress ring
  function animateRing() {
    const elapsed = performance.now() - holdStartTime
    holdProgress.value = Math.min(elapsed / HOLD_DURATION, 1)
    if (elapsed < HOLD_DURATION) {
      holdRafTimer = requestAnimationFrame(animateRing)
    }
  }
  holdRafTimer = requestAnimationFrame(animateRing)

  // After hold duration, activate drag
  holdTimer = setTimeout(() => {
    if (holdTouchEvent) {
      isHolding.value = false
      holdProgress.value = 0
      emit('touch-drag-start', props.appointment, holdTouchEvent)
    }
  }, HOLD_DURATION)

  // Watch for finger movement — cancel hold if user scrolls
  window.addEventListener('touchmove', onHoldTouchMove, { passive: true })
}

function onHoldTouchMove(event: TouchEvent) {
  const touch = event.touches[0]
  const dx = touch.clientX - holdStartX
  const dy = touch.clientY - holdStartY
  // If finger moves more than 6px before hold completes, it's a scroll — cancel
  if (Math.sqrt(dx * dx + dy * dy) > 6) {
    cancelHold()
  }
}

function onTouchEnd() {
  if (holdTimer !== null) {
    // Hold didn't complete — it was a tap
    cancelHold()
    if (!props.resizing) {
      emit('edit', props.appointment)
    }
  }
}

function cancelHold() {
  if (holdTimer !== null) {
    clearTimeout(holdTimer)
    holdTimer = null
  }
  if (holdRafTimer !== null) {
    cancelAnimationFrame(holdRafTimer)
    holdRafTimer = null
  }
  window.removeEventListener('touchmove', onHoldTouchMove)
  isHolding.value = false
  holdProgress.value = 0
  holdTouchEvent = null
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' })
}
</script>
