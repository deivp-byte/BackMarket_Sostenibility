<script setup>
import { AccordionItem } from 'radix-vue'

defineProps({
  value: { type: String, required: true },
  disabled: Boolean
})
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    v-bind="$props"
    class="border-b last:border-b-0"
    :class="$attrs.class"
  >
    <slot />
  </AccordionItem>
</template>