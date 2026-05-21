<script setup>
import { Motion } from '@motionone/vue'
import { TrendingUp, AlertTriangle, Leaf, Factory } from 'lucide-vue-next'
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
        <h1 class="text-4xl sm:text-6xl font-bold mb-6">Canvi Climàtic</h1>
        <p class="text-xl sm:text-2xl text-gray-800 max-w-3xl">
          L'impacte del sector tecnològic en el canvi climàtic i com Back Market està liderant la transformació sostenible.
        </p>
      </Motion>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <Motion
          :initial="{ opacity: 0, x: -20 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773178056359-850c92155e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NzgyMzY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial emissions"
            class="w-full h-96 object-cover"
          />
        </Motion>
        <Motion
          :initial="{ opacity: 0, x: 20 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="overflow-hidden rounded-2xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761058841503-f938bc017299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NzgyMzY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Factory pollution"
            class="w-full h-96 object-cover"
          />
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-2 gap-12">
        <Motion
          :initial="{ opacity: 0, x: -30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <div class="flex items-center gap-3 mb-6">
            <Factory class="w-10 h-10" />
            <h2 class="text-3xl font-bold">Impacte en el sector</h2>
          </div>
          <div class="space-y-4 text-gray-800">
            <p class="text-lg">
              <strong>L'economia circular pot ajudar a reduir les emissions de carboni en un 15% abans del 2032.</strong> Back Market està liderant aquesta transformació al mercat de dispositius electrònics.
            </p>
            <p>
              El sector tecnològic és responsable del 4% de les emissions globals de gasos d'efecte hivernacle, una xifra que es duplicarà el 2025 si no es prenen mesures.
            </p>
            <p>
              Cada dispositiu reacondicionat evita l'extracció de materials rars i la fabricació de nous components, reduint significativament la petjada de carboni.
            </p>
            <div class="bg-white/60 p-6 rounded-xl border-2 border-black mt-6">
              <h4 class="font-bold mb-3 text-xl">Dades clau:</h4>
              <ul class="space-y-2">
                <li>• 80% de l'impacte ambiental es genera en la fabricació</li>
                <li>• Un smartphone nou emet 85 kg de CO₂</li>
                <li>• Un smartphone reacondicionat només 7 kg de CO₂</li>
                <li>• Això representa una reducció del 92%</li>
              </ul>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <div class="bg-[#4A5F3B] text-[#E8F48C] p-8 rounded-2xl border-2 border-black h-full">
            <div class="flex items-center gap-3 mb-6">
              <AlertTriangle class="w-10 h-10" />
              <h3 class="text-3xl font-bold">Desafiaments del sector</h3>
            </div>
            <ul class="space-y-4 text-lg">
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Reducció d'emissions en la cadena de subministrament global</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Gestió responsable dels 50 milions de tones de residus electrònics anuals</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Foment de la reutilització i reparació enfront de l'obsolescència programada</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Educació del consumidor sobre la sostenibilitat tecnològica</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Transició a fonts d'energia renovable en la fabricació</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-2xl">•</span>
                <span>Desenvolupament de materials més sostenibles i biodegradables</span>
              </li>
            </ul>
          </div>
        </Motion>
      </div>
    </section>

    <section class="bg-white/40 py-16 my-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :in-view="{ opacity: 1, y: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
        >
          <div class="flex items-center gap-3 mb-8">
            <TrendingUp class="w-12 h-12" />
            <h2 class="text-3xl sm:text-4xl font-bold">Projecció de Riscos Climàtics</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-white p-8 rounded-2xl border-2 border-black">
              <p class="text-sm font-bold mb-4 text-gray-600">≤ 2 ANYS</p>
              <h4 class="text-2xl font-bold mb-4">Riscos a Curt Termini</h4>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Regulacions ambientals</span>
                    <span class="font-bold">Alta</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '85%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.2 }"
                      class="h-full bg-red-500"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Pressió dels consumidors</span>
                    <span class="font-bold">Moderada</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '65%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.3 }"
                      class="h-full bg-yellow-500"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Cost de materials</span>
                    <span class="font-bold">Moderada</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '70%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.4 }"
                      class="h-full bg-orange-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl border-2 border-black">
              <p class="text-sm font-bold mb-4 text-gray-600">EN 10 ANYS</p>
              <h4 class="text-2xl font-bold mb-4">Riscos a Llarg Termini</h4>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Escassetat de recursos</span>
                    <span class="font-bold">Crítica</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '95%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.2 }"
                      class="h-full bg-red-600"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Canvis regulatoris</span>
                    <span class="font-bold">Alta</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '80%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.3 }"
                      class="h-full bg-red-500"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span>Impacte climàtic</span>
                    <span class="font-bold">Alta</span>
                  </div>
                  <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <Motion
                      :initial="{ width: 0 }"
                      :in-view="{ width: '90%' }"
                      :in-view-options="{ once: true }"
                      :transition="{ duration: 1, delay: 0.4 }"
                      class="h-full bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#E8F48C] p-8 rounded-2xl border-2 border-black">
            <div class="flex items-start gap-4">
              <Leaf class="w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <h4 class="text-2xl font-bold mb-3">La Nostra Resposta</h4>
                <p class="text-lg mb-4">
                  Back Market està preparant-se activament per aquests riscos mitjançant:
                </p>
                <ul class="grid md:grid-cols-2 gap-3">
                  <li>✓ Inversió en tecnologies de recondicionament avançades</li>
                  <li>✓ Partnerships amb certificadors ambientals</li>
                  <li>✓ Educació i sensibilització dels consumidors</li>
                  <li>✓ Lobby per legislació favorable a l'economia circular</li>
                  <li>✓ Objectius de neutralitat de carboni per 2030</li>
                  <li>✓ Expansió de la xarxa de recollida i reciclatge</li>
                </ul>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl sm:text-4xl font-bold mb-8 text-center">L'Impacte Visual del Canvi Climàtic</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5 }"
          class="overflow-hidden rounded-xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758329021456-afb9253bd800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NzgyMzY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Climate impact"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          class="overflow-hidden rounded-xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762983095707-f9564ab841ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NzgyMzY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Environmental damage"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :in-view="{ opacity: 1, scale: 1 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          class="overflow-hidden rounded-xl border-2 border-black"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758797899402-dcf2e762b5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbCUyMGltcGFjdHxlbnwxfHx8fDE3NzgyMzY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industrial pollution"
            class="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
          />
        </Motion>
      </div>
    </section>

  </div>
</template>