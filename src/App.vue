<template>
  <RouterView />
  <ConfirmDialog />
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
</script>
