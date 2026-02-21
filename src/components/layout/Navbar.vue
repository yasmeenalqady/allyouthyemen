<template>
  <nav
    class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300"
    :class="{ 'shadow-md': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center py-4">
        
        <!-- Logo with image -->
        <RouterLink to="/" class="flex items-center">
          <img :src="logoSrc" alt="GAINLOVE" class="h-10 w-auto" />
        </RouterLink>

        <!-- Desktop Menu -->
        <div
          class="hidden lg:flex items-center gap-8"
          :class="isRTL ? 'text-right' : 'text-left'"
        >
          <RouterLink
            v-for="item in menuItems"
            :key="item.key"
            :to="item.to"
            class="nav-link text-base font-medium capitalize tracking-wide transition-colors duration-200"
            :style="{ color: 'var(--txcolor)' }"
          >
            {{ t(item.key) }}
          </RouterLink>
        </div>

        <!-- Action Buttons -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Language -->
          <button
            @click="toggleLanguage"
            class="flex items-center transition-colors hover-scale"
            :style="{ color: 'var(--txcolor)' }"
          >
            <i class="fas fa-globe text-base"></i>
            <span
              class="ml-1 text-sm font-medium"
              :class="{ 'mr-1 ml-0': isRTL }"
            >
              {{ currentLang === 'en' ? 'EN' : 'AR' }}
            </span>
          </button>

          <!-- Phone -->
          <div
            class="flex items-center text-sm font-medium"
            :style="{ color: 'var(--txcolor)' }"
            :class="isRTL ? 'mr-4' : 'ml-4'"
          >
            <i
              class="fas fa-phone-alt mr-2"
              :style="{ color: 'var(--primary-color)' }"
            ></i>
            <span>+84 1800 700 999</span>
          </div>

          <!-- Donate -->
          <button
            @click="$emit('open-donate')"
            class="btn-asymmetric text-white px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-sm hover-scale"
            :style="{ backgroundColor: 'var(--primary-color)' }"
          >
            <i class="fas fa-hand-holding-heart mr-2"></i>
            {{ t('donateNow') }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden transition-colors"
          :style="{ color: 'var(--txcolor)' }"
        >
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
        class="lg:hidden pb-4"
      >
        <div class="flex flex-col space-y-2 mt-4">
          <RouterLink
            v-for="item in menuItems"
            :key="item.key"
            :to="item.to"
            class="text-base font-medium capitalize py-2"
            :style="{ color: 'var(--txcolor)' }"
            @click="mobileMenuOpen = false"
          >
            {{ t(item.key) }}
          </RouterLink>

          <button
            @click="toggleLanguage"
            class="flex items-center py-2"
            :style="{ color: 'var(--txcolor)' }"
          >
            <i class="fas fa-globe mr-2"></i>
            <span class="text-base font-medium">
              {{ currentLang === 'en' ? 'English' : 'العربية' }}
            </span>
          </button>

          <button
            @click="$emit('open-donate'); mobileMenuOpen = false"
            class="btn-asymmetric text-white px-6 py-3 text-base font-medium transition-colors w-full"
            :style="{ backgroundColor: 'var(--primary-color)' }"
          >
            {{ t('donateNow') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'
import logoSrc from '@/assets/images/logo.png' // استيراد الصورة

const { t, toggleLanguage, currentLang, isRTL } = inject('i18n')
defineEmits(['open-donate'])

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const menuItems = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'programs', to: '/programs' },
  { key: 'impact', to: '/#impact' },
  { key: 'events', to: '/#events' },
  { key: 'blog', to: '/#blog' },
  { key: 'contact', to: '/contact' }
]
</script>

<style scoped>
.nav-link.router-link-active {
  color: var(--primary-color) !important;
  font-weight: 600;
}
</style>