<script setup>
import { ref } from 'vue'
import { Motion } from '@motionone/vue'
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-vue-next'

// Definimos el estado reactivo del formulario en un solo objeto
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Función para manejar el envío
const handleSubmit = () => {
  alert(t('contact.form.alert_success'))
  // Reseteamos el formulario vaciando los campos
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <div class="min-h-screen">
    
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
        class="text-center"
      >
        <h1 class="text-4xl sm:text-6xl font-bold mb-6">{{ $t('contact.hero.title') }}</h1>
        <p class="text-xl sm:text-2xl text-gray-800 max-w-3xl mx-auto">
          {{ $t('contact.hero.subtitle') }}
        </p>
      </Motion>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-2 gap-12">
        
        <Motion
          :initial="{ opacity: 0, x: -30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="bg-white/60 p-8 sm:p-12 rounded-3xl border-2 border-black shadow-xl"
        >
          <div class="flex items-center gap-3 mb-8">
            <MessageSquare class="w-10 h-10" />
            <h2 class="text-3xl font-bold">{{ $t('contact.form.title') }}</h2>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 font-bold">{{ $t('contact.form.label_name') }}</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-6 py-4 rounded-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                :placeholder="$t('contact.form.placeholder_name')"
              />
            </div>

            <div>
              <label for="email" class="block mb-2 font-bold">{{ $t('contact.form.label_email') }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-6 py-4 rounded-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                :placeholder="$t('contact.form.placeholder_email')"
              />
            </div>

            <div>
              <label for="subject" class="block mb-2 font-bold">{{ $t('contact.form.label_subject') }}</label>
              <select
                id="subject"
                v-model="formData.subject"
                required
                class="w-full px-6 py-4 rounded-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              >
                <option value="">{{ $t('contact.form.subject_default') }}</option>
                <option value="info">{{ $t('contact.form.subject_info') }}</option>
                <option value="sostenibilitat">{{ $t('contact.form.subject_sustainability') }}</option>
                <option value="colaboracion">{{ $t('contact.form.subject_collaboration') }}</option>
                <option value="prensa">{{ $t('contact.form.subject_press') }}</option>
                <option value="otro">{{ $t('contact.form.subject_other') }}</option>
              </select>
            </div>

            <div>
              <label for="message" class="block mb-2 font-bold">{{ $t('contact.form.label_message') }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                class="w-full px-6 py-4 rounded-2xl border-2 border-black bg-white h-40 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
                :placeholder="$t('contact.form.placeholder_message')"
              ></textarea>
            </div>

            <Motion
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
              tag="button"
              type="submit"
              class="w-full px-8 py-4 bg-black text-[#E8F48C] rounded-full border-2 border-black hover:bg-gray-800 transition-all font-bold flex items-center justify-center gap-2 text-lg cursor-pointer"
            >
              <Send :size="20" />
              {{ $t('contact.form.submit_btn') }}
            </Motion>
          </form>
        </Motion>

        <Motion
          :initial="{ opacity: 0, x: 30 }"
          :in-view="{ opacity: 1, x: 0 }"
          :in-view-options="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="space-y-8"
        >
          <div class="bg-white/60 p-8 rounded-3xl border-2 border-black">
            <h3 class="text-2xl font-bold mb-6">{{ $t('contact.info_box.title') }}</h3>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#E8F48C] p-3 rounded-full border-2 border-black">
                  <Mail class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.info_box.social_email') }}</h4>
                  <p class="text-gray-700">sustainability@backmarket.com</p>
                  <p class="text-gray-700">press@backmarket.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="bg-[#E8F48C] p-3 rounded-full border-2 border-black">
                  <Phone class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.info_box.tlf') }}</h4>
                  <p class="text-gray-700">+34 900 123 456</p>
                  <p class="text-sm text-gray-600">{{ $t('contact.info_box.weekdays_label') }}, {{ $t('contact.info_box.weekdays_value') }}</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="bg-[#E8F48C] p-3 rounded-full border-2 border-black">
                  <MapPin class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ $t('contact.info_box.address_title') }}</h4>
                  <p class="text-gray-700">Carrer de la Sostenibilitat, 42</p>
                  <p class="text-gray-700">08001 Barcelona, Catalunya</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#4A5F3B] text-[#E8F48C] p-8 rounded-3xl border-2 border-black">
            <h3 class="text-2xl font-bold mb-4">{{ $t('contact.info_box.hours_title') }}</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>{{ $t('contact.info_box.weekdays_label') }}</span>
                <span class="font-bold">9:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>{{ $t('contact.info_box.weekend_label') }}</span>
                <span class="font-bold">{{ $t('contact.info_box.weekend_value') }}</span>
              </div>
            </div>
          </div>

          <div class="bg-white/60 p-8 rounded-3xl border-2 border-black">
            <h3 class="text-2xl font-bold mb-4">{{ $t('contact.info_box.social_title') }}</h3>
            <p class="text-gray-700 mb-4">
              {{ $t('contact.info_box.social_desc') }}
            </p>
            <div class="flex gap-4">
              <Motion
                :whileHover="{ scale: 1.1 }"
                :whileTap="{ scale: 0.9 }"
                tag="button"
                class="w-12 h-12 bg-black text-[#E8F48C] rounded-full flex items-center justify-center border-2 border-black font-bold cursor-pointer"
              >
                <span class="text-xl">f</span>
              </Motion>
              <Motion
                :whileHover="{ scale: 1.1 }"
                :whileTap="{ scale: 0.9 }"
                tag="button"
                class="w-12 h-12 bg-black text-[#E8F48C] rounded-full flex items-center justify-center border-2 border-black font-bold cursor-pointer"
              >
                <span class="text-xl">𝕏</span>
              </Motion>
              <Motion
                :whileHover="{ scale: 1.1 }"
                :whileTap="{ scale: 0.9 }"
                tag="button"
                class="w-12 h-12 bg-black text-[#E8F48C] rounded-full flex items-center justify-center border-2 border-black font-bold cursor-pointer"
              >
                <span class="text-xl">in</span>
              </Motion>
              <Motion
                :whileHover="{ scale: 1.1 }"
                :whileTap="{ scale: 0.9 }"
                tag="button"
                class="w-12 h-12 bg-black text-[#E8F48C] rounded-full flex items-center justify-center border-2 border-black font-bold cursor-pointer"
              >
                <span class="text-xl">IG</span>
              </Motion>
            </div>
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
          <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">{{ $t('contact.faqs.title') }}</h2>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl border-2 border-black">
              <h4 class="font-bold text-xl mb-3">{{ $t('contact.faqs.q1.question') }}</h4>
              <p class="text-gray-700">
                {{ $t('contact.faqs.q1.answer') }}
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl border-2 border-black">
              <h4 class="font-bold text-xl mb-3">{{ $t('contact.faqs.q2.question') }}</h4>
              <p class="text-gray-700">
                {{ $t('contact.faqs.q2.answer') }}
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl border-2 border-black">
              <h4 class="font-bold text-xl mb-3">{{ $t('contact.faqs.q3.question') }}</h4>
              <p class="text-gray-700">
                {{ $t('contact.faqs.q3.answer') }}
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl border-2 border-black">
              <h4 class="font-bold text-xl mb-3">{{ $t('contact.faqs.q4.question') }}</h4>
              <p class="text-gray-700">
                {{ $t('contact.faqs.q4.answer') }}
              </p>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  </div>
</template>