<script setup>
import { DropdownMenuRoot, DropdownMenuTrigger } from 'radix-vue'

// Nos permite controlar o saber si el menú está abierto desde fuera mediante v-model
const open = defineModel({ type: Boolean, default: false })
</script>

<template>
  <DropdownMenuRoot v-model:open="open">
    <DropdownMenuTrigger as-child data-slot="dropdown-menu-trigger">
      <slot name="trigger" />
    </DropdownMenuTrigger>

    <slot />
  </DropdownMenuRoot>
</template>