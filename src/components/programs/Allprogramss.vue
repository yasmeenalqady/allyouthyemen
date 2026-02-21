<template>
  <section class="py-20" :style="{ backgroundColor: '#f9fafb' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">

      <!-- فلتر الجوال (Dropdown) -->
      <div class="md:hidden mb-10">
        <select
          v-model="selectedCategory"
          class="w-full px-4 py-3 bg-white border border-gray-200 rounded-asymmetric text-sm focus:outline-none"
          :style="{ borderColor: 'var(--primary-color)' }"
        >
          <option
            v-for="category in categories"
            :key="category.value"
            :value="category.value"
          >
            {{ t(category.label) }}
          </option>
        </select>
      </div>

      <!-- فلتر الديسكتوب (أزرار) -->
      <div class="hidden md:flex flex-wrap justify-center gap-3 mb-12">
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
              :src="project.image"
              :alt="t(project.titleKey)"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 program-img"
            />
            <div class="absolute inset-0 flex items-end p-4">
              <div class="bg-gradient-to-t from-black/60 to-transparent w-full h-full absolute top-0 left-0 rounded-tr-3xl rounded-bl-3xl"></div>
              <span class="relative text-white text-lg font-bold">
                {{ t(project.categoryKey) }}
              </span>
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
                class="fas fa-arrow-right transition-transform"
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

const categories = [
  { value: 'all', label: 'all' },
  { value: 'poverty', label: 'fightPoverty' },
  { value: 'family', label: 'familySupport' },
  { value: 'education', label: 'education' },
  { value: 'health', label: 'health' },
  { value: 'emergency', label: 'emergency' }
]

const selectedCategory = ref('all')

const allProjects = [
  {
    id: 1,
    titleKey: 'fightPovertyPrograms',
    category: 'poverty',
    categoryKey: 'fightPoverty',
    descKey: 'povertyDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_3700.jpg'
  },
  {
    id: 2,
    titleKey: 'familyCommunity',
    category: 'family',
    categoryKey: 'familySupport',
    descKey: 'familyDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_0213-scaled.jpg'
  },
  {
    id: 3,
    titleKey: 'teenEducation',
    category: 'education',
    categoryKey: 'education',
    descKey: 'educationDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/IMG_0756-scaled.jpg'
  },
  {
    id: 4,
    titleKey: 'healthPrograms',
    category: 'health',
    categoryKey: 'health',
    descKey: 'healthDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/DSC06599-scaled.jpg'
  },
  {
    id: 5,
    titleKey: 'emergencyPrograms',
    category: 'emergency',
    categoryKey: 'emergency',
    descKey: 'emergencyDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/SANY0153.jpg'
  },
  {
    id: 6,
    titleKey: 'waterSanitation',
    category: 'poverty',
    categoryKey: 'fightPoverty',
    descKey: 'waterDesc',
    image: 'http://allyouthyemen.org/wp-content/uploads/2025/11/DSC06575-scaled.jpg'
  }
]

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
</style>