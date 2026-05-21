<script setup>
import { AlertDialogAction, AlertDialogCancel } from 'radix-vue'

defineProps({
  variant: {
    type: String,
    default: 'action' // Puede ser 'action' (confirmar) o 'cancel' (cancelar)
  }
})
</script>

<template>
  <AlertDialogAction 
    v-if="variant === 'action'"
    class="inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogAction>

  <AlertDialogCancel 
    v-else
    class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogCancel>
</template>