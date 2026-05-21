<script setup>
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { CheckIcon } from 'lucide-vue-next'

// defineModel vincula automáticamente el estado "checked" con el v-model externo
const checked = defineModel({ type: Boolean, default: false })

defineProps({
  disabled: Boolean,
  required: Boolean,
  id: String
})
</script>

<template>
  <CheckboxRoot
    :id="id"
    v-model:checked="checked"
    data-slot="checkbox"
    :disabled="disabled"
    :required="required"
    class="peer border bg-input-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
    v-bind="$attrs"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      class="flex items-center justify-center text-current transition-none"
    >
      <CheckIcon class="size-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>