<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0 // Valor de 0 a 100
  }
})

// Nos aseguramos de que el valor no se salga nunca del rango 0-100
const safeValue = computed(() => {
  return Math.min(Math.max(props.value || 0, 0), 100)
})
</script>

<template>
  <div
    data-slot="progress"
    role="progressbar"
    :aria-valuenow="safeValue"
    aria-valuemin="0"
    aria-valuemax="100"
    class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full"
    v-bind="$attrs"
  >
    <div
      data-slot="progress-indicator"
      class="bg-primary h-full transition-all duration-300 ease-in-out"
      :style="{ width: `${safeValue}%` }"
    />
  </div>
</template>