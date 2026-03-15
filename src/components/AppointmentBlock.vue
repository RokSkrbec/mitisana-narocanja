<template>
  <!-- Appointment block -->
  <div
    class="absolute left-1 right-1 rounded-lg px-2 py-1 text-xs font-medium shadow select-none overflow-hidden group"
    :class="[
      resizing ? 'cursor-ns-resize' : 'cursor-grab',
      appointment.blocked ? 'text-gray-600' : 'text-white',
      appointment.status === 'cancelled' ? 'opacity-50' : '',
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
    }"
    :draggable="!resizing"
    @dragstart="!resizing && $emit('drag-start', appointment, $event)"
    @dragend="$emit('drag-end')"
    @click.stop="!resizing && $emit('edit', appointment)"
    @touchstart.stop.prevent="!resizing && $emit('touch-drag-start', appointment, $event)"
  >
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
import type { Appointment } from '../types'

defineProps<{
  appointment: Appointment
  top: number
  height: number
  resizing?: boolean
}>()

defineEmits<{
  'drag-start': [appointment: Appointment, event: DragEvent]
  'drag-end': []
  edit: [appointment: Appointment]
  'resize-start': [appointment: Appointment, event: MouseEvent | TouchEvent]
  'touch-drag-start': [appointment: Appointment, event: TouchEvent]
}>()

function formatTime(date: Date) {
  return date.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' })
}
</script>
