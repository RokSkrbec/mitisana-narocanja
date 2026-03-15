<template>
  <div class="flex flex-col h-screen bg-gray-50 overflow-hidden">

    <!-- Header -->
    <header class="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
      <Button icon="pi pi-arrow-left" text rounded @click="router.push('/')" v-tooltip.bottom="'Nazaj na koledar'" />
      <div class="flex-1">
        <h1 class="text-lg font-bold text-gray-800">Statistika</h1>
        <p class="text-xs text-gray-400">Pregled zaslužka</p>
      </div>
    </header>

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-3xl mx-auto px-6 py-6 flex flex-col gap-6">

        <!-- ── Filters ── -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Filtri</h2>

          <!-- Period presets + custom range -->
          <div class="flex flex-col gap-3">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="preset in periodPresets"
                :key="preset.key"
                class="px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors"
                :class="activePeriod === preset.key
                  ? 'bg-pink-500 text-white border-pink-500'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-pink-300 hover:text-pink-600'"
                @click="applyPreset(preset.key)"
              >
                {{ preset.label }}
              </button>
            </div>

            <!-- Custom range -->
            <div class="flex flex-wrap items-end gap-3">
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-gray-500">Od</label>
                <DatePicker v-model="dateFrom" date-format="dd.mm.yy" class="w-38" @update:model-value="activePeriod = 'custom'" />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-gray-500">Do</label>
                <DatePicker v-model="dateTo" date-format="dd.mm.yy" class="w-38" @update:model-value="activePeriod = 'custom'" />
              </div>
              <div class="flex flex-col gap-1 min-w-48">
                <label class="text-xs font-medium text-gray-500">Stranka (opcijsko)</label>
                <Select
                  v-model="selectedClient"
                  :options="clientOptions"
                  option-label="label"
                  option-value="value"
                  placeholder="Vse stranke"
                  show-clear
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- ── Summary cards ── -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-1">
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wide">Skupni zaslužek</p>
            <p class="text-2xl font-bold text-pink-500">{{ formatEur(totalRevenue) }}</p>
            <p class="text-xs text-gray-400">samo potrjena naročila</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-1">
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wide">Naročil skupaj</p>
            <p class="text-2xl font-bold text-gray-800">{{ filteredAppointments.length }}</p>
            <p class="text-xs text-gray-400">vsi statusi</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-1">
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wide">Potrjena</p>
            <p class="text-2xl font-bold text-green-600">{{ confirmedCount }}</p>
            <p class="text-xs text-gray-400">{{ confirmedPct }}% vseh</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col gap-1">
            <p class="text-xs text-gray-400 font-medium uppercase tracking-wide">Odpovedana</p>
            <p class="text-2xl font-bold text-red-500">{{ cancelledCount + noShowCount }}</p>
            <p class="text-xs text-gray-400">{{ cancelledCount }} odp. · {{ noShowCount }} ni prišel</p>
          </div>
        </div>

        <!-- ── Revenue by appointment type ── -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Zaslužek po vrsti naročila</h2>

          <div v-if="revenueByType.length === 0" class="text-sm text-gray-400 italic">
            Ni podatkov za izbrano obdobje.
          </div>

          <div v-else class="flex flex-col gap-3">
            <div v-for="row in revenueByType" :key="row.typeId" class="flex flex-col gap-1">
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: row.color }" />
                  <span class="font-medium text-gray-700">{{ row.typeName }}</span>
                  <span class="text-xs text-gray-400">({{ row.count }}×)</span>
                </div>
                <span class="font-semibold text-gray-800">{{ formatEur(row.revenue) }}</span>
              </div>
              <!-- Progress bar -->
              <div class="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all"
                  :style="{ width: `${row.pct}%`, backgroundColor: row.color }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- ── Per-appointment list ── -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Naročila v obdobju</h2>
            <span class="text-xs text-gray-400">{{ filteredAppointments.length }} vnosov</span>
          </div>

          <div v-if="filteredAppointments.length === 0" class="text-sm text-gray-400 italic">
            Ni naročil za izbrano obdobje.
          </div>

          <div v-else class="flex flex-col gap-2">
            <div
              v-for="appt in sortedAppointments"
              :key="appt.id"
              class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0"
              :class="appt.status === 'cancelled' || appt.status === 'no-show' ? 'opacity-50' : ''"
            >
              <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="{ backgroundColor: appt.color }" />
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-800 truncate">{{ appt.clientName }}</p>
                <p class="text-xs text-gray-400 truncate">
                  {{ appt.typeName }} · {{ formatDate(appt.startTime) }}
                </p>
              </div>
              <span
                class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                :class="statusBadgeClass(appt.status)"
              >{{ statusLabel(appt.status) }}</span>
              <span class="text-sm font-semibold text-gray-700 w-16 text-right flex-shrink-0">
                {{ appt.price != null ? formatEur(appt.price) : '—' }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppointmentsStore } from '../stores/appointments'
import { useClientsStore } from '../stores/clients'
import type { AppointmentStatus } from '../types'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'

const router = useRouter()
const appointmentsStore = useAppointmentsStore()
const clientsStore = useClientsStore()

onMounted(() => {
  appointmentsStore.subscribe()
  clientsStore.subscribe()
})
onUnmounted(() => {
  appointmentsStore.unsubscribeAll()
  clientsStore.unsubscribeAll()
})

// ─── Period presets ────────────────────────────────────────────────────────
type PeriodKey = 'today' | 'week' | 'month' | 'last_month' | 'year' | 'custom'

