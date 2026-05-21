<script setup>
import { AvatarRoot, AvatarImage, AvatarFallback } from 'radix-vue'

// Definimos las props que podría necesitar la imagen o el fallback de Radix
defineProps({
  src: String,
  alt: String,
  delayMs: {
    type: Number,
    default: 600 // Tiempo de espera antes de mostrar el fallback (evita parpadeos si la red es rápida)
  }
})
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    class="relative flex size-10 shrink-0 overflow-hidden rounded-full"
    v-bind="$attrs"
  >
    <AvatarImage
      v-if="src"
      data-slot="avatar-image"
      :src="src"
      :alt="alt"
      class="aspect-square size-full object-cover"
    />

    <AvatarFallback
      data-slot="avatar-fallback"
      :delay-ms="delayMs"
      class="bg-muted flex size-full items-center justify-center rounded-full text-sm font-medium"
    >
      <slot name="fallback">
        <slot />
      </slot>
    </AvatarFallback>
  </AvatarRoot>
</template>