<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Hi, I'm <span class="text-primary-light dark:text-primary-dark">RJ Angco</span>
                    </h1>
                    <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-secondary-light dark:text-secondary-dark">
                        Software Quality Assurance Specialist
                    </h2>
                    <p class="text-lg text-black dark:text-gray-300 mb-8 max-w-lg">
                        Streamlining tests, crushing pests, and striving to be the very best!
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#contact" class="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-brutal hover:shadow-xl">
                            Contact Me
                        </a>
                        <a href="#projects" class="px-6 py-3 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                            View Projects
                        </a>
                    </div>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                    <div class="relative w-64 h-64 md:w-80 md:h-80">
                        <div class="absolute inset-0 bg-primary-light dark:bg-primary-dark rounded-full opacity-20 animate-pulse"></div>
                        <div class="absolute inset-4 bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark rounded-full blur-xl opacity-30"></div>
                        <div class="relative w-full h-full flex items-center justify-center">
                            <img src="/profile.jfif" 
                                 alt="Profile" 
                                 class="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                        </div>
                        <div class="absolute -bottom-4 -right-4 bg-neutral-light dark:bg-gray-800 p-3 rounded-full shadow-brutal">
                            <div class="bg-primary-light dark:bg-primary-dark text-white p-3 rounded-full">
                                <i class="fas fa-bug text-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
/* You can add section-specific styling here if needed */
</style>
