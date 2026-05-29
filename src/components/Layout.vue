<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
// 1. Array de rutas para evitar duplicar código HTML
const NAV_LINKS = [
  { path: '/', label: t('nav.home') },
  { path: '/empresa', label: t('nav.empresa')  },
  { path: '/canvi-climatic', label: t('nav.climate')  },
  { path: '/asg', label: t('nav.asg')  },
  { path: '/contact', label: t('nav.contact')  }
]

const route = useRoute()

// 2. Función idéntica para controlar qué botón se ilumina
const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="min-h-screen bg-[#E8F48C] flex flex-col">
    
    <nav class="sticky top-0 z-50 bg-[#E8F48C]/95 backdrop-blur-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          
          <RouterLink
            v-for="link in NAV_LINKS"
            :key="link.path"
            :to="link.path"
            class="px-4 sm:px-6 py-2 rounded-full border-2 border-black font-medium transition-all text-sm sm:text-base text-center"
            :class="isActive(link.path) 
              ? 'bg-black text-[#E8F48C]' 
              : 'bg-white text-black hover:bg-gray-100'"
          >
            {{ link.label }}
          </RouterLink>

        </div>
      </div>
    </nav>

    <div class="flex-1">
      <RouterView />
    </div>

    <footer class="bg-[#4A5F3B] text-[#E8F48C] py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center select-none">
        <p>© 2026 Back Market - Compromís amb la sostenibilitat</p>
      </div>
    </footer>

  </div>
</template>