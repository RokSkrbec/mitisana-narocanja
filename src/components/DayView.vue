<template>
  <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
    <!-- Day header -->
    <div class="flex border-b border-gray-200 bg-white flex-shrink-0">
      <div class="w-14 flex-shrink-0" />
      <div class="flex-1 py-2 px-4">
        <div
          class="inline-flex flex-col items-center justify-center w-10 h-10 rounded-full"
          :class="isToday ? 'bg-pink-500 text-white' : 'text-gray-700'"
        >
          <span class="text-[10px] font-medium uppercase opacity-70">{{ dayName }}</span>
          <span class="text-lg font-bold leading-none">{{ date.getDate() }}</span>
        </div>
      </div>
    </div>

    <!-- Grid (self-scrolling) -->
    <TimeGrid
      :days="[date]"
      :appointments="appointments"
      :time-slots="timeSlots"
      :slot-height="slotHeight"
      :top-for-time="topForTime"
      :height-for-duration="heightForDuration"
      :snap-to-five="snapToFive"
      :appointments-for-day="appointmentsForDay"
      @add-appointment="$emit('add-appointment', $event)"
      @edit-appointment="$emit('edit-appointment', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TimeGrid from './TimeGrid.vue'
import type { Appointment } from '../types'

const props = defineProps<{
  date: Date
  appointments: Appointment[]
  timeSlots: string[]
  slotHeight: number
  topForTime: (d: Date) => number
  heightForDuration: (s: Date, e: Date) => number
  snapToFive: (d: Date) => Date
  appointmentsForDay: (appointments: Appointment[], day: Date) => Appointment[]
}>()

defineEmits<{
  'add-appointment': [date: Date]
  'edit-appointment': [appointment: Appointment]
}>()

const isToday = computed(() => {
  const now = new Date()
  return (
    props.date.getFullYear() === now.getFullYear() &&
    props.date.getMonth() === now.getMonth() &&
    props.date.getDate() === now.getDate()
  )
})

const dayName = computed(() =>
  props.date.toLocaleDateString('sl-SI', { weekday: 'short' })
)
</script>
