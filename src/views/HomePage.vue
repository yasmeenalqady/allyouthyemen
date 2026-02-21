




<template>
  <div
    class="min-h-screen bg-white"
    :class="{
      'font-serif formal': currentLang === 'en',
      'font-cairo': currentLang === 'ar'
    }"
    :dir="dir"
  >
    <NavBar @open-donate="showDonateModal = true" />
    <HeroSection @open-donate="showDonateModal = true" />
    <StatisticsSection />
    <ProgramsSection />
    <HowWeHelpSection />
    <ImpactSection />
    <EventsSection />
    <PartnersSection />
    <NewsletterSection />
    <Footer @open-donate="showDonateModal = true" />

    <DonateModal
      v-if="showDonateModal"
      @close="showDonateModal = false"
    />

    <ScrollToTop v-if="showScrollTop" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { useI18n } from '@/composables/useI18n'

// مكونات التخطيط
import NavBar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

// مكونات الأقسام
import HeroSection from '@/components/home/HeroSlider.vue'
import StatisticsSection from '@/components/home/Statistics.vue'
import ProgramsSection from '@/components/home/Programs.vue'
import HowWeHelpSection from '@/components/home/HowWeHelp.vue'
import ImpactSection from '@/components/home/ImpactTestimonials.vue'
import EventsSection from '@/components/home/Events.vue'
import PartnersSection from '@/components/home/Partners.vue'
import NewsletterSection from '@/components/home/Newsletter.vue'

// مكونات واجهة المستخدم
import DonateModal from '@/components/ui/DonateModal.vue'
import ScrollToTop from '@/components/ui/ScrollToTop.vue'

const { currentLang, dir, t, toggleLanguage, isRTL } = useI18n()

// توفير i18n لجميع المكونات الفرعية مع الحفاظ على التفاعلية
provide('i18n', {
  t,
  toggleLanguage,
  currentLang,
  dir: dir,          // dir هو computed، نمرره كما هو
  isRTL               // isRTL هو computed، نمرره كما هو
})

const showDonateModal = ref(false)
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // ضبط اتجاه الصفحة عند التحميل
  document.documentElement.dir = dir.value
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> 

