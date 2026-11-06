<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
//import Testimonials from './components/Testimonials.vue'
import Contacts from './components/Contacts.vue'
import BackToTop from './components/BackToTop.vue'
import Footer from './components/Footer.vue'

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
