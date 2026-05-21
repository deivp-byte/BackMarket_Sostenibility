<script setup>
import { useSidebar } from 'useSidebar'
import { DialogRoot, DialogPortal, DialogOverlay, DialogContent } from 'radix-vue'

defineProps({
  variant: { type: String, default: 'sidebar' }, // 'sidebar', 'floating', 'inset'
  collapsible: { type: String, default: 'icon' } // 'offcanvas', 'icon', 'none'
})

const { isMobile, state, openMobile } = useSidebar()
</script>

<template>
  <DialogRoot v-if="isMobile" v-model:open="openMobile">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs" />
      <DialogContent 
        class="fixed inset-y-0 left-0 z-50 w-72 bg-white border-r p-4 shadow-xl outline-none duration-200"
      >
        <div class="flex h-full w-full flex-col">
          <slot />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>

  <div
    v-else
    class="group peer hidden md:block shrink-0 transition-[width] duration-200 ease-linear h-screen sticky top-0"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :class="{
      'w-64': state === 'expanded',
      'w-12': state === 'collapsed' && collapsible === 'icon',
      'w-0 overflow-hidden border-0': state === 'collapsed' && collapsible === 'offcanvas'
    }"
  >
    <div
      class="h-full w-full bg-white border-r border-gray-200 flex flex-col transition-all duration-200"
      :class="{ 'p-2 rounded-xl border m-2 h-[calc(100vh-1rem)]': variant === 'floating' }"
    >
      <slot />
    </div>
  </div>
</template>