<template>
  <section id="impact" class="py-20" :style="{ backgroundColor: '#135e69' }" :dir="dir">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      
      <!-- Header -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          {{ t('ourImpact') }}
        </h2>
        <p class="text-base md:text-lg text-white">
          {{ t('impactDesc') }}
        </p>
      </div>

      <!-- Testimonials with smooth slide transition -->
      <div
        class="relative"
        ref="containerRef"
        :style="{ minHeight: containerHeight + 'px' }"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <TransitionGroup
          :name="isRTL ? 'slide-rtl' : 'slide-ltr'"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          <div
            v-for="testimonial in displayedTestimonials"
            :key="testimonial.name + '-' + testimonialPage"
            class="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 will-change-transform custom-card-radius"
          >
            <!-- User Info -->
            <div class="flex items-center mb-4">
              <img
                :src="testimonial.image"
                alt="Testimonial"
                class="w-16 h-16 rounded-full border-2 flex-shrink-0"
                :style="{ borderColor: 'var(--secondary-color)' }"
                :class="isRTL ? 'ml-4' : 'mr-4'"
              />
              <div :class="isRTL ? 'text-right' : 'text-left'">
                <h4 class="font-bold text-base mb-1" :style="{ color: 'var(--primary-color)' }">
                  {{ testimonial.name }}
                </h4>
                <p class="text-xs" :style="{ color: 'var(--txcolor)' }">
                  {{ t(testimonial.roleKey) }}
                </p>
              </div>
            </div>

            <!-- Stars -->
            <div
              class="flex mb-4 gap-1"
              :class="isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'"
            >
              <i
                v-for="star in 5"
                :key="star"
                class="fas fa-star text-base"
                :style="{ color: 'var(--secondary-color)' }"
              ></i>
            </div>

            <!-- Quote -->
            <p
              class="text-sm italic"
              :class="isRTL ? 'text-right' : 'text-left'"
              :style="{ color: 'var(--txcolor)' }"
            >
              "{{ testimonial.quote }}"
            </p>
          </div>
        </TransitionGroup>
      </div>

      <!-- Hidden measurer for all testimonials (لقياس الارتفاع الأقصى) -->
      <div
        ref="measurerRef"
        class="hidden-measurer grid grid-cols-1 md:grid-cols-3 gap-8"
        :class="isRTL ? 'rtl' : 'ltr'"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name + '-measurer'"
          class="bg-white p-8 rounded-lg shadow-sm custom-card-radius"
        >
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.image"
              alt=""
              class="w-16 h-16 rounded-full border-2 flex-shrink-0"
              :class="isRTL ? 'ml-4' : 'mr-4'"
            />
            <div :class="isRTL ? 'text-right' : 'text-left'">
              <h4 class="font-bold text-base mb-1">{{ testimonial.name }}</h4>
              <p class="text-xs">{{ testimonial.roleKey }}</p>
            </div>
          </div>
          <div
            class="flex mb-4 gap-1"
            :class="isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'"
          >
            <i v-for="star in 5" :key="star" class="fas fa-star text-base"></i>
          </div>
          <p class="text-sm italic" :class="isRTL ? 'text-right' : 'text-left'">
            "{{ testimonial.quote }}"
          </p>
        </div>
      </div>

      <!-- Pagination Arrows -->
      <div
        class="flex gap-2 mt-8"
        :class="isRTL ? 'justify-start' : 'justify-end'"
      >
        <button
          @click="prevTestimonialPage"
          class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          :style="{ color: 'var(--primary-color)' }"
        >
          <i class="fas" :class="isRTL ? 'fa-chevron-right' : 'fa-chevron-left'"></i>
        </button>

        <button
          @click="nextTestimonialPage"
          class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
          :style="{ color: 'var(--primary-color)' }"
        >
          <i class="fas" :class="isRTL ? 'fa-chevron-left' : 'fa-chevron-right'"></i>
        </button>
      </div>

      <!-- Page Indicator -->
      <div class="text-center mt-4 text-white text-sm">
        {{ testimonialPage + 1 }} / {{ totalPages }}
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted, watch, nextTick } from 'vue'

const { t, isRTL, dir } = inject('i18n')

