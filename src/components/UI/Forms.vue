<script setup>
import { computed, useSlots } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  name: { type: String, required: true },       // Clave del input en el formulario (ej: 'email')
  label: String,                                 // Texto de la etiqueta superior
  description: String,                           // Texto de ayuda inferior
  type: { type: String, default: 'text' }        // Tipo de input base
})

const slots = useSlots()

// Generamos un identificador único para asociar perfectamente el Label con su Input
const uniqueId = `form-item-${Math.random().toString(36).substring(2, 9)}`
const descriptionId = `${uniqueId}-description`
const errorId = `${uniqueId}-error`
</script>

<template>
  <div data-slot="form-item" class="grid gap-2 w-full">
    
    <label
      v-if="label"
      :for="uniqueId"
      data-slot="form-label"
      class="text-sm font-medium leading-none select-none cursor-pointer text-gray-900"
    >
      {{ label }}
    </label>

    <Field
      :id="uniqueId"
      :name="name"
      :type="type"
      v-slot="{ field, errors }"
    >
      <slot v-bind="field" :invalid="errors.length > 0">
        <input
          v-bind="field"
          :type="type"
          :aria-describedby="description ? descriptionId : undefined"
          :aria-invalid="errors.length > 0 ? 'true' : undefined"
          class="flex h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50"
        />
      </slot>
    </Field>

    <p
      v-if="description"
      :id="descriptionId"
      data-slot="form-description"
      class="text-gray-500 text-xs"
    >
      {{ description }}
    </p>

    <ErrorMessage
      :name="name"
      v-slot="{ message }"
    >
      <p :id="errorId" data-slot="form-message" class="text-red-600 text-xs font-medium">
        {{ message }}
      </p>
    </ErrorMessage>

  </div>
</template>