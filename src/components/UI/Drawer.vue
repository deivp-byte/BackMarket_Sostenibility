<script setup>
import { 
  DrawerRoot, 
  DrawerTrigger, 
  DrawerPortal, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerTitle, 
  DrawerDescription,
  DrawerClose
} from 'vaul-vue'

// Definimos las propiedades básicas para controlar la dirección y el estado
const open = defineModel({ type: Boolean, default: false })

defineProps({
  direction: {
    type: String,
    default: 'bottom' // Puede ser: 'top', 'bottom', 'left', 'right'
  },
  dismissible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <DrawerRoot v-model:open="open" :direction="direction" :dismissible="dismissible">
    <DrawerTrigger v-if="$slots.trigger" as-child data-slot="drawer-trigger">
      <slot name="trigger" />
    </DrawerTrigger>

    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay 
        data-slot="drawer-overlay"
        class="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      
      <DrawerContent
        data-slot="drawer-content"
        class="group/drawer-content bg-white fixed z-50 flex h-auto flex-col border-gray-200 shadow-xl duration-300 outline-none"
        :class="{
          'inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b': direction === 'top',
          'inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t': direction === 'bottom',
          'inset-y-0 right-0 w-3/4 border-l sm:max-w-sm h-full': direction === 'right',
          'inset-y-0 left-0 w-3/4 border-r sm:max-w-sm h-full': direction === 'left',
        }"
        v-bind="$attrs"
      >
        <div 
          v-if="direction === 'bottom'"
          class="bg-gray-200 mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full" 
        />

        <div 
          v-if="$slots.title || $slots.description"
          data-slot="drawer-header" 
          class="flex flex-col gap-1.5 p-4"
        >
          <DrawerTitle v-if="$slots.title" data-slot="drawer-title" class="text-gray-900 font-semibold text-lg leading-none">
            <slot name="title" />
          </DrawerTitle>
          
          <DrawerDescription v-if="$slots.description" data-slot="drawer-description" class="text-muted-foreground text-sm">
            <slot name="description" />
          </DrawerDescription>
        </div>

        <div class="p-4 flex-1 overflow-y-auto">
          <slot />
        </div>

        <div 
          v-if="$slots.footer"
          data-slot="drawer-footer" 
          class="mt-auto flex flex-col gap-2 p-4 border-t border-gray-100"
        >
          <slot name="footer" />
        </div>
      </DrawerContent>
    </DrawerPortal>
  </DrawerRoot>
</template>