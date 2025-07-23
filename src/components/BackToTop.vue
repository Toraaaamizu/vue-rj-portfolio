<template>
  <button
    id="back-to-top"
    @click="scrollToTop"
    aria-label="Back to Top"
    class="group fixed bottom-6 right-6 z-50 bg-primary-light dark:bg-primary-dark text-white p-3 rounded-full shadow-brutal transition-all duration-300 hover:scale-110"
    :class="visible ? 'opacity-100 visible' : 'opacity-0 invisible'"
  >
    <i class="fas fa-arrow-up"></i>

    <!-- Tooltip -->
    <span
      class="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300"
    >
      Scroll to Top ({{ scrollPercent }}%)
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)
const scrollPercent = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollPercent.value = Math.round((scrollTop / docHeight) * 100)
  visible.value = scrollTop > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
