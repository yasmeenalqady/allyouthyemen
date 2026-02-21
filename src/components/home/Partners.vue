<template>
  <section id="partners" class="py-20" :style="{ backgroundColor: '#f9fafb' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" :style="{ color: 'var(--primary-color)' }">
          {{ t('ourPartners') }}
        </h2>
        <p class="text-base md:text-lg" :style="{ color: 'var(--txcolor)' }">
          {{ t('partnersDesc') }}
        </p>
      </div>
      <div class="partner-logos relative overflow-hidden py-8">
        <!-- العنصر المتحرك نضبط اتجاهه باستخدام dir مباشرة -->
        <div class="flex animate-scroll" :dir="dir">
          <div v-for="(item, index) in partnerLogos" :key="index" class="flex-shrink-0 mx-4">
            <div
              class="w-32 h-32 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <img
                v-if="item.type === 'image'"
                :src="item.src"
                alt="Partner"
                class="w-full h-full object-contain"
              />
              <i
                v-else
                :class="`fas fa-${item.icon} text-5xl`"
                :style="{ color: 'var(--primary-color)' }"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, inject } from 'vue'

const { t, dir } = inject('i18n')

const partnerItems = [
  { type: 'image', src: 'https://picsum.photos/seed/partner1/100/100' },
  { type: 'icon', icon: 'building' },
  { type: 'image', src: 'https://picsum.photos/seed/partner2/100/100' },
  { type: 'icon', icon: 'handshake' },
  { type: 'image', src: 'https://picsum.photos/seed/partner3/100/100' },
  { type: 'icon', icon: 'globe' },
  { type: 'image', src: 'https://picsum.photos/seed/partner4/100/100' },
  { type: 'icon', icon: 'tree' }
]

const partnerLogos = computed(() => [...partnerItems, ...partnerItems])
</script>