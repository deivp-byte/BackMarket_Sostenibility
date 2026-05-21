<script setup>
import { provide, computed, useSlots } from 'vue'

// 1. Definimos las propiedades (El objeto config con las etiquetas y colores)
const props = defineProps({
  id: String,
  config: { type: Object, required: true }
})

const slots = useSlots()

// 2. Generamos un ID único simulando el useId de React
const uniqueId = Math.random().toString(36).substring(2, 9)
const chartId = computed(() => `chart-${props.id || uniqueId}`)

// 3. Compartimos la configuración con los subcomponentes internos usando Provide (Context de Vue)
provide('chartConfig', computed(() => props.config))

// 4. Lógica idéntica para generar los estilos CSS dinámicos (Temas claro/oscuro)
const THEMES = { light: "", dark: ".dark" }

const generatedStyles = computed(() => {
  const colorConfig = Object.entries(props.config).filter(
    ([, item]) => item.theme || item.color
  )
  if (!colorConfig.length) return ''

  return Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const rules = colorConfig
        .map(([key, itemConfig]) => {
          const color = itemConfig.theme?.[theme] || itemConfig.color
          return color ? `  --color-${key}: ${color};` : null
        })
        .filter(Boolean)
        .join('\n')
      return `${prefix} [data-chart=${chartId.value}] {\n${rules}\n}`
    })
    .join('\n')
})
</script>

<template>
  <div
    data-slot="chart"
    :data-chart="chartId"
    class="flex aspect-video justify-center text-xs w-full [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-sector]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-none"
    v-bind="$attrs"
  >
    <style v-if="generatedStyles" v-html="generatedStyles" />

    <slot />
  </div>
</template>