const testimonials = [
  {
    name: 'David Kim',
    roleKey: 'communityLeader',
    image: 'https://picsum.photos/seed/person6/100/100',
    quote: 'The education program opened doors for our youth. Now they have skills and confidence to build a better future.'
  },
  {
    name: 'Fatima Al-Zahra',
    roleKey: 'volunteer',
    image: 'https://picsum.photos/seed/person5/100/100',
    quote: "Being part of GAINLOVE's team taught me the true meaning of compassion. Every day we make a difference."
  },
  {
    name: 'John Doe',
    roleKey: 'beneficiary',
    image: 'https://picsum.photos/seed/person4/100/100',
    quote: 'Thanks to GAINLOVE, my family now has access to clean water and healthcare.'
  },
  {
    name: 'Sarah Johnson',
    roleKey: 'beneficiary',
    image: 'https://picsum.photos/seed/person1/100/100',
    quote: 'GAINLOVE changed my life and gave us hope.'
  },
  {
    name: 'Michael Chen',
    roleKey: 'volunteer',
    image: 'https://picsum.photos/seed/person2/100/100',
    quote: 'Volunteering with GAINLOVE has been incredibly rewarding.'
  },
  {
    name: 'Amina Hassan',
    roleKey: 'communityLeader',
    image: 'https://picsum.photos/seed/person3/100/100',
    quote: "The healthcare program saved my daughter's life."
  }
]

const itemsPerPage = ref(3)
const testimonialPage = ref(0)
let autoplayInterval = null

// مراجع للحاوية وعنصر القياس المخفي
const containerRef = ref(null)
const measurerRef = ref(null)
const containerHeight = ref(0) // لتخزين min-height المحسوب (أقصى ارتفاع لجميع البطاقات)

const totalPages = computed(() =>
  Math.ceil(testimonials.length / itemsPerPage.value)
)

const displayedTestimonials = computed(() => {
  const start = testimonialPage.value * itemsPerPage.value
  return testimonials.slice(start, start + itemsPerPage.value)
})

// دالة لقياس أقصى ارتفاع لجميع البطاقات (من العنصر المخفي)
const measureAllHeights = async () => {
  await nextTick() // نضمن أن العنصر المخفي قد تم تحديثه (خاصة بعد تغيير حجم الشاشة)
  if (!measurerRef.value) return
  const cards = measurerRef.value.querySelectorAll('.bg-white')
  if (cards.length === 0) return
  let max = 0
  cards.forEach(card => {
    const height = card.offsetHeight
    if (height > max) max = height
  })
  if (max > 0) {
    containerHeight.value = max
  }
}

const updateItemsPerPage = () => {
  itemsPerPage.value = window.innerWidth < 768 ? 1 : 3
  if (testimonialPage.value >= totalPages.value) {
    testimonialPage.value = totalPages.value - 1
  }
  // بعد تغيير عدد الأعمدة، نعيد قياس الارتفاعات لأن تخطيط البطاقات قد يتغير
  measureAllHeights()
}

const nextTestimonialPage = () => {
  if (!isRTL.value) {
    testimonialPage.value = (testimonialPage.value + 1) % totalPages.value
  } else {
    testimonialPage.value = testimonialPage.value === 0 ? totalPages.value - 1 : testimonialPage.value - 1
  }
  resetAutoplay()
}

const prevTestimonialPage = () => {
  if (!isRTL.value) {
    testimonialPage.value = testimonialPage.value === 0 ? totalPages.value - 1 : testimonialPage.value - 1
  } else {
    testimonialPage.value = (testimonialPage.value + 1) % totalPages.value
  }
  resetAutoplay()
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(() => {
    nextTestimonialPage()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// راقب تغيير عدد العناصر في الصفحة لإعادة القياس (لكن ليس ضرورياً لأننا نعتمد على القياس الشامل)
// ولكن قد نحتاج إذا تغيرت البطاقات نفسها (وهي ثابتة)
watch([itemsPerPage, isRTL], () => {
  measureAllHeights()
})

onMounted(() => {
  updateItemsPerPage()
  measureAllHeights() // قياس أولي
  window.addEventListener('resize', updateItemsPerPage)
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<style scoped>
/* حركة انزلاقية سريعة وسلسة */
.slide-ltr-enter-active,
.slide-ltr-leave-active,
.slide-rtl-enter-active,
.slide-rtl-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1),
              opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.slide-ltr-leave-active,
.slide-rtl-leave-active {
  position: absolute;
  width: calc(33.333% - 1rem);
}

@media (max-width: 768px) {
  .slide-ltr-leave-active,
  .slide-rtl-leave-active {
    width: 100%;
  }
}

.slide-ltr-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.slide-ltr-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-rtl-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.slide-rtl-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.slide-ltr-move,
.slide-rtl-move {
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.will-change-transform {
  will-change: transform;
}

/* تعديل الحواف للكارد: أعلى يمين وأسفل يسار */
.custom-card-radius {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* عنصر القياس المخفي */
.hidden-measurer {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  z-index: -1;
}
</style>