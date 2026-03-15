<template>
  <div class="flex flex-col flex-1 overflow-hidden p-4">
    <!-- Day-of-week headers -->
    <div class="grid grid-cols-7 mb-1">
      <div
        v-for="name in dayNames"
        :key="name"
        class="text-center text-[11px] font-semibold uppercase text-gray-400 py-1"
      >
        {{ name }}
      </div>
    </div>

    <!-- Month grid -->
    <div class="grid grid-cols-7 flex-1 gap-1 overflow-y-auto">
      <div
        v-for="day in monthDays"
        :key="day.toISOString()"
        class="border border-gray-100 rounded-lg p-1 min-h-[80px] cursor-pointer hover:bg-pink-50 transition-colors flex flex-col"
        :class="{
          'opacity-40': !isCurrentMonth(day),
          'ring-2 ring-pink-400': isSameDay(day, today),
        }"
        @click="$emit('add-appointment', day)"
      >
        <!-- Date number -->
        <div class="flex justify-end mb-1">
          <span
            class="text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full"
            :class="isSameDay(day, today) ? 'bg-pink-500 text-white' : 'text-gray-600'"
          >
            {{ day.getDate() }}
          </span>
        </div>

        <!-- Appointments -->
        <div class="flex flex-col gap-0.5 overflow-hidden">
          <div
            v-for="appt in appointmentsForDay(appointments, day).slice(0, 3)"
            :key="appt.id"
            class="text-[10px] font-medium text-white rounded px-1 truncate cursor-pointer"
            :style="{ backgroundColor: appt.color }"
            @click.stop="$emit('edit-appointment', appt)"
          >
            {{ formatTime(appt.startTime) }} {{ appt.clientName }}
          </div>
          <div
            v-if="appointmentsForDay(appointments, day).length > 3"
            class="text-[10px] text-gray-400 pl-1"
          >
            +{{ appointmentsForDay(appointments, day).length - 3 }} več
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Appointment } from '../types'

defineProps<{
  currentDate: Date
  monthDays: Date[]
  appointments: Appointment[]
  isSameDay: (a: Date, b: Date) => boolean
  isCurrentMonth: (d: Date) => boolean
  appointmentsForDay: (appointments: Appointment[], day: Date) => Appointment[]
}>()

defineEmits<{
  'add-appointment': [date: Date]
  'edit-appointment': [appointment: Appointment]
}>()

const today = new Date()

const dayNames = ['Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob', 'Ned']

function formatTime(date: Date) {
  return date.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' })
}
</script>
