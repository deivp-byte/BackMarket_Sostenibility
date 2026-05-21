<script setup>
import { HoverCardRoot, HoverCardTrigger, HoverCardPortal, HoverCardContent } from 'radix-vue'

defineProps({
  align: {
    type: String,
    default: 'center' // 'start', 'center', 'end'
  },
  sideOffset: {
    type: Number,
    default: 4 // Píxeles de separación con el elemento disparador
  },
  openDelay: {
    type: Number,
    default: 700 // Tiempo en milisegundos antes de que aparezca (evita parpadeos molestos al pasar el cursor rápido)
  },
  closeDelay: {
    type: Number,
    default: 300 // Tiempo en milisegundos que tarda en ocultarse al quitar el cursor
  }
})
</script>

<template>
  <HoverCardRoot :open-delay="openDelay" :close-delay="closeDelay">
    
    <HoverCardTrigger v-if="$slots.trigger" as-child data-slot="hover-card-trigger">
      <slot name="trigger" />
    </HoverCardTrigger>

    <HoverCardPortal data-slot="hover-card-portal">
      <HoverCardContent
        data-slot="hover-card-content"
        :align="align"
        :side-offset="sideOffset"
        class="bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-none"
        v-bind="$attrs"
      >
        <slot />
      </HoverCardContent>
    </HoverCardPortal>

  </HoverCardRoot>
</template>