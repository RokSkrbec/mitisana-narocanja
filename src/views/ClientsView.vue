<template>
  <div class="flex flex-col h-screen bg-gray-50 overflow-hidden">

    <!-- Header -->
    <header class="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
      <Button icon="pi pi-arrow-left" text rounded @click="router.push('/')" v-tooltip.bottom="'Nazaj na koledar'" />
      <div class="flex-1">
        <h1 class="text-lg font-bold text-gray-800">Stranke</h1>
        <p class="text-xs text-gray-400">{{ clientsStore.clients.length }} strank</p>
      </div>
      <Button icon="pi pi-plus" label="Dodaj stranko" size="small" @click="openClientDialog()" />
    </header>

    <!-- Search bar -->
    <div class="px-6 py-3 bg-white border-b border-gray-100 flex-shrink-0">
      <div class="relative max-w-md">
        <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
        <input
          v-model="search"
          type="text"
          placeholder="Išči po imenu ali telefonu…"
          class="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 bg-gray-50"
        />
      </div>
    </div>

    <!-- List -->
    <div class="flex-1 overflow-y-auto">
      <div class="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-2">

        <div v-if="filteredClients.length === 0" class="text-sm text-gray-400 italic mt-6 text-center">
          {{ search ? 'Nobena stranka ne ustreza iskanju.' : 'Še ni dodanih strank.' }}
        </div>

        <div
          v-for="client in filteredClients"
          :key="client.id"
          class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:border-pink-200 hover:shadow-md transition-all cursor-pointer"
          @click="router.push(`/clients/${client.id}`)"
        >
          <!-- Avatar -->
          <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
            <span class="text-pink-600 font-bold text-sm">
              {{ client.firstName[0] }}{{ client.lastName[0] }}
            </span>
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <p class="font-medium text-gray-800">{{ client.firstName }} {{ client.lastName }}</p>
            <p class="text-sm text-gray-400 truncate">
              <i class="pi pi-phone mr-1 text-xs" />{{ client.phone }}
              <span v-if="client.notes" class="ml-2 text-gray-300">· {{ client.notes }}</span>
            </p>
          </div>

          <!-- Actions -->
          <div class="flex gap-1" @click.stop>
            <Button icon="pi pi-pencil" text rounded size="small" v-tooltip.top="'Uredi'" @click="openClientDialog(client)" />
            <Button icon="pi pi-trash" text rounded size="small" severity="danger" v-tooltip.top="'Izbriši'" @click="confirmDeleteClient(client)" />
          </div>

          <i class="pi pi-chevron-right text-gray-300 text-xs flex-shrink-0" />
        </div>

      </div>
    </div>

    <!-- Add/Edit Client Dialog -->
    <Dialog
      v-model:visible="clientDialogVisible"
      :header="editingClient ? 'Uredi stranko' : 'Nova stranka'"
      modal
      class="w-full max-w-sm"
    >
      <div class="flex flex-col gap-4 pt-2">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Ime <span class="text-red-400">*</span></label>
            <InputText v-model="clientForm.firstName" placeholder="Ana" class="w-full" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-600">Priimek <span class="text-red-400">*</span></label>
            <InputText v-model="clientForm.lastName" placeholder="Novak" class="w-full" />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Telefon <span class="text-red-400">*</span></label>
          <InputText v-model="clientForm.phone" placeholder="+386 41 123 456" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Opomba</label>
          <Textarea v-model="clientForm.notes" rows="2" placeholder="Alergije, preference..." class="w-full" />
        </div>
      </div>
      <template #footer>
        <Button label="Prekliči" text @click="clientDialogVisible = false" />
        <Button
          label="Shrani"
          :disabled="!clientForm.firstName || !clientForm.lastName || !clientForm.phone"
          :loading="savingClient"
          @click="saveClient"
        />
      </template>
    </Dialog>

    <ConfirmDialog />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useClientsStore } from '../stores/clients'
import { useConfirm } from 'primevue/useconfirm'
import type { Client } from '../types'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ConfirmDialog from 'primevue/confirmdialog'

const router = useRouter()
const clientsStore = useClientsStore()
const confirm = useConfirm()

onMounted(() => clientsStore.subscribe())
onUnmounted(() => clientsStore.unsubscribeAll())

// ─── Search ────────────────────────────────────────────────────────────────
const search = ref('')
const filteredClients = computed(() => {
  const q = search.value.toLowerCase()
  if (!q) return clientsStore.clients
  return clientsStore.clients.filter(
    (c) =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) ||
      c.phone.includes(q)
  )
})

// ─── Add / Edit dialog ─────────────────────────────────────────────────────
const clientDialogVisible = ref(false)
const editingClient = ref<Client | null>(null)
const savingClient = ref(false)
const clientForm = reactive({ firstName: '', lastName: '', phone: '', notes: '' })

function openClientDialog(client?: Client) {
  editingClient.value = client ?? null
  clientForm.firstName = client?.firstName ?? ''
  clientForm.lastName = client?.lastName ?? ''
  clientForm.phone = client?.phone ?? ''
  clientForm.notes = client?.notes ?? ''
  clientDialogVisible.value = true
}

async function saveClient() {
  savingClient.value = true
  try {
    const payload = {
      firstName: clientForm.firstName,
      lastName: clientForm.lastName,
      phone: clientForm.phone,
      notes: clientForm.notes,
    }
    if (editingClient.value) {
      await clientsStore.updateClient(editingClient.value.id, payload)
    } else {
      await clientsStore.addClient(payload)
    }
    clientDialogVisible.value = false
  } finally {
    savingClient.value = false
  }
}

function confirmDeleteClient(client: Client) {
  confirm.require({
    message: `Izbriši stranko ${client.firstName} ${client.lastName}?`,
    header: 'Potrdi brisanje',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Prekliči',
    acceptLabel: 'Izbriši',
    acceptClass: 'p-button-danger',
    accept: () => clientsStore.deleteClient(client.id),
  })
}
</script>
