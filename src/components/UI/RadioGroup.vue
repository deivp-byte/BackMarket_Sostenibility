<script setup>
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'radix-vue'
import { CircleIcon } from 'lucide-vue-next'

// El defineModel vincula automáticamente el string de la opción seleccionada con v-model
const modelValue = defineModel({ type: String, default: '' })

defineProps({
  options: {
    type: Array,
    required: true // Estructura esperada: [{ value: 'tarjeta', label: 'Tarjeta de Crédito', disabled: false }]
  },
  disabled: Boolean,
  name: String
})
</script>

<template>
  <RadioGroupRoot
    v-model="modelValue"
    :name="name"
    :disabled="disabled"
    data-slot="radio-group"
    class="grid gap-3"
    v-bind="$attrs"
  >
    <div 
      v-for="option in options" 
      :key="option.value" 
      class="flex items-center gap-3"
    >
      <RadioGroupItem
        :id="`radio-${option.value}`"
        :value="option.value"
        :disabled="option.disabled"
        data-slot="radio-group-item"
        class="border-gray-300 text-black focus-visible:border-black focus-visible:ring-black/10 aria-invalid:border-red-600 aspect-square size-4 shrink-0 rounded-full border bg-white shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        <RadioGroupIndicator
          data-slot="radio-group-indicator"
          class="relative flex items-center justify-center h-full w-full"
        >
          <CircleIcon class="fill-current absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 text-black" />
        </RadioGroupIndicator>
      </RadioGroupItem>

      <label
        :for="`radio-${option.value}`"
        class="text-sm font-medium leading-none cursor-pointer select-none text-gray-900 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
        :data-disabled="option.disabled || disabled"
      >
        {{ option.label }}
      </label>
    </div>
  </RadioGroupRoot>
</template>