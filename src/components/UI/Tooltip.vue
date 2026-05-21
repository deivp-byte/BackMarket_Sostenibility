<script setup>
import { 
  TooltipProvider, 
  TooltipRoot, 
  TooltipTrigger, 
  TooltipPortal, 
  TooltipContent, 
  TooltipArrow 
} from 'radix-vue'

// Opcional: permite controlar externamente si el tooltip está visible o no
const open = defineModel({ type: Boolean, default: undefined })

defineProps({
  delayDuration: {
    type: Number,
    default: 0 // Aparece al instante por defecto, como en tu código de React
  },
  side: {
    type: String,
    default: 'top' // Dónde emerge: 'top', 'right', 'bottom', 'left'
  },
  sideOffset: {
    type: Number,
    default: 4 // Píxeles de separación con el botón disparador
  }
})
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    
    <TooltipRoot v-model:open="open">
      
      <TooltipTrigger v-if="$slots.trigger" as-child data-slot="tooltip-trigger">
        <slot name="trigger" />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          data-slot="tooltip-content"
          :side="side"
          :side-offset="sideOffset"
          class="bg-black text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance outline-none select-none shadow-md"
          v-bind="$attrs"
        >
          <slot />

          <TooltipArrow 
            data-slot="tooltip-arrow"
            class="fill-black z-50 size-2" 
            :offset="8"
          />
        </TooltipContent>
      </TooltipPortal>

    </TooltipRoot>
  </TooltipProvider>
</template>