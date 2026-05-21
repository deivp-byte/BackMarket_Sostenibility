<script setup>
import { AccordionContent } from 'radix-vue'
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
  >
    <div class="pt-0 pb-4" :class="$attrs.class">
      <slot />
    </div>
  </AccordionContent>
</template>