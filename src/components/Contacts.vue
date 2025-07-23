<template>
  <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Get In <span class="text-primary-light dark:text-primary-dark">Touch</span>
        </h2>
        <div class="w-20 h-1 bg-secondary-light dark:bg-secondary-dark mx-auto mb-6"></div>
        <p class="text-lg text-black dark:text-gray-300 max-w-3xl mx-auto">
          Interested in working together or have questions? Feel free to reach out!
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6" aria-label="Contact Form">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  v-model="form.name"
                  @input="validateName"
                  required
                  placeholder="Your name"
                  class="w-full px-4 py-3 rounded-lg border"
                  :class="nameError ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  v-model="form.email"
                  @input="validateEmail"
                  required
                  placeholder="you@example.com"
                  class="w-full px-4 py-3 rounded-lg border"
                  :class="emailError ? 'border-red-500' : 'border-gray-300'"
                />
                <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium mb-1">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                v-model="form.subject"
                @input="validateSubject"
                required
                placeholder="What’s this about?"
                class="w-full px-4 py-3 rounded-lg border"
                :class="subjectError ? 'border-red-500' : 'border-gray-300'"
              />
              <p v-if="subjectError" class="text-red-500 text-sm mt-1">{{ subjectError }}</p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                v-model="form.message"
                required
                placeholder="Your message..."
                class="w-full px-4 py-3 rounded-lg border border-gray-300"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                :disabled="loading"
                class="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-medium rounded-lg hover:bg-opacity-90 transition-all shadow hover:shadow-lg"
              >
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Info Card -->
        <div>
          <div class="glass-card p-8 rounded-brutal shadow-brutal h-full">
            <h3 class="text-xl font-semibold mb-6">Contact <span class="text-primary-light dark:text-primary-dark">Information</span></h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light dark:bg-primary-dark text-white p-3 rounded-full">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-medium">Email</h4>
                  <p class="text-black dark:text-gray-300">rjangco.personal@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light dark:bg-primary-dark text-white p-3 rounded-full">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-medium">Phone</h4>
                  <p class="text-black dark:text-gray-300">(+63) 0917-706-0204</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light dark:bg-primary-dark text-white p-3 rounded-full">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-medium">Location</h4>
                  <p class="text-black dark:text-gray-300">San Pablo City, Philippines</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <h4 class="font-medium mb-4">Connect With Me</h4>
              <div class="flex space-x-4">
                <a href="https://linkedin.com/in/ralphael-joaquin-angco" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Toraaaamizu" class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-colors">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)

// Errors
const nameError = ref('')
const emailError = ref('')
const subjectError = ref('')

// Real-time validation
const validateName = () => {
  nameError.value = form.value.name.length < 4 ? 'Name must be at least 4 characters' : ''
}

const validateEmail = () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = !pattern.test(form.value.email) ? 'Enter a valid email' : ''
}

const validateSubject = () => {
  subjectError.value = form.value.subject.length < 10 ? 'Subject must be at least 10 characters' : ''
}

const handleSubmit = async () => {
  validateName()
  validateEmail()
  validateSubject()

  if (nameError.value || emailError.value || subjectError.value) {
    toast.error('Please fix form errors before submitting.')
    return
  }

  loading.value = true

  try {
    const res = await fetch('https://formspree.io/f/manbeqgj', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(Object.assign(document.createElement('form'), form.value))
    })

    if (res.ok) {
      toast.success('Message sent successfully!')
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      toast.error('Failed to send message. Try again.')
    }
  } catch (e) {
    toast.error('Something went wrong. Please try later.')
  } finally {
    loading.value = false
  }
}
</script>
