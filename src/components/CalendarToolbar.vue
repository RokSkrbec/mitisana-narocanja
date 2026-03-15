<template>
  <header class="flex items-center gap-3 px-4 py-2 border-b border-gray-200 bg-white z-10 flex-shrink-0">
    <!-- Brand -->
    <div class="flex items-center gap-2 mr-2">
      <div class="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
        <i class="pi pi-calendar text-white text-sm" />
      </div>
      <span class="font-bold text-gray-800 hidden sm:block">Mitisana</span>
    </div>

    <!-- Navigation -->
    <Button icon="pi pi-chevron-left" text rounded size="small" @click="$emit('navigate', -1)" />
    <Button label="Danes" text size="small" @click="$emit('today')" />
    <Button icon="pi pi-chevron-right" text rounded size="small" @click="$emit('navigate', 1)" />

    <!-- Current period label -->
    <span class="flex-1 text-sm font-semibold text-gray-700 text-center truncate">
      {{ headerLabel }}
    </span>

    <!-- View switcher -->
    <SelectButton
      :model-value="view"
      :options="viewOptions"
      option-label="label"
      option-value="value"
      size="small"
      @update:model-value="$emit('change-view', $event)"
    />

    <!-- Settings & User -->
    <Button
      icon="pi pi-lock"
      text
      rounded
      size="small"
      severity="secondary"
      v-tooltip.bottom="'Blokiraj čas'"
      @click="$emit('block-time')"
    />
    <router-link to="/clients">
      <Button icon="pi pi-users" text rounded size="small" v-tooltip.bottom="'Stranke'" />
    </router-link>
    <router-link to="/statistics">
      <Button icon="pi pi-chart-bar" text rounded size="small" v-tooltip.bottom="'Statistika'" />
    </router-link>
    <router-link to="/settings">
      <Button icon="pi pi-cog" text rounded size="small" v-tooltip.bottom="'Nastavitve'" />
    </router-link>
    <Button icon="pi pi-sign-out" text rounded size="small" severity="secondary" v-tooltip.bottom="'Odjava'" @click="logout" />
  </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import type { CalendarView } from '../composables/useCalendar'

defineProps<{
  headerLabel: string
  view: CalendarView
}>()

defineEmits<{
  navigate: [direction: 1 | -1]
  today: []
  'change-view': [view: CalendarView]
  'block-time': []
}>()

const viewOptions = [
  { label: 'Dan', value: 'day' },
  { label: 'Teden', value: 'week' },
  { label: 'Mesec', value: 'month' },
]

const authStore = useAuthStore()
const router = useRouter()

async function logout() {
  await authStore.logout()
  router.push('/login')
}
</script>
