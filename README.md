# Mitisana Naročanje

Nail salon booking/calendar app — admin use only.

## Stack

- **Vue 3** (Composition API + TypeScript)
- **PrimeVue 4** (UI components)
- **Tailwind CSS v3** (utility styling)
- **Firebase** (Google Auth + Firestore)
- **Pinia** (state management)
- **Vue Router 4**

## Features

- 🔐 Admin-only Google login via Firebase
- 📅 Daily, Weekly, Monthly calendar views
- ➕ Click any time slot to create an appointment (5-min granularity)
- 🖱️ Drag & Drop appointments to reschedule
- 🎨 Color-coded appointment categories & types
- ⚙️ Settings page to manage categories and appointment types

## Setup

### 1. Firebase Configuration

Create a Firebase project at https://console.firebase.google.com, enable:
- **Authentication** → Sign-in method → Google
- **Firestore Database**

Then replace the placeholder values in `src/firebase/config.ts`.

### 2. Install & Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Firestore Collections

| Collection | Description |
|---|---|
| `categories` | Appointment categories (name, color) |
| `appointmentTypes` | Service types linked to a category |
| `appointments` | Individual bookings |
