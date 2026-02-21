<template>
  <section id="events" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" :style="{ color: 'var(--primary-color)' }">
          {{ t('upcomingEvents') }}
        </h2>
        <p class="text-base md:text-lg" :style="{ color: 'var(--txcolor)' }">
          {{ t('eventsDesc') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- البطاقة الأولى -->
        <div class="event-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/event1/400/250"
              alt="Event"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 event-img"
            />
            <div class="gradient-overlay"></div>
          </div>
          <div class="p-6">
            <div class="text-sm font-semibold mb-2" :style="{ color: 'var(--secondary-color)' }">Dec 15, 2024</div>
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">{{ t('charityGala') }}</h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">{{ t('galaDesc') }}</p>
            <button class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="e => e.currentTarget.style.color = 'var(--primary-color)'"
              @mouseout="e => e.currentTarget.style.color = 'var(--secondary-color)'"
            >
              {{ t('registerNow') }} 
              <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform" :class="{ 'mr-2 ml-0 rotate-180': isRTL }"></i>
            </button>
          </div>
        </div>

        <!-- البطاقة الثانية -->
        <div class="event-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/event2/400/250"
              alt="Event"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 event-img"
            />
            <div class="gradient-overlay"></div>
          </div>
          <div class="p-6">
            <div class="text-sm font-semibold mb-2" :style="{ color: 'var(--secondary-color)' }">Dec 20, 2024</div>
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">{{ t('healthCamp') }}</h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">{{ t('campDesc') }}</p>
            <button class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="e => e.currentTarget.style.color = 'var(--primary-color)'"
              @mouseout="e => e.currentTarget.style.color = 'var(--secondary-color)'"
            >
              {{ t('registerNow') }} 
              <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform" :class="{ 'mr-2 ml-0 rotate-180': isRTL }"></i>
            </button>
          </div>
        </div>

        <!-- البطاقة الثالثة -->
        <div class="event-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2">
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/event3/400/250"
              alt="Event"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 event-img"
            />
            <div class="gradient-overlay"></div>
          </div>
          <div class="p-6">
            <div class="text-sm font-semibold mb-2" :style="{ color: 'var(--secondary-color)' }">Jan 5, 2025</div>
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">{{ t('volunteerOrientation') }}</h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">{{ t('orientationDesc') }}</p>
            <button class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="e => e.currentTarget.style.color = 'var(--primary-color)'"
              @mouseout="e => e.currentTarget.style.color = 'var(--secondary-color)'"
            >
              {{ t('registerNow') }} 
              <i class="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform" :class="{ 'mr-2 ml-0 rotate-180': isRTL }"></i>
            </button>
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
.event-card {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

.event-img {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

/* طبقة التدرج فوق الصورة */
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

/* fade-in عند scroll */
.animate-on-scroll {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>