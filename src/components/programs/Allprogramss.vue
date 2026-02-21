<template>
  <section class="py-20" :style="{ backgroundColor: '#f9fafb' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <!-- أزرار الفلتر -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="selectedCategory = category.value"
          class="px-6 py-2 rounded-asymmetric text-sm font-medium transition-all duration-300"
          :class="{
            'text-white shadow-md': selectedCategory === category.value,
            'text-gray-600 bg-gray-100 hover:bg-gray-200': selectedCategory !== category.value
          }"
          :style="selectedCategory === category.value ? { backgroundColor: 'var(--primary-color)' } : {}"
        >
          {{ t(category.label) }}
        </button>
      </div>

      <!-- شبكة المشاريع -->
      <div v-if="filteredProjects.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="program-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="`https://picsum.photos/seed/${project.imageSeed}/400/300`"
              :alt="t(project.titleKey)"
              class="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-110 program-img"
            />
            <div class="absolute inset-0 flex items-end p-4">
              <div class="bg-gradient-to-t from-black/60 to-transparent w-full h-full absolute top-0 left-0 rounded-tr-3xl rounded-bl-3xl"></div>
              <span class="relative text-white text-lg font-bold">{{ t(project.categoryKey) }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" :style="{ color: 'var(--primary-color)' }">
              {{ t(project.titleKey) }}
            </h3>
            <p class="text-sm mb-4" :style="{ color: 'var(--txcolor)' }">
              {{ t(project.descKey) }}
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

      <!-- رسالة عدم وجود مشاريع -->
      <div v-else class="text-center py-12">
        <p class="text-gray-500">{{ t('noProjects') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, inject } from 'vue'

const i18n = inject('i18n', {
  t: (key) => key,
  isRTL: false
})
const t = (key) => i18n.t(key)

// قائمة الفئات (للفلتر)
const categories = [
  { value: 'all', label: 'all' },
  { value: 'poverty', label: 'fightPoverty' },
  { value: 'family', label: 'familySupport' },
  { value: 'education', label: 'education' },
  { value: 'health', label: 'health' },
  { value: 'emergency', label: 'emergency' }
]

// الفئة المختارة حالياً
const selectedCategory = ref('all')

// بيانات جميع المشاريع
const allProjects = [
  {
    id: 1,
    titleKey: 'fightPovertyPrograms',
    category: 'poverty',
    categoryKey: 'fightPoverty',
    descKey: 'povertyDesc',
    imageSeed: 'poverty'
  },
  {
    id: 2,
    titleKey: 'familyCommunity',
    category: 'family',
    categoryKey: 'familySupport',
    descKey: 'familyDesc',
    imageSeed: 'family'
  },
  {
    id: 3,
    titleKey: 'teenEducation',
    category: 'education',
    categoryKey: 'education',
    descKey: 'educationDesc',
    imageSeed: 'education'
  },
  {
    id: 4,
    titleKey: 'healthPrograms', // سنضيفها في الترجمة
    category: 'health',
    categoryKey: 'health',
    descKey: 'healthDesc', // موجودة مسبقاً
    imageSeed: 'health'
  },
  {
    id: 5,
    titleKey: 'emergencyPrograms',
    category: 'emergency',
    categoryKey: 'emergency',
    descKey: 'emergencyDesc',
    imageSeed: 'emergency'
  },
  {
    id: 6,
    titleKey: 'waterSanitation',
    category: 'poverty',
    categoryKey: 'fightPoverty',
    descKey: 'waterDesc',
    imageSeed: 'water'
  }
]

// المشاريع المفلترة
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return allProjects
  return allProjects.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.program-card {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  overflow: hidden;
}

.program-img {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.rounded-asymmetric {
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* حركة hover للأسهم */
.group:hover .fa-arrow-right {
  transform: translateX(0.5rem);
}

html[dir="rtl"] .group:hover .fa-arrow-right {
  transform: translateX(-0.5rem) rotate(180deg);
}
</style>