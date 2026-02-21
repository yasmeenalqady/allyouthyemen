<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl max-w-md w-full p-8 relative shadow-lg">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <i class="fas fa-times text-2xl"></i>
      </button>
      <h3 class="text-2xl font-bold mb-6" :style="{ color: 'var(--primary-color)' }">
        {{ t('makeDonation') }}
      </h3>
      <div class="grid grid-cols-4 gap-3 mb-6">
        <button
          v-for="amount in donationAmounts"
          :key="amount"
          @click="selectedAmount = amount"
          class="donation-amount py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-sm"
          :class="{
            'text-white': selectedAmount === amount,
            'bg-gray-100': selectedAmount !== amount
          }"
          :style="
            selectedAmount === amount
              ? { backgroundColor: 'var(--primary-color)' }
              : { color: 'var(--txcolor)' }
          "
          @mouseover="
            (e) => {
              if (selectedAmount !== amount) e.currentTarget.style.backgroundColor = '#e5e7eb'
            }
          "
          @mouseout="
            (e) => {
              if (selectedAmount !== amount) e.currentTarget.style.backgroundColor = '#f3f4f6'
            }
          "
        >
          ${{ amount }}
        </button>
      </div>
      <div class="mb-6">
        <label class="block text-sm font-medium mb-2" :style="{ color: 'var(--txcolor)' }">
          {{ t('customAmount') }}
        </label>
        <input
          v-model="customAmount"
          type="number"
          :placeholder="t('enterAmount')"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:border-transparent shadow-sm"
          :style="{ '--tw-ring-color': 'var(--primary-color)' }"
        />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-medium mb-2" :style="{ color: 'var(--txcolor)' }">
          {{ t('donationType') }}
        </label>
        <select
          v-model="donationType"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-2 focus:border-transparent shadow-sm"
          :style="{ '--tw-ring-color': 'var(--primary-color)' }"
        >
          <option>{{ t('oneTime') }}</option>
          <option>{{ t('monthly') }}</option>
          <option>{{ t('annual') }}</option>
        </select>
      </div>
      <button
        @click="processDonation"
        class="btn-asymmetric w-full text-white py-3 text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover-scale"
        :style="{ backgroundColor: 'var(--primary-color)' }"
        @mouseover="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-hover-color)')"
        @mouseout="(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-color)')"
      >
        {{ t('proceed') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'

const { t, isRTL } = inject('i18n')
defineEmits(['close'])

const donationAmounts = [25, 50, 100, 250]
const selectedAmount = ref(50)
const customAmount = ref('')
const donationType = ref('One-time')

const processDonation = () => {
  const amount = customAmount.value || selectedAmount.value
  alert(`Thank you for your donation of $${amount}!`)
  // يمكن إضافة منطق حقيقي هنا
  customAmount.value = ''
  selectedAmount.value = 50
  donationType.value = 'One-time'
  emit('close')
}
</script>