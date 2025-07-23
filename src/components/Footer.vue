<template>
  <footer class="bg-neutral-light dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Left Section -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-semibold">RJ <span class="text-primary-light dark:text-primary-dark">Angco</span></h3>
          <p class="text-sm mt-1">© {{ new Date().getFullYear() }} All rights reserved.</p>
        </div>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <a href="https://linkedin.com/in/ralphael-joaquin-angco" class="hover:text-primary-light dark:hover:text-primary-dark transition">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Toraaaamizu" class="hover:text-primary-light dark:hover:text-primary-dark transition">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <!-- Optional Separator -->
      <div class="mt-6 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
        Built with Vue.js and Tailwind CSS by RJ Angco.
      </div>
    </div>
  </footer>
</template>

<script setup>
// You can add dynamic logic here if needed
</script>
