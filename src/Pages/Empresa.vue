<script setup>
import { Motion } from '@motionone/vue'
import { CheckCircle, TrendingDown, Award, Target } from 'lucide-vue-next'
import ImageWithFallback from '../components/imagefailed/imageFallback.vue'
</script>

<template>
  <div class="min-h-screen">
    
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <h1 class="text-4xl sm:text-6xl font-bold mb-6">{{ $t('empresa.hero.title') }}</h1>
        <p class="text-xl sm:text-2xl text-gray-800 max-w-3xl">
          {{ $t('empresa.hero.subtitle') }}
        </p>
      </Motion>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <Motion
          :initial="{ opacity: 0, x: -30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="space-y-6"
        >
          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ $t('empresa.reasons.ewaste.title') }}</h3>
              <p class="text-gray-700">
                {{ $t('empresa.reasons.ewaste.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ $t('empresa.reasons.circular.title') }}</h3>
              <p class="text-gray-700">
                {{ $t('empresa.reasons.circular.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ $t('empresa.reasons.transparency.title') }}</h3>
              <p class="text-gray-700">
                {{ $t('empresa.reasons.transparency.description') }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">{{ $t('empresa.reasons.quality.title') }}</h3>
              <p class="text-gray-700">
                {{ $t('empresa.reasons.quality.description') }}
              </p>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="space-y-4"
        >
          <div class="overflow-hidden rounded-2xl border-2 border-black">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750163564616-477f1c5d0c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZWZ1cmJpc2hlZCUyMGVsZWN0cm9uaWNzJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzc4MjM2ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Electronic components"
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="overflow-hidden rounded-2xl border-2 border-black">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728610996938-2583cc25ebb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwd2FzdGUlMjBlLXdhc3RlfGVufDF8fHx8MTc3ODIzNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="E-waste"
              class="w-full h-64 object-cover"
            />
          </div>
        </Motion>
      </div>
    </section>

    <section class="bg-white/40 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">{{ $t('empresa.stats.title') }}</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5 }"
            class="text-center p-8 bg-white rounded-2xl border-2 border-black shadow-lg"
          >
            <TrendingDown class="w-12 h-12 mx-auto mb-4" />
            <div class="text-5xl sm:text-6xl font-bold mb-2">92%</div>
            <p class="text-sm sm:text-base font-semibold">{{ $t('empresa.stats.ewaste_reduction.label') }}</p>
            <p class="text-xs text-gray-600 mt-2">{{ $t('empresa.stats.ewaste_reduction.sub') }}</p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.1 }"
            class="text-center p-8 bg-white rounded-2xl border-2 border-black shadow-lg"
          >
            <Target class="w-12 h-12 mx-auto mb-4" />
            <div class="text-5xl sm:text-6xl font-bold mb-2">1.6m</div>
            <p class="text-sm sm:text-base font-semibold">{{ $t('empresa.stats.co2_avoided.label') }}</p>
            <p class="text-xs text-gray-600 mt-2">{{ $t('empresa.stats.co2_avoided.sub') }}</p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            class="text-center p-8 bg-white rounded-2xl border-2 border-black shadow-lg"
          >
            <Award class="w-12 h-12 mx-auto mb-4" />
            <div class="text-5xl sm:text-6xl font-bold mb-2">93.2</div>
            <p class="text-sm sm:text-base font-semibold">{{ $t('empresa.stats.satisfaction.label') }}</p>
            <p class="text-xs text-gray-600 mt-2">{{ $t('empresa.stats.satisfaction.sub') }}</p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :in-view="{ opacity: 1, y: 0 }"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.3 }"
            class="text-center p-8 bg-white rounded-2xl border-2 border-black shadow-lg"
          >
            <CheckCircle class="w-12 h-12 mx-auto mb-4" />
            <div class="text-5xl sm:text-6xl font-bold mb-2">5M+</div>
            <p class="text-sm sm:text-base font-semibold">{{ $t('empresa.stats.devices_sold.label') }}</p>
            <p class="text-xs text-gray-600 mt-2">{{ $t('empresa.stats.devices_sold.sub') }}</p>
          </Motion>
        </div>

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="bg-[#4A5F3B] text-[#E8F48C] p-8 sm:p-12 rounded-3xl border-2 border-black"
        >
          <h3 class="text-2xl sm:text-3xl font-bold mb-8 text-center">
            {{ $t('empresa.comparison.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-4 border-b-2 border-[#E8F48C] pb-2">📱 {{ $t('empresa.comparison.new.title') }}</h4>
              <ul class="space-y-3">
                <li>• {{ $t('empresa.comparison.new.item1') }}</li>
                <li>• {{ $t('empresa.comparison.new.item2') }}</li>
                <li>• {{ $t('empresa.comparison.new.item3') }}</li>
                <li>• {{ $t('empresa.comparison.new.item4') }}</li>
                <li>• {{ $t('empresa.comparison.new.item5') }}</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-4 border-b-2 border-[#E8F48C] pb-2">♻️ {{ $t('empresa.comparison.refurbished.title') }}</h4>
              <ul class="space-y-3">
                <li>• {{ $t('empresa.comparison.refurbished.item1') }}</li>
                <li>• {{ $t('empresa.comparison.refurbished.item2') }}</li>
                <li>• {{ $t('empresa.comparison.refurbished.item3') }}</li>
                <li>• {{ $t('empresa.comparison.refurbished.item4') }}</li>
                <li>• {{ $t('empresa.comparison.refurbished.item5') }}</li>
              </ul>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">
        {{ $t('empresa.certification.title') }}
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5 }"
          class="bg-white/60 p-6 rounded-2xl border-2 border-black"
        >
          <div class="text-4xl font-bold mb-4">01</div>
          <h3 class="text-xl font-bold mb-3">{{ $t('empresa.certification.step1.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('empresa.certification.step1.description') }}
          </p>
        </Motion>

        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="bg-white/60 p-6 rounded-2xl border-2 border-black"
        >
          <div class="text-4xl font-bold mb-4">02</div>
          <h3 class="text-xl font-bold mb-3">{{ $t('empresa.certification.step2.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('empresa.certification.step1.description') }}
          </p>
        </Motion>

        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          class="bg-white/60 p-6 rounded-2xl border-2 border-black"
        >
          <div class="text-4xl font-bold mb-4">03</div>
          <h3 class="text-xl font-bold mb-3">{{ $t('empresa.certification.step3.title') }}</h3>
          <p class="text-gray-700">
            {{ $t('empresa.certification.step1.description') }}
          </p>
        </Motion>
      </div>
    </section>
    
  </div>
</template>