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
import type { Appointment } from '../types'

export const useAppointmentsStore = defineStore('appointments', () => {
  const appointments = ref<Appointment[]>([])
  const loading = ref(false)

  let unsubscribe: (() => void) | null = null

  function subscribe() {
    const q = query(collection(db, 'appointments'), orderBy('startTime', 'asc'))
    unsubscribe = onSnapshot(q, (snap) => {
      appointments.value = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        startTime: (d.data().startTime as Timestamp).toDate(),
        endTime: (d.data().endTime as Timestamp).toDate(),
        createdAt: (d.data().createdAt as Timestamp).toDate(),
      })) as Appointment[]
    })
  }

  function unsubscribeAll() {
    unsubscribe?.()
  }

  async function addAppointment(payload: Omit<Appointment, 'id' | 'createdAt'>) {
    await addDoc(collection(db, 'appointments'), {
      ...payload,
      startTime: Timestamp.fromDate(payload.startTime),
      endTime: Timestamp.fromDate(payload.endTime),
      createdAt: Timestamp.now(),
    })
  }

  async function updateAppointment(id: string, data: Partial<Omit<Appointment, 'id' | 'createdAt'>>) {
    const updateData: Record<string, unknown> = { ...data }
    if (data.startTime) updateData.startTime = Timestamp.fromDate(data.startTime)
    if (data.endTime) updateData.endTime = Timestamp.fromDate(data.endTime)
    await updateDoc(doc(db, 'appointments', id), updateData)
  }

  async function deleteAppointment(id: string) {
    await deleteDoc(doc(db, 'appointments', id))
  }

  return {
    appointments,
    loading,
    subscribe,
    unsubscribeAll,
    addAppointment,
    updateAppointment,
    deleteAppointment,
  }
})
