<script setup>
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  as: {
    type: [String, Object],
    default: 'a' // Por defecto es una etiqueta <a> normal
  }
})
</script>

<template>
  <li data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5">
    <component
      :is="as"
      data-slot="breadcrumb-link"
      class="hover:text-foreground transition-colors"
      v-bind="$attrs"
    >
      <slot />
    </component>
  </li>

  <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="[&>svg]:size-3.5">
    <slot name="separator">
      <ChevronRight />
    </slot>
  </li>
</template>