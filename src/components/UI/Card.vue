<template>
  <div
    data-slot="card"
    class="bg-card text-card-foreground rounded-xl border bg-white shadow-sm"
    v-bind="$attrs"
  >
    <div 
      v-if="$slots.title || $slots.description || $slots.header" 
      data-slot="card-header" 
      class="flex flex-col space-y-1.5 p-6"
    >
      <slot name="header">
        <h3 v-if="$slots.title" data-slot="card-title" class="font-semibold leading-none tracking-tight text-lg">
          <slot name="title" />
        </h3>
        
        <p v-if="$slots.description" data-slot="card-description" class="text-muted-foreground text-sm">
          <slot name="description" />
        </p>
      </slot>
    </div>

    <div data-slot="card-content" class="p-6 pt-0">
      <slot />
    </div>

    <div 
      v-if="$slots.footer" 
      data-slot="card-footer" 
      class="flex items-center p-6 pt-0"
    >
      <slot name="footer" />
    </div>
  </div>
</template>