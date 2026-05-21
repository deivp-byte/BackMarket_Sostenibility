<script setup>
defineProps({
  orientation: {
    type: String,
    default: 'horizontal' // 'horizontal' o 'vertical'
  },
  decorative: {
    type: Boolean,
    default: true // Si es true, el lector de pantalla lo ignora para evitar ruido innecesario
  }
})
</script>

<template>
  <div
    data-slot="separator-root"
    :role="decorative ? 'none' : 'separator'"
    :aria-orientation="!decorative && orientation === 'vertical' ? 'vertical' : undefined"
    class="bg-gray-200 shrink-0"
    :class="{
      'h-px w-full': orientation === 'horizontal',
      'h-full w-px': orientation === 'vertical'
    }"
    v-bind="$attrs"
  />
</template>