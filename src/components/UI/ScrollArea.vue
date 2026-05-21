<script setup>
import { 
  ScrollAreaRoot, 
  ScrollAreaViewport, 
  ScrollAreaScrollbar, 
  ScrollAreaThumb, 
  ScrollAreaCorner 
} from 'radix-vue'

defineProps({
  orientation: {
    type: String,
    default: 'vertical' // Puede ser: 'vertical' o 'horizontal'
  }
})
</script>

<template>
  <ScrollAreaRoot
    data-slot="scroll-area"
    class="relative overflow-hidden"
    v-bind="$attrs"
  >
    <ScrollAreaViewport 
      data-slot="scroll-area-viewport"
      class="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
    >
      <slot />
    </ScrollAreaViewport>

    <ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      :orientation="orientation"
      class="flex touch-none p-px transition-colors select-none duration-150 ease-out data-[state=hidden]:opacity-0"
      :class="{
        'h-full w-2.5 border-l border-l-transparent': orientation === 'vertical',
        'h-2.5 flex-col border-t border-t-transparent': orientation === 'horizontal'
      }"
    >
      <ScrollAreaThumb 
        data-slot="scroll-area-thumb"
        class="bg-gray-300 relative flex-1 rounded-full hover:bg-gray-400 transition-colors cursor-pointer"
      />
    </ScrollAreaScrollbar>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>