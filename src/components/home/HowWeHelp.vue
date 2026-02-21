<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="slide-in">
          <h2 class="text-4xl font-bold mb-6" :style="{ color: 'var(--primary-color)' }">
            {{ t('healthyStart') }}
          </h2>
          <p class="text-base md:text-lg mb-4" :style="{ color: 'var(--txcolor)' }">
            {{ t('healthcareDesc') }}
          </p>
          <p class="text-sm mb-8" :style="{ color: 'var(--txcolor)' }">
            {{ t('medicalDesc') }}
          </p>
          <button
            class="btn-asymmetric text-white px-8 py-4 text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
            :style="{ backgroundColor: 'var(--primary-color)' }"
            @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)')"
            @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')"
          >
            <i class="fas fa-info-circle mr-2" :class="{ 'ml-2 mr-0': isRTL }"></i>
            {{ t('learnMore') }}
          </button>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div
            class="service-card p-8 rounded-asymmetric text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-on-scroll"
            :style="{ backgroundColor: '#f0f4f8' }"
          >
            <div class="flex justify-center mx-auto mb-4">
              <i
                class="fas fa-heartbeat text-5xl transition-colors duration-300"
                :style="{ color: 'var(--warning-color)' }"
                @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
                @mouseout="(e) => (e.currentTarget.style.color = 'var(--warning-color)')"
              ></i>
            </div>
            <h4 class="font-bold mb-2 text-lg text-center" :style="{ color: 'var(--primary-color)' }">
              {{ t('health') }}
            </h4>
            <p class="text-sm text-center" :style="{ color: 'var(--txcolor)' }">
              {{ t('healthDesc') }}
            </p>
          </div>

          <div
            class="service-card p-8 rounded-asymmetric text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-on-scroll"
            :style="{ backgroundColor: '#f0f4f8' }"
          >
            <div class="flex justify-center mx-auto mb-4">
              <i
                class="fas fa-graduation-cap text-5xl transition-colors duration-300"
                :style="{ color: 'var(--warning-color)' }"
                @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
                @mouseout="(e) => (e.currentTarget.style.color = 'var(--warning-color)')"
              ></i>
            </div>
            <h4 class="font-bold mb-2 text-lg text-center" :style="{ color: 'var(--primary-color)' }">
              {{ t('education') }}
            </h4>
            <p class="text-sm text-center" :style="{ color: 'var(--txcolor)' }">
              {{ t('educationShortDesc') }}
            </p>
          </div>

          <div
            class="service-card p-8 rounded-asymmetric text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-on-scroll"
            :style="{ backgroundColor: '#f0f4f8' }"
          >
            <div class="flex justify-center mx-auto mb-4">
              <i
                class="fas fa-shield-alt text-5xl transition-colors duration-300"
                :style="{ color: 'var(--warning-color)' }"
                @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
                @mouseout="(e) => (e.currentTarget.style.color = 'var(--warning-color)')"
              ></i>
            </div>
            <h4 class="font-bold mb-2 text-lg text-center" :style="{ color: 'var(--primary-color)' }">
              {{ t('protection') }}
            </h4>
            <p class="text-sm text-center" :style="{ color: 'var(--txcolor)' }">
              {{ t('protectionDesc') }}
            </p>
          </div>

          <div
            class="service-card p-8 rounded-asymmetric text-center transition-all duration-300 hover:shadow-xl hover:scale-105 animate-on-scroll"
            :style="{ backgroundColor: '#f0f4f8' }"
          >
            <div class="flex justify-center mx-auto mb-4">
              <i
                class="fas fa-ambulance text-5xl transition-colors duration-300"
                :style="{ color: 'var(--warning-color)' }"
                @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
                @mouseout="(e) => (e.currentTarget.style.color = 'var(--warning-color)')"
              ></i>
            </div>
            <h4 class="font-bold mb-2 text-lg text-center" :style="{ color: 'var(--primary-color)' }">
              {{ t('emergency') }}
            </h4>
            <p class="text-sm text-center" :style="{ color: 'var(--txcolor)' }">
              {{ t('emergencyDesc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'

const { t, isRTL } = inject('i18n')
</script>

<style scoped>
/* ضمان ظهور البطاقات مع الحفاظ على التصميم الأصلي */
.animate-on-scroll {
  opacity: 1 !important;
  transform: translateY(0) !important;
  visibility: visible !important;
}

.service-card {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

/* تعديل الحواف: أعلى يمين وأسفل يسار فقط */
.rounded-asymmetric {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>