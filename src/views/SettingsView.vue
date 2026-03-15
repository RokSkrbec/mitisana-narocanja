<template>
  <div class="flex flex-col h-screen bg-gray-50 overflow-hidden">

    <!-- Settings Header -->
    <header class="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200 flex-shrink-0">
      <Button icon="pi pi-arrow-left" text rounded @click="router.push('/')" v-tooltip.bottom="'Nazaj na koledar'" />
      <h1 class="text-lg font-bold text-gray-800">Nastavitve</h1>
    </header>

    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col px-6 py-8 max-w-4xl mx-auto gap-10">

        <!-- ── Categories Section ─────────────────────────────────── -->
        <section>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-800">Kategorije</h2>
            <Button icon="pi pi-plus" label="Dodaj kategorijo" size="small" @click="openCategoryDialog()" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div
              v-for="cat in categoriesStore.categories"
              :key="cat.id"
              class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm"
            >
              <span class="w-5 h-5 rounded-full flex-shrink-0" :style="{ backgroundColor: cat.color }" />
              <span class="flex-1 font-medium text-gray-700 truncate">{{ cat.name }}</span>
              <Button icon="pi pi-pencil" text size="small" @click="openCategoryDialog(cat)" />
              <Button icon="pi pi-trash" text size="small" severity="danger" @click="confirmDeleteCategory(cat)" />
            </div>
          </div>
        </section>

        <Divider />

        <!-- ── Appointment Types Section ──────────────────────────── -->
        <section>
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-semibold text-gray-800">Vrste naročil</h2>
            <Button icon="pi pi-plus" label="Dodaj vrsto" size="small" @click="openTypeDialog()" />
          </div>

          <div v-if="categoriesStore.categories.length === 0" class="text-sm text-gray-400 italic">
            Najprej dodajte vsaj eno kategorijo.
          </div>

          <div v-else class="flex flex-col gap-6">
            <div
              v-for="cat in categoriesStore.categories"
              :key="cat.id"
            >
              <!-- Category header -->
              <div class="flex items-center gap-2 mb-2">
                <span class="w-3 h-3 rounded-full flex-shrink-0" :style="{ backgroundColor: cat.color }" />
                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide">{{ cat.name }}</h3>
              </div>

              <!-- Types under this category -->
              <div
                v-if="typesForCategory(cat.id).length > 0"
                class="flex flex-col gap-2 pl-5"
              >
                <div
                  v-for="type in typesForCategory(cat.id)"
                  :key="type.id"
                  class="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 shadow-sm"
                >
                  <span
                    class="w-4 h-4 rounded-full flex-shrink-0"
                    :style="{ backgroundColor: type.color || cat.color }"
                  />
                  <div class="flex-1 min-w-0">
                    <p class="font-medium text-gray-700 truncate">{{ type.name }}</p>
                    <p class="text-xs text-gray-400">
                      {{ type.duration }} min
                      <span v-if="type.price != null"> · {{ type.price.toFixed(2) }} €</span>
                    </p>
                  </div>
                  <Button icon="pi pi-pencil" text size="small" @click="openTypeDialog(type)" />
                  <Button icon="pi pi-trash" text size="small" severity="danger" @click="confirmDeleteType(type)" />
                </div>
              </div>
              <p v-else class="pl-5 text-xs text-gray-400 italic">Ni dodanih vrst.</p>
            </div>
          </div>
        </section>

      </div>
    </div>

    <!-- ── Category Dialog ──────────────────────────────────────── -->
    <Dialog
      v-model:visible="categoryDialogVisible"
      :header="editingCategory ? 'Uredi kategorijo' : 'Nova kategorija'"
      modal
      class="w-full max-w-sm"
    >
      <div class="flex flex-col gap-4 pt-2">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Ime kategorije</label>
          <InputText v-model="categoryForm.name" placeholder="npr. Manikura" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-600">Barva</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in categoriesStore.PRESET_COLORS"
              :key="color"
              class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110"
              :class="categoryForm.color === color ? 'border-gray-800 scale-110' : 'border-transparent'"
              :style="{ backgroundColor: color }"
              @click="categoryForm.color = color"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Prekliči" text @click="categoryDialogVisible = false" />
        <Button label="Shrani" :disabled="!categoryForm.name" @click="saveCategory" />
      </template>
    </Dialog>

    <!-- ── Appointment Type Dialog ──────────────────────────────── -->
    <Dialog
      v-model:visible="typeDialogVisible"
      :header="editingType ? 'Uredi vrsto naročila' : 'Nova vrsta naročila'"
      modal
      class="w-full max-w-sm"
    >
      <div class="flex flex-col gap-4 pt-2">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Ime</label>
          <InputText v-model="typeForm.name" placeholder="npr. Gel lak" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Kategorija</label>
          <Select
            v-model="typeForm.categoryId"
            :options="categoriesStore.categories"
            option-label="name"
            option-value="id"
            placeholder="Izberi kategorijo"
            class="w-full"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Trajanje (minute)</label>
          <InputNumber v-model="typeForm.duration" :min="5" :step="5" class="w-full" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-600">Cena (€, opcijsko)</label>
          <InputNumber v-model="typeForm.price" :min="0" :step="0.5" :max-fraction-digits="2" placeholder="npr. 25.00" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-600">Barva (opcijsko — prepiše barvo kategorije)</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in [null, ...categoriesStore.PRESET_COLORS]"
              :key="color ?? 'none'"
              class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center"
              :class="typeForm.color === color ? 'border-gray-800 scale-110' : 'border-gray-200'"
              :style="color ? { backgroundColor: color } : { backgroundColor: '#f3f4f6' }"
              @click="typeForm.color = color"
            >
              <i v-if="!color" class="pi pi-times text-xs text-gray-400" />
            </button>
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Prekliči" text @click="typeDialogVisible = false" />
        <Button label="Shrani" :disabled="!typeForm.name || !typeForm.categoryId" @click="saveType" />
      </template>
    </Dialog>

    <ConfirmDialog />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoriesStore } from '../stores/categories'