const periodPresets: { key: PeriodKey; label: string }[] = [
  { key: 'today',      label: 'Danes' },
  { key: 'week',       label: 'Ta teden' },
  { key: 'month',      label: 'Ta mesec' },
  { key: 'last_month', label: 'Prejšnji mesec' },
  { key: 'year',       label: 'Letos' },
]

const activePeriod = ref<PeriodKey>('month')
const dateFrom = ref<Date>(startOfMonth(new Date()))
const dateTo   = ref<Date>(endOfMonth(new Date()))
const selectedClient = ref<string | null>(null)

function startOfDay(d: Date) { const r = new Date(d); r.setHours(0, 0, 0, 0); return r }
function endOfDay(d: Date)   { const r = new Date(d); r.setHours(23, 59, 59, 999); return r }
function startOfWeek(d: Date) {
  const r = new Date(d)
  const day = r.getDay()
  const diff = (day === 0 ? -6 : 1 - day)
  r.setDate(r.getDate() + diff)
  r.setHours(0, 0, 0, 0)
  return r
}
function endOfWeek(d: Date) {
  const r = startOfWeek(d)
  r.setDate(r.getDate() + 6)
  r.setHours(23, 59, 59, 999)
  return r
}
function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1) }
function endOfMonth(d: Date)   { return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999) }
function startOfYear(d: Date)  { return new Date(d.getFullYear(), 0, 1) }
function endOfYear(d: Date)    { return new Date(d.getFullYear(), 11, 31, 23, 59, 59, 999) }

function applyPreset(key: PeriodKey) {
  const now = new Date()
  activePeriod.value = key
  if (key === 'today')      { dateFrom.value = startOfDay(now);  dateTo.value = endOfDay(now) }
  if (key === 'week')       { dateFrom.value = startOfWeek(now); dateTo.value = endOfWeek(now) }
  if (key === 'month')      { dateFrom.value = startOfMonth(now); dateTo.value = endOfMonth(now) }
  if (key === 'last_month') {
    const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    dateFrom.value = startOfMonth(prev)
    dateTo.value   = endOfMonth(prev)
  }
  if (key === 'year')       { dateFrom.value = startOfYear(now); dateTo.value = endOfYear(now) }
}

// ─── Client filter options ─────────────────────────────────────────────────
const clientOptions = computed(() =>
  clientsStore.clients.map((c) => ({
    label: `${c.firstName} ${c.lastName}`,
    value: `${c.firstName} ${c.lastName}`,
  }))
)

// ─── Filtered appointments ─────────────────────────────────────────────────
const filteredAppointments = computed(() => {
  const from = dateFrom.value ? startOfDay(dateFrom.value) : null
  const to   = dateTo.value   ? endOfDay(dateTo.value)     : null

  return appointmentsStore.appointments.filter((a) => {
    if (a.blocked) return false
    if (from && a.startTime < from) return false
    if (to   && a.startTime > to)   return false
    if (selectedClient.value && a.clientName !== selectedClient.value) return false
    return true
  })
})

const sortedAppointments = computed(() =>
  [...filteredAppointments.value].sort((a, b) => b.startTime.getTime() - a.startTime.getTime())
)

// ─── Summary stats ─────────────────────────────────────────────────────────
const confirmedAppointments = computed(() =>
  filteredAppointments.value.filter((a) => a.status === 'confirmed')
)

const totalRevenue = computed(() =>
  confirmedAppointments.value.reduce((sum, a) => sum + (a.price ?? 0), 0)
)

const confirmedCount = computed(() => confirmedAppointments.value.length)
const cancelledCount = computed(() => filteredAppointments.value.filter((a) => a.status === 'cancelled').length)
const noShowCount    = computed(() => filteredAppointments.value.filter((a) => a.status === 'no-show').length)
const confirmedPct   = computed(() => {
  const total = filteredAppointments.value.length
  return total === 0 ? 0 : Math.round((confirmedCount.value / total) * 100)
})

// ─── Revenue by appointment type ───────────────────────────────────────────
const revenueByType = computed(() => {
  const map = new Map<string, { typeName: string; color: string; revenue: number; count: number }>()

  for (const appt of confirmedAppointments.value) {
    if (!appt.typeId || appt.price == null) continue
    if (!map.has(appt.typeId)) {
      map.set(appt.typeId, { typeName: appt.typeName, color: appt.color, revenue: 0, count: 0 })
    }
    const row = map.get(appt.typeId)!
    row.revenue += appt.price
    row.count++
  }

  const maxRevenue = Math.max(...[...map.values()].map((r) => r.revenue), 1)

  return [...map.entries()]
    .map(([typeId, row]) => ({
      typeId,
      ...row,
      pct: Math.round((row.revenue / maxRevenue) * 100),
    }))
    .sort((a, b) => b.revenue - a.revenue)
})

// ─── Helpers ───────────────────────────────────────────────────────────────
function formatEur(value: number) {
  return value.toLocaleString('sl-SI', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })
}

function formatDate(date: Date) {
  return date.toLocaleDateString('sl-SI', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function statusLabel(status: AppointmentStatus) {
  if (status === 'confirmed') return 'Potrjeno'
  if (status === 'cancelled') return 'Odpovedano'
  return 'Ni prišel'
}

function statusBadgeClass(status: AppointmentStatus) {
  if (status === 'confirmed') return 'bg-green-100 text-green-700'
  if (status === 'cancelled') return 'bg-red-100 text-red-600'
  return 'bg-orange-100 text-orange-600'
}
</script>
