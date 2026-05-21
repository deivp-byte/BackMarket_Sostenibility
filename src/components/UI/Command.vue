<script setup>
import { ref, computed } from 'vue'
import { 
  ComboboxRoot, 
  ComboboxInput, 
  ComboboxContent, 
  ComboboxEmpty, 
  ComboboxGroup, 
  ComboboxLabel, 
  ComboboxItem, 
  ComboboxSeparator 
} from 'radix-vue'
import { SearchIcon } from 'lucide-vue-next'

const search = defineModel('search', { type: String, default: '' })
const selectedValue = defineModel({ default: '' })

defineProps({
  items: {
    type: Array,
    default: () => [] // Estructura recomendada: [{ group: 'Acciones', options: [{ value: 'perfil', label: 'Ver Perfil', shortcut: '⌘P' }] }]
  },
  emptyText: {
    type: String,
    default: 'No se encontraron resultados.'
  }
})
</script>

<template>
  <ComboboxRoot
    v-model="selectedValue"
    v-model:searchTerm="search"
    data-slot="command"
    class="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md bg-white border shadow-md"
    v-bind="$attrs"
  >
    <div data-slot="command-input-wrapper" class="flex h-11 items-center gap-2 border-b px-3">
      <SearchIcon class="size-4 shrink-0 opacity-50" />
      <ComboboxInput
        data-slot="command-input"
        placeholder="Escribe un comando o busca..."
        class="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>

    <ComboboxContent class="max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto p-1">
      
      <ComboboxEmpty data-slot="command-empty" class="py-6 text-center text-sm text-gray-500">
        {{ emptyText }}
      </ComboboxEmpty>

      <slot>
        <ComboboxGroup
          v-for="group in items"
          :key="group.group"
          data-slot="command-group"
          class="text-foreground overflow-hidden p-1"
        >
          <ComboboxLabel class="text-muted-foreground px-2 py-1.5 text-xs font-medium select-none text-gray-400">
            {{ group.group }}
          </ComboboxLabel>

          <ComboboxItem
            v-for="item in group.options"
            :key="item.value"
            :value="item.value"
            data-slot="command-item"
            class="data-[highlighted]:bg-gray-100 data-[highlighted]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <slot :name="`icon-${item.value}`" />
            
            <span>{{ item.label }}</span>

            <span v-if="item.shortcut" data-slot="command-shortcut" class="text-muted-foreground ml-auto text-xs tracking-widest opacity-60">
              {{ item.shortcut }}
            </span>
          </ComboboxItem>

          <ComboboxSeparator class="bg-gray-100 -mx-1 h-px my-1" />
        </ComboboxGroup>
      </slot>

    </ComboboxContent>
  </ComboboxRoot>
</template>