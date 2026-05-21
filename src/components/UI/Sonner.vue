<script setup>
import { Toaster as Sonner } from 'vue-sonner'

defineProps({
  position: {
    type: String,
    default: 'top-right' // 'top-left', 'top-center', 'top-right', 'bottom-left', etc.
  },
  expand: {
    type: Boolean,
    default: false // Si se expanden o se quedan apiladas una detrás de otra
  },
  richColors: {
    type: Boolean,
    default: true // Colores automáticos estéticos para Success, Error, Info y Warning
  }
})
</script>

<template>
  <Sonner
    class="toaster group"
    theme="auto"
    :position="position"
    :expand="expand"
    :rich-colors="richColors"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)'
    }"
    v-bind="$attrs"
  />
</template>