<script setup>
import { computed } from 'vue'

// Recibimos la prop 'ratio' (por ejemplo: 16/9 o 1 para 1:1)
const props = defineProps({
  ratio: {
    type: Number,
    default: 1 // Por defecto será cuadrado (1:1)
  }
})

// Pasamos el número a un estilo CSS inline que el navegador entiende perfectamente
const aspectStyle = computed(() => ({
  aspectRatio: props.ratio
}))
</script>

<template>
  <div 
    data-slot="aspect-ratio" 
    class="w-full"
    :style="[aspectStyle, $attrs.style]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>