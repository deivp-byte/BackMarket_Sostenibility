<script setup>
import { NavigationMenuRoot, NavigationMenuList, NavigationMenuViewport } from 'radix-vue'

defineProps({
  viewport: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <NavigationMenuRoot
    data-slot="navigation-menu"
    :data-viewport="viewport"
    class="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center select-none"
    v-bind="$attrs"
  >
    <NavigationMenuList 
      data-slot="navigation-menu-list" 
      class="group flex flex-1 list-none items-center justify-center gap-1"
    >
      <slot />
    </NavigationMenuList>

    <div v-if="viewport" class="absolute top-full left-0 isolate z-50 flex justify-center">
      <NavigationMenuViewport
        data-slot="navigation-menu-viewport"
        class="origin-top-center bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height] duration-300"
      />
    </div>
  </NavigationMenuRoot>
</template>