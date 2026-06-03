<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Globe, ChevronDown } from 'lucide-vue-next' // Importamos los iconos

const { t, locale } = useI18n()

// Estado para controlar si el menú de idiomas está abierto o cerrado
const isLangMenuOpen = ref(false)

const NAV_LINKS = computed(() => [
  { path: '/', label: t('nav.home') },
  { path: '/empresa', label: t('nav.empresa') },
  { path: '/canvi-climatic', label: t('nav.climate') },
  { path: '/asg', label: t('nav.asg') },
  { path: '/contact', label: t('nav.contact') }
])

const route = useRoute()

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Función para cambiar el idioma y cerrar el menú
const changeLanguage = (lang) => {
  locale.value = lang
  isLangMenuOpen.value = false
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

          <div class="relative ml-2 sm:ml-4 border-l-2 border-black/20 pl-2 sm:pl-4">
            
            <button 
              @click="isLangMenuOpen = !isLangMenuOpen"
              class="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full border-2 border-black font-bold hover:bg-gray-100 transition-all uppercase"
            >
              <Globe :size="18" />
              {{ locale }}
              <ChevronDown :size="16" class="transition-transform duration-200" :class="isLangMenuOpen ? 'rotate-180' : ''" />
            </button>

            <div 
              v-if="isLangMenuOpen" 
              @click="isLangMenuOpen = false" 
              class="fixed inset-0 z-40"
            ></div>

            <div 
              v-if="isLangMenuOpen" 
              class="absolute top-full mt-2 right-0 w-24 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-50 flex flex-col"
            >
              <button 
                @click="changeLanguage('ca')" 
                class="px-4 py-3 text-left font-bold border-b-2 border-black/10 hover:bg-[#E8F48C] transition-colors flex justify-between items-center"
                :class="{'bg-[#E8F48C]': locale === 'ca'}"
              >
                CA <span v-if="locale === 'ca'" class="text-xs">✓</span>
              </button>
              
              <button 
                @click="changeLanguage('es')" 
                class="px-4 py-3 text-left font-bold border-b-2 border-black/10 hover:bg-[#E8F48C] transition-colors flex justify-between items-center"
                :class="{'bg-[#E8F48C]': locale === 'es'}"
              >
                ES <span v-if="locale === 'es'" class="text-xs">✓</span>
              </button>
              
              <button 
                @click="changeLanguage('en')" 
                class="px-4 py-3 text-left font-bold hover:bg-[#E8F48C] transition-colors flex justify-between items-center"
                :class="{'bg-[#E8F48C]': locale === 'en'}"
              >
                EN <span v-if="locale === 'en'" class="text-xs">✓</span>
              </button>
            </div>

          </div>

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