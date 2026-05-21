<script setup>
import { ContextMenuRoot, ContextMenuTrigger } from 'radix-vue'
</script>

<template>
  <ContextMenuRoot data-slot="context-menu">
    <ContextMenuTrigger as-child data-slot="context-menu-trigger">
      <slot name="trigger" />
    </ContextMenuTrigger>

    <slot />
  </ContextMenuRoot>
</template>