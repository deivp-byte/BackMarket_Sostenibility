<script setup>
import { 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarPortal, 
  MenubarContent 
} from 'radix-vue'

defineProps({
  value: String, // Identificador único opcional para el menú
  align: { type: String, default: 'start' },
  alignOffset: { type: Number, default: -4 },
  sideOffset: { type: Number, default: 8 }
})
</script>

<template>
  <MenubarMenu :value="value">
    
    <MenubarTrigger
      data-slot="menubar-trigger"
      class="focus:bg-gray-100 focus:text-gray-900 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900 flex items-center rounded-sm px-2.5 py-1 text-sm font-medium outline-none cursor-default select-none"
    >
      <slot name="trigger" />
    </MenubarTrigger>

    <MenubarPortal>
      <MenubarContent
        data-slot="menubar-content"
        :align="align"
        :align-offset="alignOffset"
        :side-offset="sideOffset"
        class="bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md outline-none"
        v-bind="$attrs"
      >
        <slot />
      </MenubarContent>
    </MenubarPortal>

  </MenubarMenu>
</template>