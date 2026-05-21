<script setup>
import { 
  SelectRoot, 
  SelectTrigger, 
  SelectValue, 
  SelectIcon, 
  SelectPortal, 
  SelectContent, 
  SelectViewport, 
  SelectItem, 
  SelectItemText, 
  SelectItemIndicator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from 'radix-vue'
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from 'lucide-vue-next'

// El modelo bidireccional que capturará el valor seleccionado (ej: 'es', 'en')
const modelValue = defineModel({ default: undefined })

defineProps({
  options: {
    type: Array,
    required: true // Estructura: [{ value: 'opcion1', label: 'Opción 1', disabled: false }]
  },
  placeholder: {
    type: String,
    default: 'Selecciona una opción...'
  },
  disabled: Boolean,
  name: String,
  size: {
    type: String,
    default: 'default' // 'default' o 'sm'
  }
})
</script>

<template>
  <SelectRoot v-model="modelValue" :disabled="disabled" :name="name">
    
    <SelectTrigger
      data-slot="select-trigger"
      :data-size="size"
      class="border-gray-200 focus-visible:border-black focus-visible:ring-black/10 aria-invalid:border-red-600 flex w-full items-center justify-between gap-2 rounded-md border bg-white px-3 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 select-none cursor-pointer"
      :class="size === 'sm' ? 'h-8' : 'h-9'"
    >
      <SelectValue :placeholder="placeholder" class="line-clamp-1 flex items-center gap-2" />
      
      <SelectIcon as-child>
        <ChevronDownIcon class="size-4 opacity-50 shrink-0" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        position="popper"
        data-slot="select-content"
        class="bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      >
        <SelectScrollUpButton class="flex cursor-default items-center justify-center py-1">
          <ChevronUpIcon class="size-4 text-gray-400" />
        </SelectScrollUpButton>

        <SelectViewport class="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1">
          
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            data-slot="select-item"
            class="focus:bg-gray-100 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <span class="absolute right-2 flex size-3.5 items-center justify-center">
              <SelectItemIndicator>
                <CheckIcon class="size-4 text-black" />
              </SelectItemIndicator>
            </span>

            <SelectItemText>{{ option.label }}</SelectItemText>
          </SelectItem>

        </SelectViewport>

        <SelectScrollDownButton class="flex cursor-default items-center justify-center py-1">
          <ChevronDownIcon class="size-4 text-gray-400" />
        </SelectScrollDownButton>

      </SelectContent>
    </SelectPortal>

  </SelectRoot>
</template>