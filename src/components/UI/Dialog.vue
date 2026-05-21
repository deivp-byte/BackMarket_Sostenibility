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

// Sincroniza de forma bidireccional si la modal está abierta o cerrada
const open = defineModel({ type: Boolean, default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child data-slot="dialog-trigger">
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay 
        data-slot="dialog-overlay"
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
      />
      
      <DialogContent
        data-slot="dialog-content"
        class="bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg outline-none"
        v-bind="$attrs"
      >
        <div 
          v-if="$slots.title || $slots.description"
          data-slot="dialog-header" 
          class="flex flex-col gap-2 text-center sm:text-left"
        >
          <DialogTitle v-if="$slots.title" data-slot="dialog-title" class="text-lg leading-none font-semibold">
            <slot name="title" />
          </DialogTitle>
          
          <DialogDescription v-if="$slots.description" data-slot="dialog-description" class="text-muted-foreground text-sm">
            <slot name="description" />
          </DialogDescription>
        </div>

        <slot />

        <div 
          v-if="$slots.footer"
          data-slot="dialog-footer" 
          class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
        >
          <slot name="footer" />
        </div>

        <DialogClose 
          class="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 outline-none disabled:pointer-events-none cursor-pointer"
        >
          <XIcon class="size-4 text-gray-500" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>