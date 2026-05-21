<script setup>
import { 
  ContextMenuPortal, 
  ContextMenuContent, 
  ContextMenuItem, 
  ContextMenuLabel, 
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuItemIndicator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent
} from 'radix-vue'
import { ChevronRightIcon, CheckIcon, CircleIcon } from 'lucide-vue-next'
</script>

<template>
  <ContextMenuPortal data-slot="context-menu-portal">
    <ContextMenuContent
      data-slot="context-menu-content"
      class="bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 min-w-[12rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"
      v-bind="$attrs"
    >
      <slot />
    </ContextMenuContent>
  </ContextMenuPortal>
</template>