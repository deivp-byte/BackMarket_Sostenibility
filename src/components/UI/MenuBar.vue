<script setup>
import { MenubarRoot } from 'radix-vue'

// Opcional: nos permite controlar o saber qué menú está seleccionado desde fuera
const modelValue = defineModel({ type: String, default: undefined })
</script>

<template>
  <MenubarRoot
    v-model="modelValue"
    data-slot="menubar"
    class="bg-white flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs select-none w-fit"
    v-bind="$attrs"
  >
    <slot />
  </MenubarRoot>
</template>