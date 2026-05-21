<script setup>
import { computed } from 'vue'

// 1. Definimos las props que acepta el Badge
const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  as: {
    type: String,
    default: 'span' // Por defecto se comporta como un <span>, pero puedes pasarle 'a', 'div', etc.
  }
})

// 2. Trasladamos los estilos base y variantes de CVA a objetos de JavaScript nativos
const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"

const variantStyles = {
  default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
  secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
  destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
}

// Juntamos los estilos de forma eficiente usando un computed
const badgeClasses = computed(() => {
  return `${baseStyles} ${variantStyles[props.variant] || variantStyles.default}`
})
</script>

<template>
  <component
    :is="as"
    data-slot="badge"
    :class="[badgeClasses, $attrs.class]"
  >
    <slot />
  </component>
</template>