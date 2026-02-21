<template>
  <section class="py-16" :style="{ backgroundColor: 'var(--primary-color)' }">
    <div class="max-w-4xl mx-auto px-4 md:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ t('stayConnected') }}</h2>
      <p class="text-base md:text-lg text-white mb-8 opacity-90">{{ t('newsletterDesc') }}</p>
      <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          v-model="newsletterEmail"
          type="email"
          :placeholder="t('enterEmail')"
          class="flex-grow px-6 py-3 rounded-full text-gray-900 text-base bg-white border-2 border-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          required
        />
        <button
          type="submit"
          class="btn-asymmetric text-white px-8 py-3 text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
          :style="{ backgroundColor: 'var(--secondary-color)' }"
          @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-hover-color)')"
          @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-color)')"
        >
          {{ t('subscribe') }}
        </button>
      </form>
      <p v-if="newsletterSuccess" class="mt-4 text-white text-sm">{{ t('thankYou') }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const { t } = inject('i18n')

const newsletterEmail = ref('')
const newsletterSuccess = ref(false)

const subscribeNewsletter = () => {
  newsletterSuccess.value = true
  setTimeout(() => {
    newsletterSuccess.value = false
    newsletterEmail.value = ''
  }, 3000)
}
</script>