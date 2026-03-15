import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  function init() {
    return new Promise<void>((resolve) => {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        loading.value = false
        resolve()
      })
    })
  }

  async function loginWithGoogle() {
    error.value = null
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (e: any) {
      error.value = e.message
    }
  }

  async function logout() {
    await signOut(auth)
    user.value = null
  }

  return { user, loading, error, isAuthenticated, init, loginWithGoogle, logout }
})
