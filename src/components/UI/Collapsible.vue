<script setup>
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'radix-vue'

// Sincroniza el estado abierto/cerrado de forma bidireccional con v-model
const open = defineModel({ type: Boolean, default: false })

defineProps({
  disabled: Boolean
})
</script>

<template>
  <CollapsibleRoot
    v-model:open="open"
    data-slot="collapsible"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <CollapsibleTrigger as-child>
      <slot name="trigger" />
    </CollapsibleTrigger>

    <CollapsibleContent 
      data-slot="collapsible-content"
      class="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down"
    >
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>