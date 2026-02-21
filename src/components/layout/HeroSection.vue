<template>
  <section
    id="hero"
    class="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden"
    :style="{ backgroundColor: 'var(--primary-color)' }"
  >
    <!-- صورة الخلفية مع طبقة شفافة -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt="Hero background"
        class="w-full h-full object-cover opacity-30"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
    </div>

    <!-- المحتوى -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
      <!-- العنوان مع اللون الجديد #f4a03a -->
      <h1 class="text-3xl md:text-5xl font-bold mb-3 animate-on-scroll hero-title">
        {{ title }}
      </h1>
      <!-- الوصف -->
      <p class="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto animate-on-scroll">
        {{ description }}
      </p>

      <!-- مسار التنقل (breadcrumb): الرئيسية / الصفحة الحالية -->
      <div class="flex flex-wrap gap-2 justify-center items-center animate-on-scroll text-white/80 text-sm md:text-base">
        <a
          href="/"
          @click.prevent="goToHome"
          class="text-white font-semibold transition-all duration-300 hover:text-secondary hover:underline"
        >
          {{ t('home') }}
        </a>
        <span class="mx-1">/</span>
        <span class="text-white font-semibold">{{ currentPage }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const i18n = inject('i18n', {
  t: (key) => key,
  isRTL: false
})

const t = (key) => i18n.t(key)

const router = useRouter()

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  currentPage: {
    type: String,
    required: true
  }
})

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1.animate-on-scroll {
  animation-delay: 0.1s;
}
p.animate-on-scroll {
  animation-delay: 0.2s;
}
div.animate-on-scroll {
  animation-delay: 0.3s;
}

.text-secondary {
  color: var(--secondary-color);
}

/* لون العنوان الجديد */
.hero-title {
  color: #f4a03a;
}
</style>