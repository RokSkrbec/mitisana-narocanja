<template>
  <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
    <TimeGrid
      :days="weekDays"
      :appointments="appointments"
      :time-slots="timeSlots"
      :slot-height="slotHeight"
      :top-for-time="topForTime"
      :height-for-duration="heightForDuration"
      :snap-to-five="snapToFive"
      :appointments-for-day="appointmentsForDay"
      @add-appointment="$emit('add-appointment', $event)"
      @edit-appointment="$emit('edit-appointment', $event)"
    >
      <!-- Day header slot — rendered inside the shared scroll container -->
      <template #day-header="{ day }">
        <div class="flex flex-col items-center py-2">
          <span class="text-[10px] font-medium uppercase text-gray-400">
            {{ day.toLocaleDateString('sl-SI', { weekday: 'short' }) }}
          </span>
          <div
            class="w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold mt-0.5"
            :class="isToday(day) ? 'bg-pink-500 text-white' : 'text-gray-700'"
          >
            {{ day.getDate() }}
          </div>
        </div>
      </template>
    </TimeGrid>
  </div>
</template>

<script setup lang="ts">
import TimeGrid from './TimeGrid.vue'
import type { Appointment } from '../types'

defineProps<{
  weekDays: Date[]
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

function isToday(date: Date) {
  const now = new Date()
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  )
}
</script>
