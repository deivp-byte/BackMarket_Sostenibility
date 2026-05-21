<script setup>
import { 
  DialogRoot, 
  DialogTrigger, 
  DialogPortal, 
  DialogOverlay, 
  DialogContent, 
  DialogTitle, 
  DialogDescription,
  DialogClose
} from 'radix-vue'
import { XIcon } from 'lucide-vue-next'

// Control bidireccional del estado abierto/cerrado con v-model
const open = defineModel({ type: Boolean, default: false })

defineProps({
  side: {
    type: String,
    default: 'right' // Opciones: 'top', 'right', 'bottom', 'left'
  }
})
</script>

<template>
  <DialogRoot v-model:open="open">
    
    <DialogTrigger v-if="$slots.trigger" as-child data-slot="sheet-trigger">
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal data-slot="sheet-portal">
      <DialogOverlay 
        data-slot="sheet-overlay"
        class="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      
      <DialogContent
        data-slot="sheet-content"
        class="bg-white fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 outline-none"
        :class="{
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm': side === 'right',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm': side === 'left',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b': side === 'top',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t': side === 'bottom'
        }"
        v-bind="$attrs"
      >
        
        <div 
          v-if="$slots.title || $slots.description"
          data-slot="sheet-header" 
          class="flex flex-col gap-1.5 p-4 pb-0"
        >
          <DialogTitle v-if="$slots.title" data-slot="sheet-title" class="text-gray-900 font-semibold text-lg leading-none">
            <slot name="title" />
          </DialogTitle>
          
          <DialogDescription v-if="$slots.description" data-slot="sheet-description" class="text-gray-500 text-sm">
            <slot name="description" />
          </DialogDescription>
        </div>

        <div class="flex-1 p-4 overflow-y-auto">
          <slot />
        </div>

        <div 
          v-if="$slots.footer"
          data-slot="sheet-footer" 
          class="mt-auto flex flex-col gap-2 p-4 border-t border-gray-100"
        >
          <slot name="footer" />
        </div>

        <DialogClose 
          class="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 outline-none cursor-pointer"
        >
          <XIcon class="size-4 text-gray-500" />
          <span class="sr-only">Close</span>
        </DialogClose>

      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>