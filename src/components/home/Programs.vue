<template>
  <section id="programs" class="py-20" :style="{ backgroundColor: '#f9fafb' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- العنوان -->
      <div class="text-center mb-16 slide-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" :style="{ color: 'var(--primary-color)' }">
          {{ t('ourPrograms') }}
        </h2>
        <p class="text-base md:text-lg max-w-3xl mx-auto" :style="{ color: 'var(--txcolor)' }">
          {{ t('programsDesc') }}
        </p>
      </div>

      <!-- شبكة البطاقات -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- البطاقة الأولى -->
        <div
          class="program-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/poverty/400/300"
              alt="Fight Poverty"
              class="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-110 program-img"
            />
            <div
              class="absolute inset-0 flex items-end p-4"
            >
              <div class="bg-gradient-to-t from-black/60 to-transparent w-full h-full absolute top-0 left-0 rounded-tr-3xl rounded-bl-3xl"></div>
              <span class="relative text-white text-lg font-bold">{{ t('fightPoverty') }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">
              {{ t('fightPovertyPrograms') }}
            </h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">
              {{ t('povertyDesc') }}
            </p>
            <button
              class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
              @mouseout="(e) => (e.currentTarget.style.color = 'var(--secondary-color)')"
            >
              {{ t('learnMore') }}
              <i
                class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"
                :class="[i18n.isRTL ? 'mr-2 rotate-180' : 'ml-2']"
              ></i>
            </button>
          </div>
        </div>

        <!-- البطاقة الثانية -->
        <div
          class="program-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/family/400/300"
              alt="Family Support"
              class="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-110 program-img"
            />
            <div class="absolute inset-0 flex items-end p-4">
              <div class="bg-gradient-to-t from-black/60 to-transparent w-full h-full absolute top-0 left-0 rounded-tr-3xl rounded-bl-3xl"></div>
              <span class="relative text-white text-lg font-bold">{{ t('familySupport') }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">
              {{ t('familyCommunity') }}
            </h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">
              {{ t('familyDesc') }}
            </p>
            <button
              class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
              @mouseout="(e) => (e.currentTarget.style.color = 'var(--secondary-color)')"
            >
              {{ t('learnMore') }}
              <i
                class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"
                :class="[i18n.isRTL ? 'mr-2 rotate-180' : 'ml-2']"
              ></i>
            </button>
          </div>
        </div>

        <!-- البطاقة الثالثة -->
        <div
          class="program-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              src="https://picsum.photos/seed/education/400/300"
              alt="Teen Education"
              class="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-110 program-img"
            />
            <div class="absolute inset-0 flex items-end p-4">
              <div class="bg-gradient-to-t from-black/60 to-transparent w-full h-full absolute top-0 left-0 rounded-tr-3xl rounded-bl-3xl"></div>
              <span class="relative text-white text-lg font-bold">{{ t('education') }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">
              {{ t('teenEducation') }}
            </h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">
              {{ t('educationDesc') }}
            </p>
            <button
              class="btn-asymmetric font-semibold text-sm flex items-center group px-4 py-2 transition-colors"
              :style="{ color: 'var(--secondary-color)' }"
              @mouseover="(e) => (e.currentTarget.style.color = 'var(--primary-color)')"
              @mouseout="(e) => (e.currentTarget.style.color = 'var(--secondary-color)')"
            >
              {{ t('learnMore') }}
              <i
                class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"
                :class="[i18n.isRTL ? 'mr-2 rotate-180' : 'ml-2']"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <!-- زر عرض كل المشاريع -->
      <div class="text-center">
        <button
          class="btn-asymmetric px-8 py-3 text-base font-semibold inline-flex items-center transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
          :style="{ backgroundColor: 'var(--secondary-color)', color: 'white' }"
          @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-hover-color)')"
          @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-color)')"
        >
          <i
            class="fas fa-th-large"
            :class="{
              'mr-2': !i18n.isRTL,
              'ml-2': i18n.isRTL
            }"
          ></i>
          <span>{{ t('viewAllProjects') }}</span>
          <i
            class="fas fa-arrow-right"
            :class="{
              'ml-2': !i18n.isRTL,
              'mr-2': i18n.isRTL,
              'rotate-180': i18n.isRTL
            }"
          ></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, onMounted } from 'vue'

const i18n = inject('i18n', {
  t: (key) => key,
  isRTL: false
})

const t = (key) => i18n.t(key)

onMounted(() => {
  const cards = document.querySelectorAll('.program-card')
  console.log('Programs - عدد البطاقات:', cards.length)
  if (cards.length === 0) {
    console.warn('لم يتم العثور على بطاقات!')
  }
})
</script>

<style scoped>
.program-card {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
  border-top-right-radius: 1.5rem;   /* أكبر حواف */
  border-bottom-left-radius: 1.5rem;
}

.program-img {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

/* حركة fade-in عند scroll */
.animate-on-scroll {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* حركة hover للأسهم */
.group:hover .fa-arrow-right {
  transform: translateX(0.5rem);
}

html[dir="rtl"] .group:hover .fa-arrow-right {
  transform: translateX(-0.5rem) rotate(180deg);
}
</style>