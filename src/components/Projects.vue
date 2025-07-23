<template>
  <section id="projects" class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
        My <span class="text-secondary-light dark:text-secondary-dark">Projects</span>
      </h2>

      <div
        :class="[
          projects.length === 1
            ? 'flex justify-center'
            : 'grid gap-10 md:grid-cols-2 lg:grid-cols-3'
        ]"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="glass-card p-6 rounded-brutal shadow-md transition transform hover:-translate-y-2 hover:shadow-xl w-full max-w-md"
        >
        <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-lg"
        />

          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tool, tIndex) in project.tools"
              :key="tIndex"
              class="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import sentinelImg from '@/assets/projects/securitystrikesentinel.PNG'

const projects = [
  {
    title: 'Security Strike Sentinel',
    image: sentinelImg,
    description:
      'Security Strike Sentinel is an advanced, open-source security testing automation toolkit designed to streamline the detection of vulnerabilities in modern web applications. It integrates OWASP ZAP and Dependency-Check into a unified CLI-based workflow, complete with rich HTML and JSON reports, CI/CD integration, and context-based authenticated scanning.',
    tools: ['Java', 'OWASP ZAP API', 'JCommander', 'Jackson (API)', 'JUnit5', 'Chart.js', 'HTML/CSS', 'GitHub Actions']
  }
]
</script>

