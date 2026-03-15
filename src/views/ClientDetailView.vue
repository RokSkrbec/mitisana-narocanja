<template>
  <div class="flex flex-col h-screen bg-gray-50 overflow-hidden">

    <!-- Header -->
    <header class="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
      <Button icon="pi pi-arrow-left" text rounded @click="router.push('/clients')" v-tooltip.bottom="'Nazaj na stranke'" />
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-bold text-gray-800 truncate">
          {{ client ? `${client.firstName} ${client.lastName}` : '…' }}
        </h1>
        <p class="text-xs text-gray-400">Kartica stranke</p>
      </div>
      <Button v-if="client" icon="pi pi-pencil" text rounded size="small" v-tooltip.bottom="'Uredi'" @click="openEditDialog" />
      <Button v-if="client" icon="pi pi-trash" text rounded size="small" severity="danger" v-tooltip.bottom="'Izbriši'" @click="confirmDelete" />
    </header>

    <!-- Loading -->
    <div v-if="!client" class="flex-1 flex items-center justify-center text-gray-400">
      <i class="pi pi-spin pi-spinner text-2xl" />
    </div>

    <div v-else class="flex-1 overflow-y-auto">
      <div class="max-w-3xl mx-auto px-6 py-6 flex flex-col gap-6">

        <!-- ── Client info card ── -->
        <div class="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex gap-5 items-start">
          <div class="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
            <span class="text-pink-600 font-bold text-xl">
              {{ client.firstName[0] }}{{ client.lastName[0] }}
            </span>
          </div>
          <div class="flex flex-col gap-1 flex-1 min-w-0">
            <h2 class="text-xl font-bold text-gray-800">{{ client.firstName }} {{ client.lastName }}</h2>
            <p class="text-sm text-gray-500 flex items-center gap-2">
              <i class="pi pi-phone text-pink-400" />
              <a :href="`tel:${client.phone}`" class="hover:text-pink-500 transition-colors">{{ client.phone }}</a>
            </p>
            <p v-if="client.notes" class="text-sm text-gray-400 flex items-start gap-2 mt-1">
              <i class="pi pi-info-circle text-gray-300 mt-0.5" />
              {{ client.notes }}
            </p>
          </div>

          <!-- Stats -->
          <div class="flex gap-4 flex-shrink-0">
            <div class="text-center">
              <p class="text-2xl font-bold text-gray-800">{{ totalAppointments }}</p>
              <p class="text-xs text-gray-400">naročil skupaj</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-pink-500">{{ upcomingAppointments }}</p>
              <p class="text-xs text-gray-400">prihajajoča</p>
            </div>
          </div>
        </div>

        <!-- ── Appointment History ── -->
        <section>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Zgodovina naročil
          </h3>

          <div v-if="clientAppointments.length === 0" class="text-sm text-gray-400 italic">
            Stranka še nima naročil.
          </div>

          <div v-else class="flex flex-col gap-2">
            <div
              v-for="appt in clientAppointments"
              :key="appt.id"
              class="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm flex items-center gap-3"
              :class="appt.status === 'cancelled' ? 'opacity-60' : ''"
            >
              <!-- Color dot -->
              <div
                class="w-3 h-3 rounded-full flex-shrink-0"
                :style="{ backgroundColor: appt.color }"
              />

              <!-- Details -->
              <div class="flex-1 min-w-0">
                <p class="font-medium text-gray-800 truncate">{{ appt.typeName }}</p>
                <p class="text-xs text-gray-400">
                  {{ formatDate(appt.startTime) }}
                  &nbsp;·&nbsp;
                  {{ formatTime(appt.startTime) }} – {{ formatTime(appt.endTime) }}
                  &nbsp;·&nbsp;
                  {{ durationLabel(appt.startTime, appt.endTime) }}
                </p>
              </div>

              <!-- Status badge -->
              <span
                class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                :class="statusBadgeClass(appt.status)"
              >
                {{ statusLabel(appt.status) }}
              </span>

              <!-- Future indicator -->
              <span v-if="isFuture(appt.startTime)" class="text-[10px] font-semibold text-blue-400 flex-shrink-0">
                PRIHAJAJOČE
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>

    <!-- Edit Dialog -->
    <Dialog
      v-model:visible="editDialogVisible"
      header="Uredi stranko"
      modal
      class="w-full max-w-sm"
    >
      <div class="flex flex-col gap-4 pt-2">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Ime <span class="text-red-400">*</span></label>
            <InputText v-model="editForm.firstName" placeholder="Ana" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Priimek <span class="text-red-400">*</span></label>
            <InputText v-model="editForm.lastName" placeholder="Novak" class="w-full" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Telefon <span class="text-red-400">*</span></label>
          <InputText v-model="editForm.phone" placeholder="+386 41 123 456" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Opomba</label>
          <Textarea v-model="editForm.notes" rows="2" placeholder="Alergije, preference..." class="w-full" />
        </div>
      </div>
      <template #footer>
        <Button label="Prekliči" text @click="editDialogVisible = false" />
        <Button
          label="Shrani"
          :disabled="!editForm.firstName || !editForm.lastName || !editForm.phone"
          :loading="saving"
          @click="saveEdit"
        />
      </template>
    </Dialog>

    <ConfirmDialog />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useClientsStore } from '../stores/clients'
