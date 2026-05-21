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
        <h1 class="text-4xl sm:text-6xl font-bold mb-6">Perqué aquesta empresa?</h1>
        <p class="text-xl sm:text-2xl text-gray-800 max-w-3xl">
          Back Market és el mercat líder en dispositius electrònics reacondicionats, compromesos amb un futur més sostenible.
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
              <h3 class="text-2xl font-bold mb-2">Reducció significativa de residus electrònics</h3>
              <p class="text-gray-700">
                Cada any es generen 50 milions de tones de residus electrònics a nivell mundial. Back Market dóna una segona vida
                als dispositius, evitant que acabin en abocadors.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">Compromís amb l'economia circular</h3>
              <p class="text-gray-700">
                Fomentem un model econòmic on els productes mantenen el seu valor el màxim temps possible, minimitzant l'ús
                de recursos naturals i la generació de residus.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">Transparència en les pràctiques sostenibles</h3>
              <p class="text-gray-700">
                Publiquem regularment informes detallats sobre el nostre impacte ambiental, certificacions i objectius
                de sostenibilitat per mantenir la confiança dels nostres clients.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <CheckCircle class="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 class="text-2xl font-bold mb-2">Certificació i garantia de qualitat</h3>
              <p class="text-gray-700">
                Tots els dispositius passen per un procés rigorós de 40 punts de control per assegurar que funcionen com nous,
                amb garantia mínima de 12 mesos.
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
        <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">El Nostre Impacte en Xifres</h2>

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
            <p class="text-sm sm:text-base font-semibold">reducció de residus</p>
            <p class="text-xs text-gray-600 mt-2">vs fabricació nova</p>
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
            <p class="text-sm sm:text-base font-semibold">tones de CO₂ evitades</p>
            <p class="text-xs text-gray-600 mt-2">fins a la data</p>
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
            <p class="text-sm sm:text-base font-semibold">puntuació de satisfacció</p>
            <p class="text-xs text-gray-600 mt-2">sobre 100</p>
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
            <p class="text-sm sm:text-base font-semibold">dispositius venuts</p>
            <p class="text-xs text-gray-600 mt-2">des de 2014</p>
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
            Comparativa: Dispositiu Nou vs. Reacondicionat
          </h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-4 border-b-2 border-[#E8F48C] pb-2">📱 Dispositiu Nou</h4>
              <ul class="space-y-3">
                <li>• 80 kg de matèries primeres extretes</li>
                <li>• 1200 litres d'aigua utilitzada</li>
                <li>• 85 kg de CO₂ emès</li>
                <li>• Processos de fabricació intensius</li>
                <li>• Embalatge nou i transport global</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-4 border-b-2 border-[#E8F48C] pb-2">♻️ Dispositiu Reacondicionat</h4>
              <ul class="space-y-3">
                <li>• 0 kg de noves matèries primeres</li>
                <li>• 50 litres d'aigua (neteja i proves)</li>
                <li>• 7 kg de CO₂ emès (transport i procés)</li>
                <li>• Només procés de recondicionament</li>
                <li>• Embalatge reciclat i transport local</li>
              </ul>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">
        El Nostre Procés de Certificació
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
          <h3 class="text-xl font-bold mb-3">Diagnòstic Complet</h3>
          <p class="text-gray-700">
            Cada dispositiu passa per una avaluació exhaustiva de 40 punts de control per identificar qualsevol problema.
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
          <h3 class="text-xl font-bold mb-3">Recondicionament</h3>
          <p class="text-gray-700">
            Neteja professional, substitució de components defectuosos i actualització de software per garantir el rendiment òptim.
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
          <h3 class="text-xl font-bold mb-3">Certificació Final</h3>
          <p class="text-gray-700">
            Proves finals rigoroses i emissió del certificat Back Market amb garantia mínima de 12 mesos.
          </p>
        </Motion>
      </div>
    </section>
    
  </div>
</template>