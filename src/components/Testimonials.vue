<template>
  <section id="testimonials" class="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
        Testimonials
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-card w-full h-80 relative"
        >
          <div class="testimonial-inner w-full h-full">
            <!-- Front -->
            <div class="testimonial-front absolute inset-0 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-center items-center text-center">
              <img
                :src="testimonial.photo"
                :alt="testimonial.name"
                class="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 class="text-lg font-semibold mb-2">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 italic">
                "{{ testimonial.snippet }}"
              </p>
            </div>

            <!-- Back -->
            <div class="testimonial-back absolute inset-0 p-6 rounded-xl bg-primary-light dark:bg-primary-dark text-white transform rotate-y-180 flex items-center justify-center text-sm text-center">
              {{ testimonial.fullText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          name: 'Maria Garcia',
          snippet: 'Incredible attention to detail!',
          fullText: 'RJ was instrumental in automating our regression suite. His precision and commitment to quality were unmatched.',
          photo: '/testimonials/maria.jpg'
        },
        {
          name: 'John Lee',
          snippet: 'Excellent QA leadership!',
          fullText: 'RJ helped us streamline our QA process. He introduced better test practices that improved deployment confidence.',
          photo: '/testimonials/john.jpg'
        },
        {
          name: 'Emily Chen',
          snippet: 'Goes above and beyond!',
          fullText: 'From test planning to execution, RJ brought structure and calmness to our release process.',
          photo: '/testimonials/emily.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  perspective: 1000px;
}

.testimonial-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-style: preserve-3d;
}

/* Flip effect on hover */
.testimonial-card:hover .testimonial-inner {
  transform: rotateY(180deg);
}

.testimonial-front,
.testimonial-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
}

.testimonial-back {
  transform: rotateY(180deg);
}
</style>
