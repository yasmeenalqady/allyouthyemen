<template>
  <section id="contact" class="py-20 bg-white relative overflow-hidden">
    <!-- خلفية زخرفية خفيفة -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        class="absolute top-0 left-0 w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2"
        :style="{ background: `linear-gradient(135deg, var(--primary-color) 0%, transparent 100%)`, opacity: 0.05 }"
      ></div>
      <div 
        class="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-1/3 translate-y-1/3"
        :style="{ background: `linear-gradient(45deg, var(--warning-color) 0%, transparent 100%)`, opacity: 0.05 }"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 relative">
      <!-- معلومات الاتصال (صف كامل) - خلفية بيضاء -->
      <div class="mb-12 p-8 rounded-asymmetric bg-white">
        <h3 class="text-2xl font-light mb-6" :style="{ color: 'var(--primary-color)' }">
          {{ t('contactInfo') }}
        </h3>
        
        <!-- بطاقات معلومات الاتصال في شبكة 4 أعمدة - خلفية #135e69 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- الهاتف -->
          <div class="contact-card group p-6 rounded-asymmetric transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="background-color: #135e69;">
            <div class="flex items-center gap-4">
              <div 
                class="w-12 h-12 rounded-asymmetric flex items-center justify-center bg-white"
              >
                <i class="fas fa-phone-alt text-xl" style="color: #135e69;"></i>
              </div>
              <div>
                <h4 class="text-sm font-light uppercase tracking-wider text-gray-200 mb-1">{{ t('phone') }}</h4>
                <a href="tel:+966123456789" class="text-white hover:text-gray-200 transition-colors">+966 12 345 6789</a>
              </div>
            </div>
          </div>

          <!-- البريد الإلكتروني -->
          <div class="contact-card group p-6 rounded-asymmetric transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="background-color: #135e69;">
            <div class="flex items-center gap-4">
              <div 
                class="w-12 h-12 rounded-asymmetric flex items-center justify-center bg-white"
              >
                <i class="fas fa-envelope text-xl" style="color: #135e69;"></i>
              </div>
              <div>
                <h4 class="text-sm font-light uppercase tracking-wider text-gray-200 mb-1">{{ t('email') }}</h4>
                <a href="mailto:info@example.org" class="text-white hover:text-gray-200 transition-colors">info@example.org</a>
              </div>
            </div>
          </div>

          <!-- العنوان -->
          <div class="contact-card group p-6 rounded-asymmetric transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="background-color: #135e69;">
            <div class="flex items-center gap-4">
              <div 
                class="w-12 h-12 rounded-asymmetric flex items-center justify-center bg-white"
              >
                <i class="fas fa-map-marker-alt text-xl" style="color: #135e69;"></i>
              </div>
              <div>
                <h4 class="text-sm font-light uppercase tracking-wider text-gray-200 mb-1">{{ t('address') }}</h4>
                <p class="text-white">123 Main Street, City, Country</p>
              </div>
            </div>
          </div>

          <!-- ساعات العمل -->
          <div class="contact-card group p-6 rounded-asymmetric transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style="background-color: #135e69;">
            <div class="flex items-center gap-4">
              <div 
                class="w-12 h-12 rounded-asymmetric flex items-center justify-center bg-white"
              >
                <i class="fas fa-clock text-xl" style="color: #135e69;"></i>
              </div>
              <div>
                <h4 class="text-sm font-light uppercase tracking-wider text-gray-200 mb-1">{{ t('workingHours') }}</h4>
                <p class="text-white">Sat - Thu: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <!-- وسائل التواصل الاجتماعي (اختياري) أسفل البطاقات -->
        <div class="pt-6">
          <h4 class="text-sm font-light uppercase tracking-wider text-gray-400 mb-3">{{ t('followUs') }}</h4>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-asymmetric bg-[#f4a03a] flex items-center justify-center transition-colors hover:bg-gray-100" style="color: #135e69;">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-asymmetric bg-[#f4a03a] flex items-center justify-center transition-colors hover:bg-gray-100" style="color: #135e69;">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-asymmetric bg-[#f4a03a] flex items-center justify-center transition-colors hover:bg-gray-100" style="color: #135e69;">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-asymmetric bg-[#f4a03a] flex items-center justify-center transition-colors hover:bg-gray-100" style="color: #135e69;">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- نموذج الاتصال (صف كامل) -->
      <div class="mb-12">
        <h3 class="text-2xl font-light mb-6" :style="{ color: 'var(--primary-color)' }">
          {{ t('sendMessage') }}
        </h3>
        <div class="service-card p-8 rounded-asymmetric bg-gray-50 transition-all duration-300 hover:shadow-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- الاسم -->
            <div>
              <label class="block text-sm font-light text-gray-500 mb-2">{{ t('name') }}</label>
              <input 
                type="text" 
                v-model="form.name"
                class="w-full px-4 py-3 bg-white border border-gray-200 rounded-asymmetric focus:outline-none focus:border-primary-300 transition-colors"
                :class="{ 'border-warning-300': errors.name }"
                required
              />
              <p v-if="errors.name" class="text-sm text-warning-500 mt-1">{{ errors.name }}</p>
            </div>
            <!-- البريد الإلكتروني -->
            <div>
              <label class="block text-sm font-light text-gray-500 mb-2">{{ t('email') }}</label>
              <input 
                type="email" 
                v-model="form.email"
                class="w-full px-4 py-3 bg-white border border-gray-200 rounded-asymmetric focus:outline-none focus:border-primary-300 transition-colors"
                :class="{ 'border-warning-300': errors.email }"
                required
              />
              <p v-if="errors.email" class="text-sm text-warning-500 mt-1">{{ errors.email }}</p>
            </div>
            <!-- الموضوع -->
            <div>
              <label class="block text-sm font-light text-gray-500 mb-2">{{ t('subject') }}</label>
              <input 
                type="text" 
                v-model="form.subject"
                class="w-full px-4 py-3 bg-white border border-gray-200 rounded-asymmetric focus:outline-none focus:border-primary-300 transition-colors"
              />
            </div>
            <!-- الرسالة -->
            <div>
              <label class="block text-sm font-light text-gray-500 mb-2">{{ t('message') }}</label>
              <textarea 
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 bg-white border border-gray-200 rounded-asymmetric focus:outline-none focus:border-primary-300 transition-colors resize-none"
                required
              ></textarea>
            </div>
            <!-- زر الإرسال -->
            <button 
              type="submit"
              class="btn-asymmetric w-full text-white px-8 py-4 text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
              :style="{ backgroundColor: 'var(--primary-color)' }"
              @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)')"
              @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')"
            >
              <i class="fas fa-paper-plane mr-2" :class="{ 'ml-2 mr-0': isRTL }"></i>
              {{ t('send') }}
            </button>
          </form>
        </div>
      </div>

      <!-- الخريطة (صف كامل) -->
      <div class="service-card p-4 rounded-asymmetric bg-gray-50 transition-all duration-300 hover:shadow-xl overflow-hidden">
        <div class="relative w-full h-[400px] rounded-asymmetric overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458417!3d40.75875897932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, inject } from 'vue'

