<script setup>
import { ref, onMounted, computed } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

// Propiedades de configuración (ej: si queremos que sea infinito, orientación, etc.)
const props = defineProps({
  opts: { type: Object, default: () => ({}) },
  orientation: { type: String, default: 'horizontal' } // 'horizontal' o 'vertical'
})

// 1. Inicializamos Embla usando su Hook nativo para Vue 3
const [emblaRef, emblaApi] = emblaCarouselVue({
  ...props.opts,
  axis: props.orientation === 'vertical' ? 'y' : 'x'
})

// Estados reactivos para controlar si los botones deben estar deshabilitados
const canScrollPrev = ref(false)
const canScrollNext = ref(false)

// Funciones para mover el carrusel
const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()

// Función para actualizar el estado de los botones cuando el carrusel se mueve
const onSelect = (api) => {
  if (!api) return
  canScrollPrev.value = api.canScrollPrev()
  canScrollNext.value = api.canScrollNext()
}

// Conectamos los eventos de Embla cuando el componente se monta en la pantalla
onMounted(() => {
  if (!emblaApi.value) return
  onSelect(emblaApi.value)
  emblaApi.value.on('reInit', onSelect)
  emblaApi.value.on('select', onSelect)
})
</script>

<template>
  <div 
    data-slot="carousel" 
    class="relative w-full" 
    role="region" 
    aria-roledescription="carousel"
  >
    <div ref="emblaRef" class="overflow-hidden">
      
      <div 
        class="flex -ml-4"
        :class="{ 'flex-col -mt-4': orientation === 'vertical' }"
      >
        <slot />
      </div>

    </div>

    <button
      v-if="canScrollPrev"
      class="absolute size-8 rounded-full border bg-white shadow-sm inline-flex items-center justify-center -left-12 top-1/2 -translate-y-1/2 disabled:opacity-50 hover:bg-gray-50 transition-colors z-10"
      @click="scrollPrev"
    >
      <ArrowLeft class="size-4" />
      <span class="sr-only">Anterior</span>
    </button>

    <button
      v-if="canScrollNext"
      class="absolute size-8 rounded-full border bg-white shadow-sm inline-flex items-center justify-center -right-12 top-1/2 -translate-y-1/2 disabled:opacity-50 hover:bg-gray-50 transition-colors z-10"
      @click="scrollNext"
    >
      <ArrowRight class="size-4" />
      <span class="sr-only">Siguiente</span>
    </button>
  </div>
</template>