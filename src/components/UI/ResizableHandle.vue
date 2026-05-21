<script setup>
import { ResizableHandle } from 'radix-vue'
import { GripVerticalIcon } from 'lucide-vue-next'

defineProps({
  withHandle: Boolean
})
</script>

<template>
  <ResizableHandle
    data-slot="resizable-handle"
    class="bg-gray-200 hover:bg-gray-300 relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:-translate-y-1/2 data-[direction=vertical]:after:translate-x-0 [&[data-direction=vertical]>div]:rotate-90 transition-colors z-10"
    v-bind="$attrs"
  >
    <div 
      v-if="withHandle" 
      class="bg-white z-20 flex h-4 w-3 items-center justify-center rounded-xs border border-gray-200 shadow-xs"
    >
      <GripVerticalIcon class="size-2.5 text-gray-400" />
    </div>
  </ResizableHandle>
</template>