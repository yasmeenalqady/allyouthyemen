<template>
  <section id="about" class="py-20 bg-white relative overflow-hidden">
    <!-- خلفية زخرفية متحركة -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        class="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        :style="{ background: `var(--primary-color)` }"
      ></div>
      <div 
        class="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        :style="{ background: `var(--warning-color)` }"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 relative">


      <!-- الصورة والنص الوصفي -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div class="relative group perspective">
          <div class="relative transform-gpu transition-transform duration-700 group-hover:rotate-y-3">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-warning-500 rounded-asymmetric opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
            <div class="relative overflow-hidden rounded-asymmetric shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="About us"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
          <!-- إطار ثنائي اللون -->
          <div class="absolute -bottom-4 -right-4 w-32 h-32 border-2 rounded-asymmetric -z-10" 
               :style="{ borderColor: 'var(--warning-color)' }"></div>
          <div class="absolute -top-4 -left-4 w-32 h-32 border-2 rounded-asymmetric -z-10"
               :style="{ borderColor: 'var(--primary-color)' }"></div>
        </div>

        <div class="space-y-8">
          <div class="relative">
            <span class="absolute -left-4 -top-4 text-8xl font-serif text-gray-200 select-none">“</span>
            <p class="text-2xl font-light leading-relaxed text-gray-700 relative z-10 pl-6">
              {{ t('aboutDesc1') }}
            </p>
          </div>
          <p class="text-lg text-gray-500 font-light leading-relaxed border-l-2 border-warning-200 pl-6 italic">
            {{ t('aboutDesc2') }}
          </p>
          <button 
            class="group inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gray-600 hover:text-primary-500 transition-colors"
          >
            <span>{{ t('readMore') }}</span>
            <span class="w-8 h-px bg-gray-400 group-hover:bg-primary-500 transition-all group-hover:w-12"></span>
            <i class="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>
      </div>

      <!-- الرسالة والرؤية مع تأثير بطاقات زجاجية - تم تعديل الخلفيات -->
      <div class="grid md:grid-cols-2 gap-8 mb-32">
        <!-- كارد المهمة (خلفية بلون أساسي شفاف) #f4a03a -->
        <div 
          class="service-card group p-8 rounded-asymmetric backdrop-blur-sm border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-primary-200"
          :style="{ backgroundColor: 'rgba(244, 160, 58, 0.05)' }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-asymmetric bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i class="fas fa-bullseye text-2xl" :style="{ color: 'var(--primary-color)' }"></i>
            </div>
            <h3 class="text-2xl font-light" :style="{ color: 'var(--primary-color)' }">
              {{ t('mission') }}
            </h3>
          </div>
          <p class="text-gray-600 font-light leading-relaxed pl-16">
            {{ t('missionDesc') }}
          </p>
          <div class="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-primary-400 to-transparent group-hover:w-20 transition-all"></div>
        </div>

        <!-- كارد الرؤية (خلفية بلون تحذيري شفاف) #135e69 -->
        <div 
          class="service-card group p-8 rounded-asymmetric backdrop-blur-sm border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-warning-200"
          :style="{ backgroundColor: 'rgba(19, 94, 105, 0.05)' }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 rounded-asymmetric bg-gradient-to-br from-warning-100 to-warning-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i class="fas fa-eye text-2xl" :style="{ color: 'var(--warning-color)' }"></i>
            </div>
            <h3 class="text-2xl font-light" :style="{ color: 'var(--primary-color)' }">
              {{ t('vision') }}
            </h3>
          </div>
          <p class="text-gray-600 font-light leading-relaxed pl-16">
            {{ t('visionDesc') }}
          </p>
          <div class="mt-6 w-12 h-1 rounded-full bg-gradient-to-r from-warning-400 to-transparent group-hover:w-20 transition-all"></div>
        </div>
      </div>

      <!-- الأهداف -->
      <div class="mb-32">
        <h3 class="text-3xl font-light mb-16 text-center relative">
          <span :style="{ color: 'var(--primary-color)' }">{{ t('ourGoals') }}</span>
          <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(goal, idx) in goals"
            :key="idx"
            class="service-card group p-8 rounded-asymmetric bg-gray-50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-warning-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10 flex flex-col items-center text-center gap-4">
              <div 
                class="w-24 h-24 rounded-asymmetric flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                :style="{ background: `linear-gradient(135deg, ${primaryLight}, ${warningLight})` }"
              >
                <i :class="goal.icon" class="text-4xl" :style="{ color: 'var(--primary-color)' }"></i>
              </div>
              <div>
                <h4 class="font-light text-xl mb-3 text-gray-800">{{ t(goal.title) }}</h4>
                <p class="text-sm text-gray-500 font-light leading-relaxed">
                  {{ t(goal.desc) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- إحصائيات -->
      <div class="relative py-20 px-8 rounded-asymmetric bg-gradient-to-br from-gray-50 to-white shadow-inner mb-16">
        <div class="absolute inset-0 bg-grid-pattern opacity-5 rounded-asymmetric"></div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="text-center group"
          >
            <div class="text-5xl font-light mb-2 tabular-nums" :style="{ color: 'var(--primary-color)' }">
              {{ stat.number }}
            </div>
            <div class="text-sm uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
              {{ t(stat.label) }}
            </div>
            <div class="w-12 h-0.5 bg-gradient-to-r from-primary-300 to-warning-300 mx-auto mt-4 group-hover:w-16 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const i18n = inject('i18n', {
  t: (key) => key,
  isRTL: false
})

const t = (key) => i18n.t(key)

const primaryLight = computed(() => 'rgba(59, 130, 246, 0.15)')
const warningLight = computed(() => 'rgba(245, 158, 11, 0.15)')

const stats = [
  { number: '10K+', label: 'beneficiaries' },
  { number: '50+', label: 'projects' },
  { number: '200+', label: 'volunteers' },
  { number: '15+', label: 'yearsOfService' }
]

const goals = [
  { icon: 'fas fa-graduation-cap', title: 'goal1Title', desc: 'goal1Desc' },
  { icon: 'fas fa-heartbeat', title: 'goal2Title', desc: 'goal2Desc' },
  { icon: 'fas fa-hand-holding-heart', title: 'goal3Title', desc: 'goal3Desc' }
]
</script>

<style scoped>
.rounded-asymmetric {
  border-top-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

.service-card {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, #e5e7eb 1px, transparent 1px),
    linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
  background-size: 30px 30px;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 10s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

.perspective {
  perspective: 1000px;
}
.group:hover .rotate-y-3 {
  transform: rotateY(3deg);
}
.rotate-y-3 {
  transition: transform 0.7s ease;
}

[dir="rtl"] .pl-16 {
  padding-left: 0;
  padding-right: 4rem;
}
[dir="rtl"] .pl-6 {
  padding-left: 0;
  padding-right: 1.5rem;
}
[dir="rtl"] .border-l-2 {
  border-left-width: 0;
  border-right-width: 2px;
}
[dir="rtl"] .fa-arrow-right {
  transform: rotate(180deg);
}
[dir="rtl"] .group-hover:translate-x-1 {
  transform: translateX(-0.25rem);
}
</style>