const i18n = inject('i18n', {
  t: (key) => key,
  isRTL: false
})

const t = (key) => i18n.t(key)
const isRTL = i18n.isRTL

// نموذج البيانات
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})

// دالة التحقق من البريد الإلكتروني
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}

// معالجة الإرسال
const handleSubmit = () => {
  errors.value = {}
  
  if (!form.name.trim()) {
    errors.value.name = t('nameRequired')
  }
  if (!form.email.trim()) {
    errors.value.email = t('emailRequired')
  } else if (!validateEmail(form.email)) {
    errors.value.email = t('emailInvalid')
  }
  if (!form.message.trim()) {
    errors.value.message = t('messageRequired')
  }

  if (Object.keys(errors.value).length === 0) {
    // هنا يمكن إرسال البيانات إلى API
    console.log('Form submitted:', form)
    // إعادة تعيين النموذج بعد الإرسال
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    // يمكن إظهار رسالة نجاح
    alert(t('messageSent'))
  }
}
</script>

<style scoped>
/* الحواف غير المتماثلة */
.rounded-asymmetric {
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

/* تأثير hover للكاردات */
.service-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.contact-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* تأثير الزر */
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}

/* تحسين RTL */
[dir="rtl"] .mr-2 {
  margin-right: 0;
  margin-left: 0.5rem;
}
[dir="rtl"] .ml-2 {
  margin-left: 0;
  margin-right: 0.5rem;
}
</style>