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

    <!-- المحتوى الرئيسي: هيرو + نموذج الاتصال -->
    <main>
      <HeroSection 
        :title="t('contactHeroTitle')" 
        :description="t('contactHeroDesc')"
        :current-page="t('contact')"
      />
      <!-- استبدال AboutSection بمكون خاص بصفحة الاتصال -->
      <ContactSection />
    </main>

    <Footer @open-donate="showDonateModal = true" />

    <DonateModal
      v-if="showDonateModal"
      @close="showDonateModal = false"
    />

    <ScrollToTop v-if="showScrollTop" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, watch } from 'vue'
import { useI18n } from '@/composables/useI18n'

// مكونات التخطيط
import NavBar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

// مكونات المحتوى
import HeroSection from '@/components/layout/HeroSection.vue'
// استيراد مكون الاتصال بدلاً من AboutSection
import ContactSection from '@/components/contact/ContactSection.vue'

// مكونات واجهة المستخدم
import DonateModal from '@/components/ui/DonateModal.vue'
import ScrollToTop from '@/components/ui/ScrollToTop.vue'

const { currentLang, dir, t, toggleLanguage, isRTL } = useI18n()

// توفير i18n لجميع المكونات الفرعية
provide('i18n', {
  t,
  toggleLanguage,
  currentLang,
  dir,
  isRTL
})

const showDonateModal = ref(false)
const showScrollTop = ref(false)

// تعريف الروابط للهيرو الخاص بصفحة "اتصل بنا" (يمكن تعديلها حسب الحاجة)
const heroLinks = [
  {
    text: t('home'),
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    type: 'link'
  },
  {
    text: t('about'), // بدلاً من contact (لأننا في صفحة الاتصال)
    onClick: () => {
      // يمكن التوجيه إلى صفحة "من نحن" إذا كانت موجودة
      // مثال: router.push('/about')
    },
    type: 'link'
  },
  {
    text: t('donateNow'),
    onClick: () => { showDonateModal.value = true },
    type: 'button'
  }
]

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

// مراقبة تغيير الاتجاه
watch(dir, (newDir) => {
  document.documentElement.dir = newDir
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.documentElement.dir = dir.value
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>