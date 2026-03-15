export interface AppointmentCategory {
  id: string
  name: string
  color: string // hex color, e.g. "#FF5733"
  createdAt: Date
}

export interface AppointmentType {
  id: string
  name: string
  categoryId: string
  duration: number // in minutes
  price?: number   // in EUR
  color?: string // override category color
  createdAt: Date
}

export type AppointmentStatus = 'confirmed' | 'cancelled' | 'no-show'

export interface Appointment {
  id: string
  blocked?: boolean       // true = blocked time slot, no client/type
  status: AppointmentStatus
  typeId: string
  typeName: string
  categoryId: string
  color: string
  clientName: string      // reused as "title" for blocked slots
  price?: number          // snapshot of type price at time of booking (EUR)
  notes?: string
  startTime: Date
  endTime: Date
  createdAt: Date
}

export interface Client {
  id: string
  firstName: string
  lastName: string
  phone: string
  notes?: string
  createdAt: Date
}
