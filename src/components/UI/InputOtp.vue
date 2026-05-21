<script setup>
import { computed } from 'vue'
import { OTPInput, OTPInputContext } from 'input-otp-vue'
import { MinusIcon } from 'lucide-vue-next'

// El v-model capturará el string completo introducido por el usuario
const value = defineModel({ type: String, default: '' })

const props = defineProps({
  length: {
    type: Number,
    default: 6 // Número de casillas por defecto (4 o 6)
  },
  showSeparator: {
    type: Boolean,
    default: true // Si muestra la línea divisoria '-' en medio del código
  },
  disabled: Boolean
})

// Calcula justo la mitad del código para meter el separador visual '-'
const separatorIndex = computed(() => Math.floor(props.length / 2))
</script>

<template>
  <OTPInput
    v-model="value"
    :maxlength="length"
    :disabled="disabled"
    container-class="flex items-center gap-2"
    v-slot="{ slots }"
  >
    <div data-slot="input-otp-group" class="flex items-center">
      
      <template v-for="(slotData, index) in slots" :key="index">
        
        <div 
          v-if="showSeparator && index === separatorIndex" 
          data-slot="input-otp-separator" 
          role="separator" 
          class="px-2 text-gray-400"
        >
          <MinusIcon class="size-4" />
        </div>

        <div
          data-slot="input-otp-slot"
          :data-active="slotData.isActive"
          class="relative flex h-10 w-10 items-center justify-center border-y border-r border-gray-200 text-sm font-medium bg-white transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:border-black data-[active=true]:ring-[3px] data-[active=true]:ring-black/10 disabled:opacity-50"
          :class="{
            'rounded-l-md border-l': showSeparator && index === separatorIndex,
            'rounded-r-md': showSeparator && index === separatorIndex - 1
          }"
        >
          {{ slotData.char }}

          <div 
            v-if="slotData.hasFakeCaret" 
            class="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div class="animate-caret-blink bg-black h-4 w-px duration-1000" />
          </div>
        </div>

      </template>

    </div>
  </OTPInput>
</template>

<style scoped>
/* Añadimos la animación del cursor parpadeante en puro CSS */
@keyframes caret-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-caret-blink {
  animation: caret-blink 1.2s ease-in-out infinite;
}
</style>