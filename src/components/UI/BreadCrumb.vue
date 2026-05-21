<script setup>
import { ChevronRight, MoreHorizontal } from 'lucide-vue-next'

defineProps({
  // Si se activa, muestra los tres puntos de elipsis para recortar el camino
  showEllipsis: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <nav aria-label="breadcrumb" data-slot="breadcrumb" v-bind="$attrs">
    <ol 
      data-slot="breadcrumb-list" 
      class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5"
    >
      <slot />

      <li v-if="showEllipsis" data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5">
        <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" class="flex size-9 items-center justify-center">
          <MoreHorizontal class="size-4" />
          <span class="sr-only">More</span>
        </span>
      </li>
      
      <li v-if="showEllipsis" data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" class="[&>svg]:size-3.5">
        <ChevronRight />
      </li>

      <li v-if="$slots.page" data-slot="breadcrumb-item" class="inline-flex items-center gap-1.5">
        <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" class="text-foreground font-normal">
          <slot name="page" />
        </span>
      </li>
    </ol>
  </nav>
</template>