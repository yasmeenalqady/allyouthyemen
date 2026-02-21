<template>
  <section class="py-16" :style="{ backgroundColor: '#f9fafb' }">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

        <!-- البطاقة 1: Lives Impacted -->
        <div class="stat-counter text-center p-6 bg-white shadow-sm border border-gray-200 relative event-card">
          <!-- ربع الدائرة -->
          <div class="corner-circle"></div>

          <div class="text-4xl font-bold mb-2" :style="{ color: 'var(--primary-color)' }">
            <span ref="counter1">0</span>+
          </div>
          <div class="text-sm font-medium" :style="{ color: 'var(--txcolor)' }">
            {{ t('livesImpacted') }}
          </div>
        </div>

        <!-- البطاقة 2: Funds Raised -->
        <div class="stat-counter text-center p-6 bg-white shadow-sm border border-gray-200 relative event-card">
          <div class="corner-circle"></div>

          <div class="text-4xl font-bold mb-2" :style="{ color: 'var(--secondary-color)' }">
            $<span ref="counter2">0</span>M
          </div>
          <div class="text-sm font-medium" :style="{ color: 'var(--txcolor)' }">
            {{ t('fundsRaised') }}
          </div>
        </div>

        <!-- البطاقة 3: Projects -->
        <div class="stat-counter text-center p-6 bg-white shadow-sm border border-gray-200 relative event-card">
          <div class="corner-circle"></div>

          <div class="text-4xl font-bold mb-2" :style="{ color: 'var(--green-txtcolor)' }">
            <span ref="counter3">0</span>+
          </div>
          <div class="text-sm font-medium" :style="{ color: 'var(--txcolor)' }">
            {{ t('projects') }}
          </div>
        </div>

        <!-- البطاقة 4: Volunteers -->
        <div class="stat-counter text-center p-6 bg-white shadow-sm border border-gray-200 relative event-card">
          <div class="corner-circle"></div>

          <div class="text-4xl font-bold mb-2" :style="{ color: 'var(--primary-color)' }">
            <span ref="counter4">0</span>+
          </div>
          <div class="text-sm font-medium" :style="{ color: 'var(--txcolor)' }">
            {{ t('volunteers') }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

let i18n
try { i18n = inject('i18n') } catch(e) { console.warn('i18n not available') }
const t = key => i18n?.t?.(key) ?? key

const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)
const counter4 = ref(null)

const targets = [150000, 5.2, 120, 3500]

function animateCounter(element, target, suffix='') {
  if (!element) return
  let current = 0
  const step = target/50
  const timer = setInterval(()=>{
    current+=step
    if(current>=target){ current=target; clearInterval(timer) }
    element.textContent = Math.floor(current)+suffix
  },30)
}

let observer = null
onMounted(()=>{
  const sectionElement = document.querySelector('.stat-counter')?.parentElement?.parentElement
  if(!sectionElement) return

  observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animateCounter(counter1.value, targets[0])
        animateCounter(counter2.value, targets[1])
        animateCounter(counter3.value, targets[2])
        animateCounter(counter4.value, targets[3])
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })

  observer.observe(sectionElement)
})

onUnmounted(()=>{
  observer?.disconnect()
})
</script>

<style scoped>
.event-card {
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
  position: relative;
  overflow: hidden;
}

/* ربع الدائرة في الزاوية السفلية */
.corner-circle {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: #f4a03a;
  bottom: 0;
  right: 0; /* الزاوية السفلى اليمنى */
  border-top-left-radius: 100%;
}

/* fade-in عند scroll */
.animate-on-scroll {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>