<script setup>
import { computed } from 'vue'

// 1. Definimos las props (recibimos la variante: 'default' o 'destructive')
const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

// 2. Reemplazamos CVA con un objeto de estilos nativo y un computed
const baseStyles = "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current"

const variantStyles = {
  default: "bg-card text-card-foreground",
  destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
}

// El computed se encarga de juntar las clases de forma eficiente si cambia la variante
const alertClasses = computed(() => {
  return `${baseStyles} ${variantStyles[props.variant] || variantStyles.default}`
})
</script>

<template>
  <div
    data-slot="alert"
    role="alert"
    :class="[alertClasses, $attrs.class]"
  >
    <slot name="icon" />

    <div 
      v-if="$slots.title"
      data-slot="alert-title" 
      class="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"
    >
      <slot name="title" />
    </div>

    <div 
      data-slot="alert-description" 
      class="text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed"
    >
      <slot />
    </div>
  </div>
</template>