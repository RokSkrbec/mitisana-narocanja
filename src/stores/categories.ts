import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import type { AppointmentCategory, AppointmentType } from '../types'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<AppointmentCategory[]>([])
  const appointmentTypes = ref<AppointmentType[]>([])
  const loading = ref(false)

  const PRESET_COLORS = [
    '#EF4444', '#F97316', '#EAB308', '#22C55E',
    '#14B8A6', '#3B82F6', '#8B5CF6', '#EC4899',
    '#64748B', '#F43F5E',
  ]

  let unsubCategories: (() => void) | null = null
  let unsubTypes: (() => void) | null = null

  function subscribeAll() {
    // Categories
    const catQ = query(collection(db, 'categories'), orderBy('createdAt', 'asc'))
    unsubCategories = onSnapshot(catQ, (snap) => {
      categories.value = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        createdAt: (d.data().createdAt as Timestamp).toDate(),
      })) as AppointmentCategory[]
    })

    // Appointment types
    const typesQ = query(collection(db, 'appointmentTypes'), orderBy('createdAt', 'asc'))
    unsubTypes = onSnapshot(typesQ, (snap) => {
      appointmentTypes.value = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        createdAt: (d.data().createdAt as Timestamp).toDate(),
      })) as AppointmentType[]
    })
  }

  function unsubscribeAll() {
    unsubCategories?.()
    unsubTypes?.()
  }

  async function addCategory(name: string, color: string) {
    await addDoc(collection(db, 'categories'), {
      name,
      color,
      createdAt: Timestamp.now(),
    })
  }

  async function updateCategory(id: string, data: Partial<AppointmentCategory>) {
    await updateDoc(doc(db, 'categories', id), data as Record<string, unknown>)
  }

  async function deleteCategory(id: string) {
    await deleteDoc(doc(db, 'categories', id))
  }

  async function addAppointmentType(payload: Omit<AppointmentType, 'id' | 'createdAt'>) {
    await addDoc(collection(db, 'appointmentTypes'), {
      ...payload,
      createdAt: Timestamp.now(),
    })
  }

  async function updateAppointmentType(id: string, data: Partial<AppointmentType>) {
    await updateDoc(doc(db, 'appointmentTypes', id), data as Record<string, unknown>)
  }

  async function deleteAppointmentType(id: string) {
    await deleteDoc(doc(db, 'appointmentTypes', id))
  }

  function getCategoryById(id: string) {
    return categories.value.find((c) => c.id === id)
  }

  function getTypeById(id: string) {
    return appointmentTypes.value.find((t) => t.id === id)
  }

  return {
    categories,
    appointmentTypes,
    loading,
    PRESET_COLORS,
    subscribeAll,
    unsubscribeAll,
    addCategory,
    updateCategory,
    deleteCategory,
    addAppointmentType,
    updateAppointmentType,
    deleteAppointmentType,
    getCategoryById,
    getTypeById,
  }
})
