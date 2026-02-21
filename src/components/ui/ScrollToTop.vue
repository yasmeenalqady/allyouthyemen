<template>
  <button
    @click="scrollToTop"
    class="scroll-to-top fixed bottom-8 text-white p-4 rounded-full shadow-md transition-all duration-300 z-40 hover:shadow-xl hover-scale"
    :class="isRTL ? 'left-8' : 'right-8'"
    :style="{ backgroundColor: 'var(--primary-color)' }"
    @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)')"
    @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')"
  >
    <!-- أيقونة السهم -->
    <i class="fas fa-arrow-up text-lg relative z-10"></i>

    <!-- مسار التقدم الدائري (circular progress) -->
    <svg
      class="absolute top-0 left-0 w-full h-full -rotate-90"
      viewBox="0 0 100 100"
      :style="{ transform: isRTL ? 'scaleX(-1)' : 'none' }"
    >
      <circle
        ref="progressCircle"
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        :style="{ opacity: 0.5 }"
      />
    </svg>
  </button>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted, computed } from 'vue'

const { isRTL } = inject('i18n')

// حساب التقدم في التمرير
const scrollProgress = ref(0)
const progressCircle = ref(null)
const circumference = 2 * Math.PI * 46 // نصف القطر = 46

// تحديث قيمة dashOffset بناءً على التقدم (كلما زاد التقدم قل dashOffset)
const dashOffset = computed(() => {
  return circumference - (scrollProgress.value / 100) * circumference
})

// دالة رفع الصفحة للأعلى
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// حساب نسبة التمرير
const updateScrollProgress = () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  scrollProgress.value = Math.min(100, Math.max(0, scrolled)) // تبقى بين 0 و 100
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress() // استدعاء أولي
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible; /* نسمح للـ SVG بالظهور */
  background-color: var(--primary-color); /* الخلفية الأساسية */
}

/* SVG يأخذ نفس حجم الزر ويوضع فوق الخلفية */
.scroll-to-top svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* حتى لا يعيق النقر */
  z-index: 5;
}

/* تحسين الظهور في الوضع RTL (عكس الاتجاه) */
[dir="rtl"] .scroll-to-top svg {
  transform: scaleX(-1); /* نعكس الدائرة لتبدأ من اليمين */
}

/* الدائرة البيضاء */
.scroll-to-top circle {
  transition: stroke-dashoffset 0.1s linear;
}
</style>