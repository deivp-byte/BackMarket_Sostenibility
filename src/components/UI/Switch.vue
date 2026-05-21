<script setup>
import { SwitchRoot, SwitchThumb } from 'radix-vue'

// defineModel vincula automáticamente el booleano con el v-model externo
const checked = defineModel({ type: Boolean, default: false })

defineProps({
  disabled: Boolean,
  id: String,
  name: String,
  required: Boolean
})
</script>

<template>
  <SwitchRoot
    :id="id"
    v-model:checked="checked"
    :disabled="disabled"
    :name="name"
    :required="required"
    data-slot="switch"
    class="peer data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-200 focus-visible:border-black focus-visible:ring-black/10 inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
    v-bind="$attrs"
  >
    <SwitchThumb
      data-slot="switch-thumb"
      class="bg-white pointer-events-none block size-4 rounded-full ring-0 shadow-xs transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-[2px]"
    />
  </SwitchRoot>
</template>