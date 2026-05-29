<script setup>
import { Motion } from '@motionone/vue'
import { Globe, Users2, Scale, Sparkles, HeartHandshake, Shield } from 'lucide-vue-next'

// Asumimos que tienes tu componente adaptado a Vue
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
        <h1 class="text-4xl sm:text-6xl font-bold mb-6">{{ $t('asg.hero.title') }}</h1>
        <p class="text-xl sm:text-2xl text-gray-800 max-w-3xl">
          {{ $t('asg.hero.subtitle') }}
        </p>
      </Motion>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-3xl border-2 border-black shadow-lg"
        >
          <Globe class="w-16 h-16 mb-6 text-green-700" />
          <h2 class="text-3xl font-bold mb-6 text-green-900">🌍 {{ $t('asg.pillars.environmental.title') }}</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-green-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.environmental.i1_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.environmental.i1_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.environmental.i2_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.environmental.i2_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.environmental.i3_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.environmental.i3_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.environmental.i4_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.environmental.i4_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-green-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.environmental.i5_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.environmental.i5_desc') }}</p>
              </div>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl border-2 border-black shadow-lg"
        >
          <Users2 class="w-16 h-16 mb-6 text-blue-700" />
          <h2 class="text-3xl font-bold mb-6 text-blue-900">{{ $t('asg.pillars.social.title') }}</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-blue-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.social.i1_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.social.i1_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.social.i2_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.social.i2_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.social.i3_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.social.i3_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.social.i4_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.social.i4_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.social.i5_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.social.i5_desc') }}</p>
              </div>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.2 }"
          class="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl border-2 border-black shadow-lg"
        >
          <Scale class="w-16 h-16 mb-6 text-purple-700" />
          <h2 class="text-3xl font-bold mb-6 text-purple-900">{{ $t('asg.pillars.governance.title') }}</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-purple-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.governance.i1_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.governance.i1_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.governance.i2_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.governance.i2_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.governance.i3_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.governance.i3_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.governance.i4_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.governance.i4_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-700 text-xl">✓</span>
              <div>
                <h4 class="font-bold mb-1">{{ $t('asg.pillars.governance.i5_title') }}</h4>
                <p class="text-sm text-gray-700">{{ $t('asg.pillars.governance.i5_desc') }}</p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <section class="bg-white/40 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <div class="flex items-center justify-center gap-3 mb-12">
            <Sparkles class="w-12 h-12" />
            <h2 class="text-3xl sm:text-4xl font-bold text-center">{{ $t('asg.certs.title') }}</h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :in-view-options="{ once: true }"
              :transition="{ duration: 0.5 }"
              class="bg-white p-6 rounded-2xl border-2 border-black text-center"
            >
              <div class="text-5xl mb-4">🏆</div>
              <h4 class="font-bold text-xl mb-2">B Corporation</h4>
              <p class="text-sm text-gray-600">{{ $t('asg.certs.bcorp_desc') }}</p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :in-view-options="{ once: true }"
              :transition="{ duration: 0.5, delay: 0.1 }"
              class="bg-white p-6 rounded-2xl border-2 border-black text-center"
            >
              <div class="text-5xl mb-4">🌿</div>
              <h4 class="font-bold text-xl mb-2">ISO 14001</h4>
              <p class="text-sm text-gray-600">{{ $t('asg.certs.iso_desc') }}</p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :in-view-options="{ once: true }"
              :transition="{ duration: 0.5, delay: 0.2 }"
              class="bg-white p-6 rounded-2xl border-2 border-black text-center"
            >
              <div class="text-5xl mb-4">⭐</div>
              <h4 class="font-bold text-xl mb-2">Climate Neutral</h4>
              <p class="text-sm text-gray-600">{{ $t('asg.certs.climate_desc') }}</p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :in-view="{ opacity: 1, scale: 1 }"
              :in-view-options="{ once: true }"
              :transition="{ duration: 0.5, delay: 0.3 }"
              class="bg-white p-6 rounded-2xl border-2 border-black text-center"
            >
              <div class="text-5xl mb-4">✨</div>
              <h4 class="font-bold text-xl mb-2">EU Ecolabel</h4>
              <p class="text-sm text-gray-600">{{ $t('asg.certs.ecolabel_desc') }}</p>
            </Motion>
          </div>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
      >
        <div class="flex items-center justify-center gap-3 mb-12">
          <HeartHandshake class="w-12 h-12" />
          <h2 class="text-3xl sm:text-4xl font-bold text-center">{{ $t('asg.commitments.title') }}</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white/60 p-8 rounded-2xl border-2 border-black">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="text-3xl">🎯</span>
              {{ $t('asg.commitments.goals_title') }}
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-green-600 font-bold">•</span>
                <span>{{ $t('asg.commitments.g1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-600 font-bold">•</span>
                <span>{{ $t('asg.commitments.g2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-600 font-bold">•</span>
                <span>{{ $t('asg.commitments.g3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-600 font-bold">•</span>
                <span>{{ $t('asg.commitments.g4') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-600 font-bold">•</span>
                <span>{{ $t('asg.commitments.g5') }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-white/60 p-8 rounded-2xl border-2 border-black">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
              <span class="text-3xl">📊</span>
              {{ $t('asg.commitments.progress_title') }}
            </h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">{{ $t('asg.commitments.p1') }}</span>
                  <span class="font-bold">67%</span>
                </div>
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <Motion
                    :initial="{ width: 0 }"
                    :in-view="{ width: '67%' }"
                    :in-view-options="{ once: true }"
                    :transition="{ duration: 1.5 }"
                    class="h-full bg-green-500"
                  />
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">{{ $t('asg.commitments.p2') }}</span>
                  <span class="font-bold">84%</span>
                </div>
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <Motion
                    :initial="{ width: 0 }"
                    :in-view="{ width: '84%' }"
                    :in-view-options="{ once: true }"
                    :transition="{ duration: 1.5, delay: 0.2 }"
                    class="h-full bg-yellow-500"
                  />
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">{{ $t('asg.commitments.p3') }}</span>
                  <span class="font-bold">42%</span>
                </div>
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <Motion
                    :initial="{ width: 0 }"
                    :in-view="{ width: '42%' }"
                    :in-view-options="{ once: true }"
                    :transition="{ duration: 1.5, delay: 0.4 }"
                    class="h-full bg-blue-500"
                  />
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-semibold">{{ $t('asg.commitments.p4') }}</span>
                  <span class="font-bold">91%</span>
                </div>
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <Motion
                    :initial="{ width: 0 }"
                    :in-view="{ width: '91%' }"
                    :in-view-options="{ once: true }"
                    :transition="{ duration: 1.5, delay: 0.6 }"
                    class="h-full bg-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
      <h3 class="text-3xl font-bold mb-8 text-center">{{ $t('asg.gallery_title') }}</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Motion
          :initial="{ opacity: 0 }"
          :in-view="{ opacity: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1666804855649-77057e76281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaXJjdWxhciUyMGVjb25vbXklMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzc4MTQxOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Recycling"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
        <Motion
          :initial="{ opacity: 0 }"
          :in-view="{ opacity: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653406384710-08688ec6b979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaXJjdWxhciUyMGVjb25vbXklMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzc4MTQxOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Bottles recycling"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
        <Motion
          :initial="{ opacity: 0 }"
          :in-view="{ opacity: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706468809076-d19c97516e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaXJjdWxhciUyMGVjb25vbXklMjByZWN5Y2xpbmd8ZW58MXx8fHwxNzc4MTQxOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Waste management"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
      <Motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :in-view="{ opacity: 1, scale: 1 }"
        :in-view-options="{ once: true }"
        :transition="{ duration: 0.6 }"
        class="bg-[#4A5F3B] text-[#E8F48C] p-12 rounded-3xl border-2 border-black text-center"
      >
        <Shield class="w-20 h-20 mx-auto mb-6" />
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          {{ $t('asg.footer_card.title') }}
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          {{ $t('asg.footer_card.desc') }}
        </p>
        <div class="inline-block px-8 py-4 bg-[#E8F48C] text-[#4A5F3B] rounded-full border-2 border-black font-bold">
          {{ $t('asg.footer_card.badge') }}
        </div>
      </Motion>
    </section>
  </div>
</template>