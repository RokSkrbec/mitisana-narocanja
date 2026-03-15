# Nail Salon Booking App - Copilot Instructions

## Project Overview
A nail salon booking/calendar app for internal admin use only.

## Tech Stack
- **Frontend**: Vue 3 (Composition API), PrimeVue, Tailwind CSS
- **Backend/Auth**: Firebase (Authentication + Firestore)
- **Build Tool**: Vite

## Architecture
- `src/components/` — Reusable UI components
- `src/views/` — Page-level views (Login, Calendar, Settings)
- `src/stores/` — Pinia stores (auth, appointments, categories)
- `src/composables/` — Shared logic (useCalendar, useDragDrop, etc.)
- `src/firebase/` — Firebase config and helpers
- `src/router/` — Vue Router config (auth guards)

## Features
- Admin-only login via Firebase Google Auth
- Calendar with Daily, Weekly, Monthly views
- Appointment types with categories (color-coded)
- Click-to-add appointments (5-minute granularity)
- Drag & Drop to reschedule appointments
- Inspired by Fresha.com UX

## Progress
- [x] Scaffold project
- [x] Customize project
- [x] Install extensions
- [x] Compile project
- [x] Create and run task
