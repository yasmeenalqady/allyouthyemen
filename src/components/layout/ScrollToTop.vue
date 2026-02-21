<template>
  <button 
    v-if="showScrollTop" 
    @click="scrollToTop" 
    class="scroll-to-top fixed bottom-8 text-white p-4 rounded-full shadow-md transition-all duration-300 z-40 hover:shadow-xl hover-scale"
    :class="isRTL ? 'left-8' : 'right-8'"
    :style="{ backgroundColor: 'var(--primary-color)' }"
    @mouseover="e => e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)'"
    @mouseout="e => e.currentTarget.style.backgroundColor = 'var(--primary-color)'"
  >
    <i class="fas fa-arrow-up text-lg"></i>
  </button>
</template>

<script setup>
import { useScroll } from '@/composables/useScroll'
import { useI18n } from '@/composables/useI18n'

const { showScrollTop, scrollToTop } = useScroll()
const { isRTL } = useI18n()
</script>