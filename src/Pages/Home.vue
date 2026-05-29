<script setup>
import { Motion } from '@motionone/vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Recycle, TreePine, Users } from 'lucide-vue-next'
import ImageWithFallback from '../components/imagefailed/imageFallback.vue'
</script>

<template>
  <div class="min-h-screen">
    
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <Motion
          :initial="{ opacity: 0, x: -50 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8 }"
          class="bg-[#4A5F3B] text-[#E8F48C] p-8 sm:p-12 rounded-3xl shadow-2xl"
        >
          <div class="text-center">
            <div class="mb-4">
              <div class="text-sm mb-2 tracking-wider">BACK MARKET</div>
              <div class="text-xs tracking-widest">CERTIFIED</div>
            </div>
            <div class="text-6xl sm:text-8xl mt-8 font-bold">
              <span class="inline-block transform -rotate-12">«</span>
              <span class="mx-2">Back</span>
              <span class="inline-block">Market</span>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, x: 50 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, delay: 0.2 }"
          class="space-y-6"
        >
          <h1 class="text-4xl sm:text-6xl font-bold leading-tight">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-lg sm:text-xl text-gray-800">
            {{ $t('home.hero.description') }}
          </p>
          <RouterLink
            to="/empresa"
            class="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#E8F48C] rounded-full border-2 border-black hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            {{ $t('home.hero.cta') }}
            <ArrowRight :size="20" />
          </RouterLink>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1579803166678-7acf374cfe52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZ1cmJpc2hlZCUyMGVsZWN0cm9uaWNzJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzc4MjM2ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Circuit board"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601193449898-dddc353655dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZWZ1cmJpc2hlZCUyMGVsZWN0cm9uaWNzJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzc4MjM2ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Green circuit"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1569615313731-7407da4f4594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZWZ1cmJpc2hlZCUyMGVsZWN0cm9uaWNzJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzc4MjM2ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Electronics"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.3 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601191714233-85e787353a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyZWZ1cmJpc2hlZCUyMGVsZWN0cm9uaWNzJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzc4MjM2ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Circuit components"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h2 class="text-3xl sm:text-5xl font-bold mb-12 text-center">{{ $t('home.impact.title') }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="bg-white/60 p-8 rounded-3xl border-2 border-black shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          <Recycle class="w-16 h-16 mb-4" />
          <h3 class="text-2xl font-bold mb-4">{{ $t('home.impact.circular_economy.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('home.impact.circular_economy.description') }}
          </p>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="bg-white/60 p-8 rounded-3xl border-2 border-black shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          <TreePine class="w-16 h-16 mb-4" />
          <h3 class="text-2xl font-bold mb-4">{{ $t('home.impact.co2.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('home.impact.co2.description') }}
          </p>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="bg-white/60 p-8 rounded-3xl border-2 border-black shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          <Users class="w-16 h-16 mb-4" />
          <h3 class="text-2xl font-bold mb-4">{{ $t('home.impact.social.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('home.impact.social.description') }}
          </p>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :in-view="{ opacity: 1, scale: 1 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
        class="bg-[#4A5F3B] text-[#E8F48C] p-12 rounded-3xl text-center border-2 border-black shadow-2xl"
      >
        <h2 class="text-3xl sm:text-5xl font-bold mb-6">
          {{ $t('home.cta_section.title') }}
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          {{ $t('home.cta_section.description') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/empresa"
            class="px-8 py-4 bg-[#E8F48C] text-[#4A5F3B] rounded-full border-2 border-black hover:bg-white transition-all font-bold"
          >
            {{ $t('home.cta_section.btn_mission') }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-8 py-4 bg-transparent border-2 border-[#E8F48C] text-[#E8F48C] rounded-full hover:bg-[#E8F48C] hover:text-[#4A5F3B] transition-all font-bold"
          >
            {{ $t('home.cta_section.btn_contact') }}
          </RouterLink>
        </div>
      </Motion>
    </section>

  </div>
</template>