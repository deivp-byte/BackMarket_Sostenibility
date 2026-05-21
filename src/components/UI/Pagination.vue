<script setup>
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-vue-next'

// Definimos los eventos para avisar al padre cuando se cambia de página
const emit = defineEmits(['update:page', 'change'])

const props = defineProps({
  page: { type: Number, required: true },       // Página actual activa
  total: { type: Number, required: true },      // Total de páginas disponibles
  siblingCount: { type: Number, default: 1 }   // Cuántos números mostrar a los lados de la página activa
})

// Lógica matemática para calcular la rejilla de páginas a mostrar (evita colapsar la pantalla)
const paginationRange = computed(() => {
  const totalNumbers = props.siblingCount + 5
  if (totalNumbers >= props.total) {
    return Array.from({ length: props.total }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(props.page - props.siblingCount, 1)
  const rightSiblingIndex = Math.min(props.page + props.siblingCount, props.total)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < props.total - 2

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * props.siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, 'DOTS', props.total]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * props.siblingCount
    const rightRange = Array.from({ length: rightItemCount }, (_, i) => props.total - rightItemCount + i + 1)
    return [1, 'DOTS', ...rightRange]
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i)
    return [1, 'DOTS', ...middleRange, 'DOTS', props.total]
  }
  
  return []
})

// Funciones para cambiar de página emitiendo los eventos limpios hacia arriba
const setPage = (newPage) => {
  if (newPage < 1 || newPage > props.total || newPage === props.page) return
  emit('update:page', newPage)
  emit('change', newPage)
}
</script>

<template>
  <nav
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    class="mx-auto flex w-full justify-center select-none"
    v-bind="$attrs"
  >
    <ul data-slot="pagination-content" class="flex flex-row items-center gap-1 list-none">
      
      <li data-slot="pagination-item">
        <button
          aria-label="Go to previous page"
          class="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer gap-1 px-2.5 sm:pl-2.5 text-gray-900"
          :disabled="page === 1"
          @click="setPage(page - 1)"
        >
          <ChevronLeftIcon class="size-4" />
          <span class="hidden sm:block">Anterior</span>
        </button>
      </li>

      <li 
        v-for="(item, index) in paginationRange" 
        :key="index"
        data-slot="pagination-item"
      >
        <span
          v-if="item === 'DOTS'"
          aria-hidden="true"
          data-slot="pagination-ellipsis"
          class="flex size-9 items-center justify-center text-gray-400"
        >
          <MoreHorizontalIcon class="size-4" />
          <span class="sr-only">More pages</span>
        </span>

        <button
          v-else
          :aria-current="page === item ? 'page' : undefined"
          data-slot="pagination-link"
          :data-active="page === item"
          class="inline-flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors outline-none cursor-pointer"
          :class="page === item 
            ? 'border border-gray-200 bg-white shadow-xs text-gray-900' 
            : 'hover:bg-gray-100 text-gray-600'"
          @click="setPage(item)"
        >
          {{ item }}
        </button>
      </li>

      <li data-slot="pagination-item">
        <button
          aria-label="Go to next page"
          class="inline-flex h-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer gap-1 px-2.5 sm:pr-2.5 text-gray-900"
          :disabled="page === total"
          @click="setPage(page + 1)"
        >
          <span class="hidden sm:block">Siguiente</span>
          <ChevronRightIcon class="size-4" />
        </button>
      </li>

    </ul>
  </nav>
</template>