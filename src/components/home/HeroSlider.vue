<template>
  <section
    id="home"
    class="hero-section relative py-12 md:py-20 overflow-hidden"
    :style="{
      backgroundImage: `url(${currentSlideImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <div class="absolute inset-0" :style="{ backgroundColor: 'rgba(19, 94, 105, 0.7)' }"></div>
    <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div class="relative">
        <div class="relative overflow-hidden rounded-2xl min-h-[500px] md:min-h-[600px]">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="transition-all duration-700 ease-in-out absolute inset-0 flex items-center"
            :class="{
              'opacity-100 translate-x-0 z-10': currentSlide === index,
              'opacity-0 translate-x-full pointer-events-none':
                currentSlide !== index && index > currentSlide,
              'opacity-0 -translate-x-full pointer-events-none':
                currentSlide !== index && index < currentSlide
            }"
          >
            <div class="grid md:grid-cols-1 gap-8 md:gap-12 items-center h-full text-white text-center w-full">
              <div class="hero-content max-w-3xl mx-auto">
                <div class="mb-4">
                  <span
                    class="inline-block text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white"
                  >
                    <i
                      class="fas fa-globe mr-2 text-white"
                      :class="{ 'ml-2 mr-0': isRTL }"
                    ></i>
                    {{ t(slide.subtitleKey) }}
                  </span>
                </div>
                <h1
                  class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
                  v-html="t(slide.titleKey).replace('\n', '<br>')"
                ></h1>
                <p class="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-white/90">
                  {{ t(slide.descriptionKey) }}
                </p>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    @click="$emit('open-donate')"
                    class="btn-asymmetric text-white px-8 py-4 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
                    :style="{ backgroundColor: 'var(--secondary-color)' }"
                    @mouseover="
                      (e) =>
                        (e.currentTarget.style.backgroundColor =
                          'var(--secondary-hover-color)')
                    "
                    @mouseout="
                      (e) =>
                        (e.currentTarget.style.backgroundColor = 'var(--secondary-color)')
                    "
                  >
                    <i
                      class="fas fa-heart mr-2"
                      :class="{ 'ml-2 mr-0': isRTL }"
                    ></i>
                    {{ t('donateNow') }}
                  </button>
                  <button
                    class="btn-asymmetric text-white px-8 py-4 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md border-2 border-white hover-scale"
                    :style="{ backgroundColor: 'var(--primary-color)' }"
                    @mouseover="
                      (e) =>
                        (e.currentTarget.style.backgroundColor =
                          'var(--primary-hover-color)')
                    "
                    @mouseout="
                      (e) =>
                        (e.currentTarget.style.backgroundColor = 'var(--primary-color)')
                    "
                  >
                    <i
                      class="fas fa-play-circle mr-2"
                      :class="{ 'ml-2 mr-0': isRTL }"
                    ></i>
                    {{ t('watchStory') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Navigation Buttons -->
        <button
          @click="prevSlide"
          class="hidden sm:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm items-center justify-center hover:bg-gray-100 transition-colors z-20 hover-scale"
          :class="{
            'left-0 -translate-x-8 md:-translate-x-12': !isRTL,
            'right-0 translate-x-8 md:translate-x-12': isRTL
          }"
          :style="{ color: 'var(--primary-color)' }"
        >
          <i class="fas text-base md:text-xl" :class="isRTL ? 'fa-chevron-right' : 'fa-chevron-left'"></i>
        </button>
        <button
          @click="nextSlide"
          class="hidden sm:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm items-center justify-center hover:bg-gray-100 transition-colors z-20 hover-scale"
          :class="{
            'right-0 translate-x-8 md:translate-x-12': !isRTL,
            'left-0 -translate-x-8 md:-translate-x-12': isRTL
          }"
          :style="{ color: 'var(--primary-color)' }"
        >
          <i class="fas text-base md:text-xl" :class="isRTL ? 'fa-chevron-left' : 'fa-chevron-right'"></i>
        </button>
        <!-- Dots -->
        <div
          class="flex justify-center mt-6 md:mt-8 space-x-2"
          :class="{ 'space-x-reverse': isRTL }"
        >
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            class="h-2 rounded-full transition-all duration-300"
            :class="
              currentSlide === index
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            "
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, inject } from 'vue'

const { isRTL, t } = inject('i18n')
defineEmits(['open-donate'])

// تعريف الشرائح باستخدام مفاتيح الترجمة مع صور حقيقية من موقع المؤسسة
const slides = [
  {
    subtitleKey: 'hero.subtitle.about',
    titleKey: 'hero.title.about',
    descriptionKey: 'hero.desc.about',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_3700.jpg'
  },
  {
    subtitleKey: 'hero.subtitle.struggle',
    titleKey: 'hero.title.struggle',
    descriptionKey: 'hero.desc.struggle',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_0213-scaled.jpg'
  },
  {
    subtitleKey: 'hero.subtitle.minority',
    titleKey: 'hero.title.minority',
    descriptionKey: 'hero.desc.minority',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/DSC06599-scaled.jpg'
  },
  {
    subtitleKey: 'hero.subtitle.youth',
    titleKey: 'hero.title.youth',
    descriptionKey: 'hero.desc.youth',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_0756-scaled.jpg'
  }
]

const currentSlide = ref(0)
const currentSlideImage = computed(() => slides[currentSlide.value].image)

let slideInterval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetInterval()
}
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  resetInterval()
}
const goToSlide = (index) => {
  currentSlide.value = index
  resetInterval()
}
const startAutoPlay = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
}
const resetInterval = () => {
  if (slideInterval) {
    clearInterval(slideInterval)
    startAutoPlay()
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>