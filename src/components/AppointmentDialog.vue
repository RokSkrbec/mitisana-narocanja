<template>
  <Dialog
    :visible="visible"
    @update:visible="$emit('update:visible', $event)"
    :header="isEdit ? (form.blocked ? 'Uredi blokiran čas' : 'Uredi naročilo') : (form.blocked ? 'Blokiran čas' : 'Novo naročilo')"
    modal
    class="w-full max-w-md"
  >
    <div class="flex flex-col gap-4 pt-2">

      <!-- Mode toggle -->
      <div class="flex rounded-xl overflow-hidden border border-gray-200 text-sm font-medium">
        <button
          class="flex-1 py-2 flex items-center justify-center gap-2 transition-colors"
          :class="!form.blocked ? 'bg-pink-500 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'"
          @click="form.blocked = false"
        >
          <i class="pi pi-calendar" />
          Naročilo
        </button>
        <button
          class="flex-1 py-2 flex items-center justify-center gap-2 transition-colors border-l border-gray-200"
          :class="form.blocked ? 'bg-gray-700 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'"
          @click="form.blocked = true"
        >
          <i class="pi pi-lock" />
          Blokiran čas
        </button>
      </div>

      <!-- ── APPOINTMENT FIELDS ── -->
      <template v-if="!form.blocked">

        <!-- Client — searchable dropdown -->
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Stranka</label>
          <div class="flex gap-2">
            <AutoComplete
              v-model="clientQuery"
              :suggestions="filteredClients"
              option-label="fullName"
              placeholder="Išči stranko..."
              class="flex-1"
              force-selection
              dropdown
              @complete="searchClients"
              @item-select="onClientSelect"
              @clear="form.clientId = ''; form.clientName = ''"
            >
              <template #option="{ option }">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <span class="text-pink-600 font-bold text-xs">{{ option.firstName[0] }}{{ option.lastName[0] }}</span>
                  </div>
                  <div>
                    <p class="text-sm font-medium">{{ option.fullName }}</p>
                    <p class="text-xs text-gray-400">{{ option.phone }}</p>
                  </div>
                </div>
              </template>
            </AutoComplete>
            <Button
              icon="pi pi-user-plus"
              v-tooltip.top="'Dodaj novo stranko'"
              outlined
              @click="showNewClientForm = !showNewClientForm"
              :class="showNewClientForm ? 'ring-2 ring-pink-400' : ''"
            />
          </div>

          <!-- Inline new client form -->
          <div v-if="showNewClientForm" class="mt-2 border border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col gap-3">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nova stranka</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-gray-500">Ime *</label>
                <InputText v-model="newClient.firstName" placeholder="Ana" size="small" class="w-full" />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-xs font-medium text-gray-500">Priimek *</label>
                <InputText v-model="newClient.lastName" placeholder="Novak" size="small" class="w-full" />
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-gray-500">Telefon *</label>
              <InputText v-model="newClient.phone" placeholder="+386 41 123 456" size="small" class="w-full" />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-medium text-gray-500">Opomba</label>
              <InputText v-model="newClient.notes" placeholder="Alergije, preference..." size="small" class="w-full" />
            </div>
            <div class="flex justify-end gap-2">
              <Button label="Prekliči" text size="small" @click="cancelNewClient" />
              <Button
                label="Dodaj stranko"
                size="small"
                icon="pi pi-check"
                :disabled="!newClient.firstName || !newClient.lastName || !newClient.phone"
                :loading="savingClient"
                @click="saveNewClient"
              />
            </div>
          </div>
        </div>

        <!-- Appointment Type -->
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Vrsta naročila</label>
          <Select
            v-model="form.typeId"
            :options="typeOptions"
            option-label="label"
            option-value="value"
            option-group-label="label"
            option-group-children="items"
            placeholder="Izberi vrsto"
            class="w-full"
            @change="onTypeChange"
          >
            <template #option="{ option }">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: option.color }" />
                <span class="flex-1">{{ option.label }}</span>
                <span v-if="option.price != null" class="text-xs text-gray-400 ml-auto">{{ option.price.toFixed(2) }} €</span>
              </div>
            </template>
          </Select>
          <p v-if="selectedTypePrice != null" class="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <i class="pi pi-tag" style="font-size: 11px" />
            Cena: <span class="font-semibold text-gray-700">{{ selectedTypePrice.toFixed(2) }} €</span>
          </p>
        </div>

      </template>

      <!-- ── BLOCKED TIME FIELDS ── -->
      <template v-else>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Naziv</label>
          <InputText
            v-model="form.clientName"
            placeholder="npr. Odmor, Sestanek…"
            class="w-full"
          />
        </div>
      </template>

      <!-- ── SHARED: Date / Time / Duration / Notes ── -->
      <!-- Status — only for regular appointments -->
      <div v-if="!form.blocked" class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-600">Status</label>
        <div class="flex gap-2">
          <button
            v-for="opt in statusOptions"
            :key="opt.value"
            class="flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            :class="form.status === opt.value
              ? opt.activeClass
              : 'border-gray-200 text-gray-400 bg-white hover:bg-gray-50'"
            @click="form.status = opt.value"
          >
            <i :class="opt.icon" style="font-size: 11px" />
            {{ opt.label }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Datum</label>
          <DatePicker v-model="form.date" date-format="dd.mm.yy" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Čas začetka</label>
          <DatePicker
            v-model="form.startTime"
            time-only
            hour-format="24"
            :step-minute="5"
            class="w-full"
          />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-600">Trajanje (minute)</label>
        <InputNumber v-model="form.duration" :min="5" :step="5" class="w-full" />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium text-gray-600">Opombe</label>
        <Textarea v-model="form.notes" rows="2" placeholder="Opcijsko..." class="w-full" />
      </div>

    </div>

    <template #footer>
      <div class="flex justify-between w-full">
        <Button
          v-if="isEdit"
          label="Izbriši"
          severity="danger"
          text
          icon="pi pi-trash"
          @click="handleDelete"
        />
        <div class="flex gap-2 ml-auto">
          <Button label="Prekliči" text @click="$emit('update:visible', false)" />
          <Button
            label="Shrani"
            :disabled="form.blocked ? !form.clientName : (!form.clientName || !form.typeId)"
            :loading="saving"
            @click="handleSave"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import { useCategoriesStore } from '../stores/categories'
import { useAppointmentsStore } from '../stores/appointments'
import { useClientsStore } from '../stores/clients'
import { useConfirm } from 'primevue/useconfirm'
import type { Appointment, AppointmentStatus } from '../types'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import AutoComplete from 'primevue/autocomplete'
import DatePicker from 'primevue/datepicker'
import Textarea from 'primevue/textarea'

const props = defineProps<{
  visible: boolean
  appointment: Appointment | null
  initialTime: Date | null
  initialBlocked?: boolean
}>()

const emit = defineEmits<{
  'update:visible': [value: boolean]
  saved: []
  deleted: []
}>()

const categoriesStore = useCategoriesStore()
const appointmentsStore = useAppointmentsStore()
const clientsStore = useClientsStore()
const confirm = useConfirm()
const saving = ref(false)

const isEdit = computed(() => !!props.appointment)

// ─── Client search ─────────────────────────────────────────────────────────
interface ClientOption {
  id: string
  firstName: string
  lastName: string
  phone: string
  fullName: string
}

const clientQuery = ref<string | ClientOption>('')
const filteredClients = ref<ClientOption[]>([])

const allClientOptions = computed<ClientOption[]>(() =>
  clientsStore.clients.map((c) => ({
    id: c.id,
    firstName: c.firstName,
    lastName: c.lastName,
    phone: c.phone,
    fullName: `${c.firstName} ${c.lastName}`,
  }))
)

function searchClients(event: { query: string }) {
  const q = event.query.toLowerCase()
  filteredClients.value = allClientOptions.value.filter(
    (c) =>
      c.fullName.toLowerCase().includes(q) ||
      c.phone.includes(q)
  )
}

function onClientSelect(event: { value: ClientOption }) {
  form.clientId = event.value.id
  form.clientName = event.value.fullName
}

// ─── Inline new client ─────────────────────────────────────────────────────
const showNewClientForm = ref(false)
const savingClient = ref(false)
const newClient = reactive({ firstName: '', lastName: '', phone: '', notes: '' })

function cancelNewClient() {
  showNewClientForm.value = false
  newClient.firstName = ''
  newClient.lastName = ''
  newClient.phone = ''
  newClient.notes = ''
}

async function saveNewClient() {
  savingClient.value = true
  try {
    await clientsStore.addClient({
      firstName: newClient.firstName,
      lastName: newClient.lastName,
      phone: newClient.phone,
      notes: newClient.notes,
    })
    const added = clientsStore.clients.find(
      (c) =>
        c.firstName === newClient.firstName &&
        c.lastName === newClient.lastName &&
        c.phone === newClient.phone
    )
    if (added) {
      const option: ClientOption = {
        id: added.id,
        firstName: added.firstName,
        lastName: added.lastName,
        phone: added.phone,
        fullName: `${added.firstName} ${added.lastName}`,
      }
      clientQuery.value = option
      form.clientId = added.id
      form.clientName = option.fullName
    }
    cancelNewClient()
  } finally {
    savingClient.value = false
  }
}

// ─── Status options ────────────────────────────────────────────────────────
const statusOptions: { value: AppointmentStatus; label: string; icon: string; activeClass: string }[] = [
  {
    value: 'confirmed',
    label: 'Potrjeno',
    icon: 'pi pi-check-circle',
    activeClass: 'border-green-400 text-green-700 bg-green-50',
  },
  {
    value: 'cancelled',
    label: 'Odpovedano',
    icon: 'pi pi-times-circle',
    activeClass: 'border-red-400 text-red-700 bg-red-50',
  },
  {
    value: 'no-show',
    label: 'Ni prišel',
    icon: 'pi pi-user-minus',
    activeClass: 'border-orange-400 text-orange-700 bg-orange-50',
  },
]

// ─── Form state ────────────────────────────────────────────────────────────
const form = reactive({
  blocked: false,
  clientId: '',
  clientName: '',
  typeId: '',
  status: 'confirmed' as AppointmentStatus,
  date: new Date(),
  startTime: new Date(),
  duration: 60,
  notes: '',
})

// ─── Grouped options for appointment type Select ───────────────────────────
const typeOptions = computed(() => {
  return categoriesStore.categories
    .map((cat) => ({
      label: cat.name,
      items: categoriesStore.appointmentTypes
        .filter((t) => t.categoryId === cat.id)
        .map((t) => ({
          label: t.name,
          value: t.id,
          color: t.color ?? cat.color,
          duration: t.duration,
          price: t.price ?? null,
        })),
    }))
    .filter((g) => g.items.length > 0)
})

function onTypeChange() {
  const type = categoriesStore.getTypeById(form.typeId)
  if (type) form.duration = type.duration
}

const selectedTypePrice = computed<number | null>(() => {
  if (!form.typeId) return null
  const type = categoriesStore.getTypeById(form.typeId)
  return type?.price ?? null
})

// ─── Populate form when dialog opens ──────────────────────────────────────
watch(
  () => props.visible,
  (val) => {
    if (!val) return
    showNewClientForm.value = false
    cancelNewClient()
    if (props.appointment) {
      form.blocked = props.appointment.blocked ?? false
      form.clientId = ''
      form.clientName = props.appointment.clientName
      clientQuery.value = props.appointment.clientName
      form.typeId = props.appointment.typeId
      form.status = props.appointment.status ?? 'confirmed'
      form.date = new Date(props.appointment.startTime)
      form.startTime = new Date(props.appointment.startTime)
      form.duration =
        (props.appointment.endTime.getTime() - props.appointment.startTime.getTime()) / 60000
      form.notes = props.appointment.notes ?? ''
    } else {
      const base = props.initialTime ?? new Date()
      form.blocked = props.initialBlocked ?? false
      form.clientId = ''
      form.clientName = ''
      clientQuery.value = ''
      form.typeId = ''
      form.status = 'confirmed'
      form.date = new Date(base)
      form.startTime = new Date(base)
      form.duration = 60
      form.notes = ''
    }
  }
)

// ─── Save ──────────────────────────────────────────────────────────────────
async function handleSave() {
  saving.value = true
  try {
    const startTime = new Date(form.date)
    startTime.setHours(form.startTime.getHours(), form.startTime.getMinutes(), 0, 0)
    const endTime = new Date(startTime.getTime() + form.duration * 60000)

    let payload: Omit<Appointment, 'id' | 'createdAt'>

    if (form.blocked) {
      payload = {
        blocked: true,
        status: form.status,
        clientName: form.clientName,
        typeId: '',
        typeName: '',
        categoryId: '',
        color: '#e5e7eb',
        notes: form.notes,
        startTime,
        endTime,
      }
    } else {
      const type = categoriesStore.getTypeById(form.typeId)
      const category = type ? categoriesStore.getCategoryById(type.categoryId) : null
      payload = {
        blocked: false,
        status: form.status,
        clientName: form.clientName,
        typeId: form.typeId,
        typeName: type?.name ?? '',
        categoryId: type?.categoryId ?? '',
        color: type?.color ?? category?.color ?? '#94a3b8',
        ...(type?.price != null ? { price: type.price } : {}),
        notes: form.notes,
        startTime,
        endTime,
      }
    }

    if (props.appointment) {
      await appointmentsStore.updateAppointment(props.appointment.id, payload)
    } else {
      await appointmentsStore.addAppointment(payload)
    }
    emit('saved')
  } finally {
    saving.value = false
  }
}

// ─── Delete ────────────────────────────────────────────────────────────────
function handleDelete() {
  if (!props.appointment) return
  confirm.require({
    message: `Izbriši "${props.appointment.clientName}"?`,
    header: 'Potrdi brisanje',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Prekliči',
    acceptLabel: 'Izbriši',
    acceptClass: 'p-button-danger',
    accept: async () => {
      await appointmentsStore.deleteAppointment(props.appointment!.id)
      emit('deleted')
    },
  })
}
</script>
