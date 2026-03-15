import { ref, computed } from 'vue'
import type { Appointment } from '../types'

export type CalendarView = 'day' | 'week' | 'month'

export function useCalendar() {
  const currentDate = ref(new Date())
  const view = ref<CalendarView>('week')

  // ─── Navigation ────────────────────────────────────────────────────────────
  function goToToday() {
    currentDate.value = new Date()
  }

  function navigate(direction: 1 | -1) {
    const d = new Date(currentDate.value)
    if (view.value === 'day') {
      d.setDate(d.getDate() + direction)
    } else if (view.value === 'week') {
      d.setDate(d.getDate() + direction * 7)
    } else {
      d.setMonth(d.getMonth() + direction)
    }
    currentDate.value = d
  }

  // ─── Date helpers ──────────────────────────────────────────────────────────
  const startOfWeek = computed(() => {
    const d = new Date(currentDate.value)
    const day = d.getDay() // 0 = Sun
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Monday start
    d.setDate(diff)
    d.setHours(0, 0, 0, 0)
    return d
  })

  const weekDays = computed<Date[]>(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek.value)
      d.setDate(d.getDate() + i)
      return d
    })
  })

  const monthDays = computed<Date[]>(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    // Start from Monday of the week containing the 1st
    const startDay = new Date(firstDay)
    const dayOfWeek = startDay.getDay()
    startDay.setDate(startDay.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

    // End on Sunday of the week containing the last day
    const endDay = new Date(lastDay)
    const endDayOfWeek = endDay.getDay()
    if (endDayOfWeek !== 0) {
      endDay.setDate(endDay.getDate() + (7 - endDayOfWeek))
    }

    const days: Date[] = []
    const cur = new Date(startDay)
    while (cur <= endDay) {
      days.push(new Date(cur))
      cur.setDate(cur.getDate() + 1)
    }
    return days
  })

  // ─── Time slots (5-min increments) ─────────────────────────────────────────
  const timeSlots = computed<string[]>(() => {
    const slots: string[] = []
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 5) {
        slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
      }
    }
    return slots
  })

  // ─── Label helpers ──────────────────────────────────────────────────────────
  const headerLabel = computed(() => {
    const locale = 'sl-SI'
    if (view.value === 'day') {
      return currentDate.value.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    }
    if (view.value === 'week') {
      const start = weekDays.value[0]
      const end = weekDays.value[6]
      return `${start.toLocaleDateString(locale, { day: 'numeric', month: 'short' })} – ${end.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })}`
    }
    return currentDate.value.toLocaleDateString(locale, { month: 'long', year: 'numeric' })
  })

  // ─── Appointment position helpers ──────────────────────────────────────────
  function minutesFromMidnight(date: Date) {
    return date.getHours() * 60 + date.getMinutes()
  }

  const SLOT_HEIGHT_PX = 12 // each 5-min slot = 12px  → 1hr = 144px

  function topForTime(date: Date) {
    return (minutesFromMidnight(date) / 5) * SLOT_HEIGHT_PX
  }

  function heightForDuration(startTime: Date, endTime: Date) {
    const mins = (endTime.getTime() - startTime.getTime()) / 60000
    return (mins / 5) * SLOT_HEIGHT_PX
  }

  function snapToFiveMinutes(date: Date): Date {
    const d = new Date(date)
    const mins = d.getMinutes()
    d.setMinutes(Math.floor(mins / 5) * 5, 0, 0)
    return d
  }

  function appointmentsForDay(appointments: Appointment[], day: Date) {
    return appointments.filter((a) => {
      const s = a.startTime
      return (
        s.getFullYear() === day.getFullYear() &&
        s.getMonth() === day.getMonth() &&
        s.getDate() === day.getDate()
      )
    })
  }

  function isSameDay(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    )
  }

  function isCurrentMonth(date: Date) {
    return date.getMonth() === currentDate.value.getMonth()
  }

  return {
    currentDate,
    view,
    goToToday,
    navigate,
    startOfWeek,
    weekDays,
    monthDays,
    timeSlots,
    headerLabel,
    SLOT_HEIGHT_PX,
    topForTime,
    heightForDuration,
    snapToFiveMinutes,
    appointmentsForDay,
    isSameDay,
    isCurrentMonth,
    minutesFromMidnight,
  }
}
