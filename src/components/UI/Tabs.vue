<script setup>
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'radix-vue'

// Sincroniza la pestaña activa de forma bidireccional con el v-model de la vista
const activeTab = defineModel({ type: String, default: undefined })

defineProps({
  // Array de pestañas superiores. Estructura: [{ value: 'cuenta', label: 'Mi Cuenta' }]
  list: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <TabsRoot
    v-model="activeTab"
    data-slot="tabs"
    class="flex flex-col gap-3 w-full"
    v-bind="$attrs"
  >
    <TabsList
      data-slot="tabs-list"
      class="bg-gray-100 text-gray-500 inline-flex h-10 w-fit items-center justify-center rounded-xl p-[4px] flex select-none"
    >
      <TabsTrigger
        v-for="tab in list"
        :key="tab.value"
        :value="tab.value"
        data-slot="tabs-trigger"
        class="data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-xs focus-visible:border-black focus-visible:ring-black/10 text-gray-600 inline-flex h-full items-center justify-center gap-1.5 rounded-lg border border-transparent px-4 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow,background-color] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
      >
        <slot :name="`icon-${tab.value}`" />
        <span>{{ tab.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="tab in list"
      :key="tab.value"
      :value="tab.value"
      data-slot="tabs-content"
      class="flex-1 outline-none data-[state=inactive]:hidden data-[state=open]:animate-in data-[state=open]:fade-in-50"
    >
      <slot :name="tab.value" />
    </TabsContent>

  </TabsRoot>
</template>