import { useConfirm } from 'primevue/useconfirm'
import type { AppointmentCategory, AppointmentType } from '../types'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import Divider from 'primevue/divider'
import ConfirmDialog from 'primevue/confirmdialog'

const router = useRouter()
const categoriesStore = useCategoriesStore()
const confirm = useConfirm()

onMounted(() => {
  categoriesStore.subscribeAll()
})
onUnmounted(() => {
  categoriesStore.unsubscribeAll()
})

// ─── Category ──────────────────────────────────────────────────────────────
const categoryDialogVisible = ref(false)
const editingCategory = ref<AppointmentCategory | null>(null)
const categoryForm = reactive({ name: '', color: '#EF4444' })

function openCategoryDialog(cat?: AppointmentCategory) {
  editingCategory.value = cat ?? null
  categoryForm.name = cat?.name ?? ''
  categoryForm.color = cat?.color ?? '#EF4444'
  categoryDialogVisible.value = true
}

async function saveCategory() {
  if (editingCategory.value) {
    await categoriesStore.updateCategory(editingCategory.value.id, {
      name: categoryForm.name,
      color: categoryForm.color,
    })
  } else {
    await categoriesStore.addCategory(categoryForm.name, categoryForm.color)
  }
  categoryDialogVisible.value = false
}

function confirmDeleteCategory(cat: AppointmentCategory) {
  confirm.require({
    message: `Ste prepričani, da želite izbrisati kategorijo "${cat.name}"?`,
    header: 'Potrdi brisanje',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Prekliči',
    acceptLabel: 'Izbriši',
    acceptClass: 'p-button-danger',
    accept: () => categoriesStore.deleteCategory(cat.id),
  })
}

// ─── Appointment Types ─────────────────────────────────────────────────────
const typeDialogVisible = ref(false)
const editingType = ref<AppointmentType | null>(null)
const typeForm = reactive<{
  name: string
  categoryId: string
  duration: number
  price: number | null
  color: string | null
}>({ name: '', categoryId: '', duration: 60, price: null, color: null })

function openTypeDialog(type?: AppointmentType) {
  editingType.value = type ?? null
  typeForm.name = type?.name ?? ''
  typeForm.categoryId = type?.categoryId ?? ''
  typeForm.duration = type?.duration ?? 60
  typeForm.price = type?.price ?? null
  typeForm.color = type?.color ?? null
  typeDialogVisible.value = true
}

async function saveType() {
  const payload = {
    name: typeForm.name,
    categoryId: typeForm.categoryId,
    duration: typeForm.duration,
    ...(typeForm.price != null ? { price: typeForm.price } : {}),
    ...(typeForm.color ? { color: typeForm.color } : {}),
  }
  if (editingType.value) {
    await categoriesStore.updateAppointmentType(editingType.value.id, payload)
  } else {
    await categoriesStore.addAppointmentType(payload as any)
  }
  typeDialogVisible.value = false
}

function confirmDeleteType(type: AppointmentType) {
  confirm.require({
    message: `Ste prepričani, da želite izbrisati vrsto "${type.name}"?`,
    header: 'Potrdi brisanje',
    icon: 'pi pi-exclamation-triangle',
    rejectLabel: 'Prekliči',
    acceptLabel: 'Izbriši',
    acceptClass: 'p-button-danger',
    accept: () => categoriesStore.deleteAppointmentType(type.id),
  })
}

// ─── Helpers ───────────────────────────────────────────────────────────────
function typesForCategory(categoryId: string) {
  return categoriesStore.appointmentTypes.filter((t) => t.categoryId === categoryId)
}
</script>
