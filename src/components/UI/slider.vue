<script setup>
import { computed } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'radix-vue'

// defineModel gestiona el valor reactivo de forma bidireccional (acepta un número o un array de números)
const modelValue = defineModel({ type: [Number, Array], default: 0 })

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  disabled: Boolean,
  orientation: { type: String, default: 'horizontal' } // 'horizontal' o 'vertical'
})

// Nos aseguramos de transformar el valor en un array plano para renderizar los Thumbs (botones) correctos
const thumbsArray = computed(() => {
  return Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value]
})
</script>

<template>
  <SliderRoot
    v-model="modelValue"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :orientation="orientation"
    data-slot="slider"
    class="relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col"
  >
    <SliderTrack
      data-slot="slider-track"
      class="bg-gray-100 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
    >
      <SliderRange
        data-slot="slider-range"
        class="bg-black absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>

    <SliderThumb
      v-for="(_, index) in thumbsArray"
      :key="index"
      data-slot="slider-thumb"
      class="border-black bg-white block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none hover:scale-110 focus-visible:ring-4 focus-visible:ring-black/10 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
    />
  </SliderRoot>
</template>