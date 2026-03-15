<template>
  <div class="flex flex-col h-screen bg-white overflow-hidden">
    <!-- Top Navbar -->
    <CalendarToolbar
      :header-label="headerLabel"
      :view="view"
      @navigate="navigate"
      @today="goToToday"
      @change-view="view = $event"
      @block-time="openBlockedTime"
    />

    <!-- Calendar Body -->
    <div class="flex-1 min-h-0 overflow-hidden flex flex-col">
      <!-- Day View -->
      <DayView
        v-if="view === 'day'"
        :date="currentDate"
        :appointments="appointmentsStore.appointments"
        :time-slots="timeSlots"
        :slot-height="SLOT_HEIGHT_PX"
        :top-for-time="topForTime"
        :height-for-duration="heightForDuration"
        :snap-to-five="snapToFiveMinutes"
        :appointments-for-day="appointmentsForDay"
        @add-appointment="openNewAppointment"
        @edit-appointment="openEditAppointment"
      />

      <!-- Week View -->
      <WeekView
        v-else-if="view === 'week'"
        :week-days="weekDays"
        :appointments="appointmentsStore.appointments"
        :time-slots="timeSlots"
        :slot-height="SLOT_HEIGHT_PX"
        :top-for-time="topForTime"
        :height-for-duration="heightForDuration"
        :snap-to-five="snapToFiveMinutes"
        :appointments-for-day="appointmentsForDay"
        @add-appointment="openNewAppointment"
        @edit-appointment="openEditAppointment"
      />

      <!-- Month View -->
      <MonthView
        v-else-if="view === 'month'"
        :current-date="currentDate"
        :month-days="monthDays"
        :appointments="appointmentsStore.appointments"
        :is-same-day="isSameDay"
        :is-current-month="isCurrentMonth"
        :appointments-for-day="appointmentsForDay"
        @add-appointment="openNewAppointment"
        @edit-appointment="openEditAppointment"
      />
    </div>

    <!-- Appointment Dialog -->
    <AppointmentDialog
      v-model:visible="dialogVisible"
      :appointment="selectedAppointment"
      :initial-time="newAppointmentTime"
      :initial-blocked="newAppointmentBlocked"
      @saved="dialogVisible = false"
      @deleted="dialogVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCalendar } from '../composables/useCalendar'
import { useAppointmentsStore } from '../stores/appointments'
import { useCategoriesStore } from '../stores/categories'
import { useClientsStore } from '../stores/clients'
import type { Appointment } from '../types'

import CalendarToolbar from '../components/CalendarToolbar.vue'
import DayView from '../components/DayView.vue'
import WeekView from '../components/WeekView.vue'
import MonthView from '../components/MonthView.vue'
import AppointmentDialog from '../components/AppointmentDialog.vue'

const {
  currentDate, view, goToToday, navigate,
  weekDays, monthDays, timeSlots, headerLabel,
  SLOT_HEIGHT_PX, topForTime, heightForDuration,
  snapToFiveMinutes, appointmentsForDay, isSameDay, isCurrentMonth,
} = useCalendar()

const appointmentsStore = useAppointmentsStore()
const categoriesStore = useCategoriesStore()
const clientsStore = useClientsStore()

const dialogVisible = ref(false)
const selectedAppointment = ref<Appointment | null>(null)
const newAppointmentTime = ref<Date | null>(null)
const newAppointmentBlocked = ref(false)

function openNewAppointment(date: Date) {
  selectedAppointment.value = null
  newAppointmentTime.value = date
  newAppointmentBlocked.value = false
  dialogVisible.value = true
}

function openEditAppointment(appointment: Appointment) {
  selectedAppointment.value = appointment
  newAppointmentTime.value = null
  newAppointmentBlocked.value = false
  dialogVisible.value = true
}

function openBlockedTime() {
  selectedAppointment.value = null
  newAppointmentTime.value = new Date()
  newAppointmentBlocked.value = true
  dialogVisible.value = true
}

onMounted(() => {
  appointmentsStore.subscribe()
  categoriesStore.subscribeAll()
  clientsStore.subscribe()
})

onUnmounted(() => {
  appointmentsStore.unsubscribeAll()
  categoriesStore.unsubscribeAll()
  clientsStore.unsubscribeAll()
})
</script>
