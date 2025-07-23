<template>
  <nav class="relative w-full z-50 bg-neutral-light/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Brand -->
        <div class="flex items-center">
          <a href="#" class="text-xl font-bold text-primary-light dark:text-primary-dark flex items-center">
            <i class="fas fa-bug mr-2"></i>
            <span>RJ<span class="text-secondary-light dark:text-secondary-dark">Angco</span></span>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" @click="toggleMenu" class="nav-link px-3 py-2 font-medium">Home</a>
          <a href="#about" @click="toggleMenu" class="nav-link px-3 py-2 font-medium">About</a>
          <a href="#skills" @click="toggleMenu" class="nav-link px-3 py-2 font-medium">Skills</a>
          <a href="#projects" @click="toggleMenu" class="nav-link px-3 py-2 font-medium">Projects</a>
          <!--<a href="#testimonials" class="nav-link px-3 py-2 font-medium">Testimonials</a>-->
          <a href="#contact" @click="toggleMenu" class="nav-link px-3 py-2 font-medium">Contact</a>

          <!-- Dark Mode Toggle -->
          <div class="flex items-center">
            <span class="mr-2 text-sm"><i class="fas fa-sun"></i></span>
            <div class="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-neutral-light border-4 appearance-none cursor-pointer"
                :checked="isDark"
                @change="toggleDarkMode"
              />
              <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <span class="text-sm"><i class="fas fa-moon"></i></span>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-300">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-neutral-light dark:bg-gray-800 shadow-brutal">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#home" class="block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#skills" class="block px-3 py-2 rounded-md text-base font-medium">Skills</a>
        <a href="#projects" class="block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        <!--<a href="#testimonials" class="block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>-->
        <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium">Contact</a>

        <!-- Mobile Toggle -->
        <div class="flex justify-center px-3 py-2">
          <span class="mr-2"><i class="fas fa-sun"></i></span>
          <div class="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              id="toggle-mobile"
              class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-neutral-light border-4 appearance-none cursor-pointer"
              :checked="isDark"
              @change="toggleDarkMode"
            />
            <label for="toggle-mobile" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
          <span><i class="fas fa-moon"></i></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const isDark = ref(false)
    const menuOpen = ref(false)

    const toggleDarkMode = () => {
      isDark.value = !isDark.value
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', isDark.value)
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    onMounted(() => {
      const saved = localStorage.getItem('theme')
      isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      }
    })

    return {
      isDark,
      menuOpen,
      toggleDarkMode,
      toggleMenu
    }
  }
}
</script>

<style scoped>
/* Reuse custom toggle styles if needed or write them here */

.toggle-checkbox:checked + .toggle-label {
  background-color: #4f46e5; /* Indigo as example */
}
</style>
