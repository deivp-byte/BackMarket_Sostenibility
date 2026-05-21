<script setup>
// defineModel vincula directamente el string del texto de forma bidireccional
const modelValue = defineModel({ type: String, default: '' })

defineProps({
  placeholder: {
    type: String,
    default: 'Escribe aquí...'
  }
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    data-slot="textarea"
    class="resize-none border-gray-200 placeholder:text-gray-400 focus-visible:border-black focus-visible:ring-black/10 aria-invalid:border-red-600 flex field-sizing-content min-h-16 w-full rounded-md border bg-white px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-gray-900"
    v-bind="$attrs"
  />
</template>