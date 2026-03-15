<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm flex flex-col items-center gap-6">
      <!-- Logo / Brand -->
      <div class="flex flex-col items-center gap-2">
        <div class="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
          <i class="pi pi-calendar text-white text-3xl" />
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Mitisana</h1>
        <p class="text-sm text-gray-500">Admin naročanje</p>
      </div>

      <!-- Error -->
      <Message v-if="authStore.error" severity="error" :closable="false" class="w-full text-sm">
        {{ authStore.error }}
      </Message>

      <!-- Google Sign-in -->
      <Button
        label="Prijava z Google računom"
        icon="pi pi-google"
        class="w-full justify-center"
        :loading="loading"
        @click="handleLogin"
      />

      <p class="text-xs text-gray-400 text-center">Dostop samo za administratorje</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Button from 'primevue/button'
import Message from 'primevue/message'

const authStore = useAuthStore()
const router = useRouter()
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  await authStore.loginWithGoogle()
  loading.value = false
  if (authStore.isAuthenticated) {
    router.push('/')
  }
}
</script>
