<script setup>
import { createSidebarContext } from 'useSidebar'

const props = defineProps({
  defaultOpen: { type: Boolean, default: true }
})

// Inicializamos el estado reactivo global para todos los hijos
createSidebarContext(props.defaultOpen)
</script>

<template>
  <div
    data-slot="sidebar-wrapper"
    style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem;"
    class="group/sidebar-wrapper flex min-h-screen w-full bg-gray-50 text-gray-900"
  >
    <slot />
  </div>
</template>