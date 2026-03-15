import { ref } from 'vue'
import type { Appointment } from '../types'
import { useAppointmentsStore } from '../stores/appointments'

export function useDragDrop(SLOT_HEIGHT_PX: number) {
  const store = useAppointmentsStore()
  const dragging = ref<Appointment | null>(null)
  const dragOffsetMinutes = ref(0)

  function onDragStart(appointment: Appointment, event: DragEvent) {
    dragging.value = appointment
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('appointmentId', appointment.id)
    }

    // Calculate offset from top of appointment block to cursor
    const el = event.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    const offsetPx = event.clientY - rect.top
    dragOffsetMinutes.value = Math.floor(offsetPx / SLOT_HEIGHT_PX) * 5
  }

  function onDragOver(event: DragEvent) {
    event.preventDefault()
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move'
  }

  async function onDrop(event: DragEvent, targetDate: Date, columnEl: HTMLElement) {
    event.preventDefault()
    if (!dragging.value) return

    const rect = columnEl.getBoundingClientRect()
    const offsetPx = event.clientY - rect.top
    const totalMinutes = Math.floor(offsetPx / SLOT_HEIGHT_PX) * 5 - dragOffsetMinutes.value

    const newStart = new Date(targetDate)
    newStart.setHours(0, 0, 0, 0)
    newStart.setMinutes(Math.max(0, totalMinutes))

    const duration =
      (dragging.value.endTime.getTime() - dragging.value.startTime.getTime()) / 60000
    const newEnd = new Date(newStart.getTime() + duration * 60000)

    await store.updateAppointment(dragging.value.id, {
      startTime: newStart,
      endTime: newEnd,
    })

    dragging.value = null
  }

  function onDragEnd() {
    dragging.value = null
  }

  return { dragging, onDragStart, onDragOver, onDrop, onDragEnd }
}
