<script setup>
import { AccordionRoot } from 'radix-vue'

// Definimos las props que Radix necesita (como type="single", collapsible, etc.)
defineProps({
  type: { type: String, default: 'single' },
  collapsible: { type: Boolean, default: true },
  defaultValue: String,
  modelValue: String
})
</script>
<template>
  <AccordionRoot 
    data-slot="accordion" 
    v-bind="{ ...$props, ...$attrs }"
  >
    <slot />
  </AccordionRoot>
</template>