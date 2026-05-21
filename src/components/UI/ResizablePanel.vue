<script setup>
import { ResizablePanel } from 'radix-vue'
</script>

<template>
  <ResizablePanel data-slot="resizable-panel" v-bind="$attrs">
    <slot />
  </ResizablePanel>
</template>