import { useAppointmentsStore } from '../stores/appointments'
import { useConfirm } from 'primevue/useconfirm'
import type { AppointmentStatus } from '../types'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ConfirmDialog from 'primevue/confirmdialog'

const router = useRouter()
const route = useRoute()
const clientsStore = useClientsStore()
const appointmentsStore = useAppointmentsStore()
const confirm = useConfirm()

onMounted(() => {
  clientsStore.subscribe()
  appointmentsStore.subscribe()
})
onUnmounted(() => {
  clientsStore.unsubscribeAll()
  appointmentsStore.unsubscribeAll()
})

// ─── Client ────────────────────────────────────────────────────────────────
const client = computed(() =>
  clientsStore.clients.find((c) => c.id === route.params.id)
)

// ─── Appointments for this client ──────────────────────────────────────────
const clientAppointments = computed(() => {
  if (!client.value) return []
  const fullName = `${client.value.firstName} ${client.value.lastName}`
  return appointmentsStore.appointments
    .filter((a) => !a.blocked && a.clientName === fullName)
    .sort((a, b) => b.startTime.getTime() - a.startTime.getTime())
})

const totalAppointments = computed(() => clientAppointments.value.length)
const upcomingAppointments = computed(() =>
  clientAppointments.value.filter((a) => isFuture(a.startTime) && a.status === 'confirmed').length
)

// ─── Helpers ───────────────────────────────────────────────────────────────
function isFuture(date: Date) {
  return date.getTime() > Date.now()
}

function formatDate(date: Date) {
  return date.toLocaleDateString('sl-SI', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('sl-SI', { hour: '2-digit', minute: '2-digit' })
}

function durationLabel(start: Date, end: Date) {
  const mins = Math.round((end.getTime() - start.getTime()) / 60000)
  return mins >= 60
    ? `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? `${mins % 60}min` : ''}`.trim()
    : `${mins} min`
}

function statusLabel(status: AppointmentStatus) {
  return { confirmed: 'Potrjeno', cancelled: 'Odpovedano', 'no-show': 'Ni prišel' }[status] ?? status
}

function statusBadgeClass(status: AppointmentStatus) {
  return {
    confirmed: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
    'no-show': 'bg-orange-100 text-orange-700',
  }[status] ?? 'bg-gray-100 text-gray-500'
}

// ─── Edit ──────────────────────────────────────────────────────────────────
const editDialogVisible = ref(false)
const saving = ref(false)
const editForm = reactive({ firstName: '', lastName: '', phone: '', notes: '' })

function openEditDialog() {
  if (!client.value) return
  editForm.firstName = client.value.firstName
  editForm.lastName = client.value.lastName
  editForm.phone = client.value.phone
  editForm.notes = client.value.notes ?? ''
  editDialogVisible.value = true
}

async function saveEdit() {
  if (!client.value) return
  saving.value = true
  try {
    await clientsStore.updateClient(client.value.id, {
      firstName: editForm.firstName,
      lastName: editForm.lastName,
      phone: editForm.phone,
      notes: editForm.notes,
    })
    editDialogVisible.value = false
  } finally {
    saving.value = false
  }
}

// ─── Delete ────────────────────────────────────────────────────────────────
function confirmDelete() {
  if (!client.value) return
  confirm.require({
    message: `Izbriši stranko ${client.value.firstName} ${client.value.lastName}?`,
    header: 'Potrdi brisanje',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Prekliči',
    acceptLabel: 'Izbriši',
    acceptClass: 'p-button-danger',
    accept: async () => {
      await clientsStore.deleteClient(client.value!.id)
      router.push('/clients')
    },
  })
}
</script>
