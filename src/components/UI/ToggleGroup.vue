<script setup>
import { ToggleGroupRoot, ToggleGroupItem } from 'radix-vue'

// defineModel vincula automáticamente el estado (puede ser un String o un Array)
const modelValue = defineModel({ type: [String, Array], default: undefined })

defineProps({
  // Array de botones. Estructura: [{ value: 'bold', label: 'B', icon: ComponenteIcono }]
  items: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: 'single' // 'single' para selección única, 'multiple' para selección múltiple
  },
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
  <ToggleGroupRoot
    v-model="modelValue"
    :type="type"
    :disabled="disabled"
    data-slot="toggle-group"
    :data-variant="variant"
    :data-size="size"
    class="inline-flex w-fit items-center rounded-md border border-gray-200 bg-white p-0.5 shadow-xs select-none overflow-hidden"
    :class="{ 'border-none shadow-none bg-transparent gap-1': variant === 'ghost' }"
  >
    <ToggleGroupItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      data-slot="toggle-group-item"
      class="inline-flex items-center justify-center font-medium transition-colors outline-none cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:relative focus:z-10"
      :class="[
        size === 'sm' ? 'h-8 px-2 text-xs min-w-8' : size === 'lg' ? 'h-11 px-4 text-base min-w-11' : 'h-9 px-3 text-sm min-w-9',
        variant !== 'ghost' ? 'rounded-none border-r border-gray-100 last:border-0 first:rounded-l-md last:rounded-r-md' : 'rounded-md'
      ]"
    >
      <slot :name="item.value">
        <component :is="item.icon" v-if="item.icon" class="size-4 shrink-0" />
        <span v-if="item.label" :class="{ 'ml-1.5': item.icon }">{{ item.label }}</span>
      </slot>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>