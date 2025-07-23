<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
//import Testimonials from './components/Testimonials.vue'
import Contacts from './components/Contacts.vue'
import BackToTop from './components/BackToTop.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        const offset = 80
        const top = target.offsetTop - offset
        window.scrollTo({ top, behavior: 'smooth' })

        const menu = document.getElementById('mobile-menu')
        if (menu) menu.classList.add('hidden')
      }
    })
  })
})
</script>

<template>
  <div class="bg-neutral-light dark:bg-gray-900 text-text-light dark:text-white">
  <Navbar />
  <HeroSection />
  <About />
  <Skills />
  <Projects />
  <!--<Testimonials />-->
  <Contacts />
  <BackToTop />
  <Footer />
  </div>
</template>
