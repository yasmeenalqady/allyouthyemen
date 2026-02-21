<template>
  <footer id="contact" class="py-16" :style="{ backgroundColor: '#111827', color: '#ffffff' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <!-- صورة الشعار مع فلتر أبيض وتكبير -->
          <RouterLink to="/" class="flex items-center mb-6">
            <img :src="logoSrc" alt="GAINLOVE" class="h-16 w-auto brightness-0 invert" />
          </RouterLink>
          <p class="text-gray-400 text-sm mb-6">{{ t('footerDesc') }}</p>
          <div class="flex space-x-4" :class="{ 'space-x-reverse': isRTL }">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors hover-scale"
              ><i class="fab fa-facebook text-xl"></i
            ></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors hover-scale"
              ><i class="fab fa-twitter text-xl"></i
            ></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors hover-scale"
              ><i class="fab fa-instagram text-xl"></i
            ></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors hover-scale"
              ><i class="fab fa-linkedin text-xl"></i
            ></a>
          </div>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-gray-300 text-lg">{{ t('quickLinks') }}</h4>
          <ul class="space-y-3">
            <li>
              <a href="#home" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('home')
              }}</a>
            </li>
            <li>
              <a href="#about" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('aboutUs')
              }}</a>
            </li>
            <li>
              <a href="#programs" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('ourPrograms')
              }}</a>
            </li>
            <li>
              <a href="#impact" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('impact')
              }}</a>
            </li>
            <li>
              <a href="#events" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('events')
              }}</a>
            </li>
            <li>
              <a href="#partners" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('partners')
              }}</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white text-sm transition-colors">{{
                t('contact')
              }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-gray-300 text-lg">{{ t('contactUs') }}</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li class="flex items-center">
              <i
                class="fas fa-phone-alt mr-3"
                :class="{ 'ml-3 mr-0': isRTL }"
                :style="{ color: 'var(--secondary-color)' }"
              ></i>
              +84 1800 700 999
            </li>
            <li class="flex items-center">
              <i
                class="fas fa-envelope mr-3"
                :class="{ 'ml-3 mr-0': isRTL }"
                :style="{ color: 'var(--secondary-color)' }"
              ></i>
              info@gainlove.org
            </li>
            <li class="flex items-center">
              <i
                class="fas fa-map-marker-alt mr-3"
                :class="{ 'ml-3 mr-0': isRTL }"
                :style="{ color: 'var(--secondary-color)' }"
              ></i>
              {{ t('headquarters') }}
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6 text-gray-300 text-lg">{{ t('makeDonation') }}</h4>
          <p class="text-gray-400 text-sm mb-4">{{ t('donationDesc') }}</p>
          <button
            @click="$emit('open-donate')"
            class="btn-asymmetric text-white px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale w-full"
            :style="{ backgroundColor: 'var(--primary-color)' }"
            @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)')"
            @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')"
          >
            <i class="fas fa-donate mr-2" :class="{ 'ml-2 mr-0': isRTL }"></i>{{ t('donateNow') }}
          </button>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© 2024 GAINLOVE GLOBAL AID NETWORK. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import logoSrc from '@/assets/images/logo.png'

const { t, isRTL } = inject('i18n')
defineEmits(['open-donate'])
</script>