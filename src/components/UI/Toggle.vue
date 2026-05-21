<script setup>
import { Toggle } from 'radix-vue'

// defineModel vincula automáticamente el booleano activo/inactivo con v-model
const pressed = defineModel({ type: Boolean, default: false })

defineProps({
  variant: {
    type: String,
    default: 'default' // 'default' o 'outline'
  },
  size: {
    type: String,
    default: 'default' // 'default', 'sm', 'lg'
  },
  disabled: Boolean
})
</script>

<template>
  <Toggle
    v-model:pressed="pressed"
    :disabled="disabled"
    data-slot="toggle"
    class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus-visible:ring-[3px] focus-visible:ring-black/10 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4"
    :class="[
      // Mapeo dinámico de variantes visuales
      variant === 'outline' ? 'border border-gray-200 bg-transparent hover:bg-gray-50' : 'bg-transparent',
      // Mapeo dinámico de tamaños
      size === 'sm' ? 'h-8 px-2 min-w-8 text-xs' : size === 'lg' ? 'h-10 px-3 min-w-10 text-base' : 'h-9 px-2.5 min-w-9'
    ]"
    v-bind="$attrs"
  >
    <slot />
  </Toggle>
</template>