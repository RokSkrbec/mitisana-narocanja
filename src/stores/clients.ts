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
import type { Client } from '../types'

export const useClientsStore = defineStore('clients', () => {
  const clients = ref<Client[]>([])
  const loading = ref(false)

  let unsubscribe: (() => void) | null = null

  function subscribe() {
    const q = query(collection(db, 'clients'), orderBy('lastName', 'asc'))
    unsubscribe = onSnapshot(q, (snap) => {
      clients.value = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
        createdAt: (d.data().createdAt as Timestamp).toDate(),
      })) as Client[]
    })
  }

  function unsubscribeAll() {
    unsubscribe?.()
  }

  async function addClient(payload: Omit<Client, 'id' | 'createdAt'>) {
    await addDoc(collection(db, 'clients'), {
      ...payload,
      createdAt: Timestamp.now(),
    })
  }

  async function updateClient(id: string, data: Partial<Omit<Client, 'id' | 'createdAt'>>) {
    await updateDoc(doc(db, 'clients', id), data as Record<string, unknown>)
  }

  async function deleteClient(id: string) {
    await deleteDoc(doc(db, 'clients', id))
  }

  function getFullName(client: Client) {
    return `${client.firstName} ${client.lastName}`
  }

  return {
    clients,
    loading,
    subscribe,
    unsubscribeAll,
    addClient,
    updateClient,
    deleteClient,
    getFullName,
  }
})
