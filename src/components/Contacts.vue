
<template>
  <section
    id="contact"
    class="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -top-32 -right-32 h-96 w-96
             rounded-full bg-primary-light/10 blur-3xl
             dark:bg-primary-dark/10"
    ></div>

    <div class="relative mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="mx-auto mb-14 max-w-2xl text-center">
        <span
          class="mb-4 inline-flex items-center gap-2 rounded-full
                 border border-primary-light/20 px-4 py-2 text-sm
                 font-medium text-primary-light
                 dark:text-primary-dark"
        >
          <span class="h-2 w-2 rounded-full bg-green-500"></span>
          Let's connect
        </span>

        <h2 class="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Get In
          <span class="text-primary-light dark:text-primary-dark">
            Touch
          </span>
        </h2>

        <p class="text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
          Have a project in mind, a question, or an opportunity?
          I'd love to hear from you. Let's start a conversation.
        </p>
      </div>

      <!-- Main Content -->
      <div
        class="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10"
      >

        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <div
            class="h-full rounded-2xl border border-gray-200
                   bg-white p-6 shadow-sm
                   dark:border-gray-700 dark:bg-gray-900
                   sm:p-8 lg:p-10"
          >
            <div class="mb-8">
              <h3 class="text-2xl font-bold">
                Send me a message
              </h3>

              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form
              @submit.prevent="handleSubmit"
              class="space-y-6"
              aria-label="Contact Form"
              novalidate
            >
              <!-- Name and Email -->
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div>
                  <label
                    for="name"
                    class="mb-2 block text-sm font-semibold"
                  >
                    Full Name <span class="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    v-model="form.name"
                    @input="validateName"
                    required
                    autocomplete="name"
                    placeholder="John Doe"
                    :aria-invalid="!!nameError"
                    aria-describedby="name-error"
                    class="w-full rounded-xl border bg-gray-50
                           px-4 py-3.5 text-sm outline-none
                           transition-all duration-200
                           placeholder:text-gray-400
                           focus:bg-white focus:ring-4
                           focus:ring-primary-light/10
                           dark:bg-gray-800 dark:focus:bg-gray-800"
                    :class="nameError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-primary-light dark:border-gray-700'"
                  />

                  <p
                    v-if="nameError"
                    id="name-error"
                    class="mt-2 text-xs text-red-500"
                    role="alert"
                  >
                    {{ nameError }}
                  </p>
                </div>

                <div>
                  <label
                    for="email"
                    class="mb-2 block text-sm font-semibold"
                  >
                    Email Address <span class="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-model="form.email"
                    @input="validateEmail"
                    required
                    autocomplete="email"
                    placeholder="you@example.com"
                    :aria-invalid="!!emailError"
                    aria-describedby="email-error"
                    class="w-full rounded-xl border bg-gray-50
                           px-4 py-3.5 text-sm outline-none
                           transition-all duration-200
                           placeholder:text-gray-400
                           focus:bg-white focus:ring-4
                           focus:ring-primary-light/10
                           dark:bg-gray-800 dark:focus:bg-gray-800"
                    :class="emailError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-primary-light dark:border-gray-700'"
                  />

                  <p
                    v-if="emailError"
                    id="email-error"
                    class="mt-2 text-xs text-red-500"
                    role="alert"
                  >
                    {{ emailError }}
                  </p>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label
                  for="subject"
                  class="mb-2 block text-sm font-semibold"
                >
                  Subject <span class="text-red-500">*</span>
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  v-model="form.subject"
                  @input="validateSubject"
                  required
                  placeholder="What would you like to discuss?"
                  :aria-invalid="!!subjectError"
                  aria-describedby="subject-error"
                  class="w-full rounded-xl border bg-gray-50
                         px-4 py-3.5 text-sm outline-none
                         transition-all duration-200
                         placeholder:text-gray-400
                         focus:bg-white focus:ring-4
                         focus:ring-primary-light/10
                         dark:bg-gray-800 dark:focus:bg-gray-800"
                  :class="subjectError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-primary-light dark:border-gray-700'"
                />

                <p
                  v-if="subjectError"
                  id="subject-error"
                  class="mt-2 text-xs text-red-500"
                  role="alert"
                >
                  {{ subjectError }}
                </p>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="mb-2 block text-sm font-semibold"
                >
                  Your Message <span class="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  v-model="form.message"
                  required
                  placeholder="Tell me more about your inquiry..."
                  class="w-full resize-y rounded-xl border
                         border-gray-200 bg-gray-50 px-4 py-3.5
                         text-sm outline-none transition-all
                         duration-200 placeholder:text-gray-400
                         focus:border-primary-light focus:bg-white
                         focus:ring-4 focus:ring-primary-light/10
                         dark:border-gray-700 dark:bg-gray-800
                         dark:focus:bg-gray-800"
                ></textarea>
              </div>

              <!-- Submit -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="loading"
                  class="flex w-full items-center justify-center gap-3
                         rounded-xl bg-primary-light px-6 py-4
                         font-semibold text-white shadow-lg
                         shadow-primary-light/20 transition-all
                         duration-300 hover:-translate-y-0.5
                         hover:shadow-xl hover:shadow-primary-light/30
                         disabled:cursor-not-allowed
                         disabled:opacity-60
                         disabled:hover:translate-y-0
                         dark:bg-primary-dark sm:w-auto"
                >
                  <i
                    v-if="loading"
                    class="fas fa-spinner fa-spin"
                    aria-hidden="true"
                  ></i>

                  <i
                    v-else
                    class="fas fa-paper-plane"
                    aria-hidden="true"
                  ></i>

                  {{ loading ? 'Sending Message...' : 'Send Message' }}
                </button>

                <p
                  class="mt-4 text-xs text-gray-500 dark:text-gray-400"
                >
                  <i class="fas fa-lock mr-1" aria-hidden="true"></i>
                  Your information will only be used to respond to your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="lg:col-span-2">
          <div
            class="relative h-full overflow-hidden rounded-2xl
                   bg-gray-900 p-8 text-white shadow-xl sm:p-10"
          >
            <!-- Decorative background -->
            <div
              class="pointer-events-none absolute -right-20 -top-20
                     h-64 w-64 rounded-full bg-primary-light/20 blur-3xl"
            ></div>

            <div class="relative">

              <span
                class="text-sm font-semibold uppercase tracking-widest
                       text-primary-dark"
              >
                Contact Details
              </span>

              <h3 class="mt-3 text-3xl font-bold">
                Let's talk about your next idea.
              </h3>

              <p class="mt-4 leading-relaxed text-gray-400">
                Whether it's a collaboration, a project, or just a
                quick question, feel free to reach out.
              </p>

              <!-- Contact Details -->
              <div class="mt-10 space-y-7">

                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center
                           justify-center rounded-xl
                           bg-primary-light/15 text-primary-dark"
                  >
                    <i class="fas fa-envelope text-lg"></i>
                  </div>

                  <div class="min-w-0">
                    <p class="text-sm text-gray-400">Email Me</p>
                    <a
                      href="mailto:rjangco.personal@gmail.com"
                      class="mt-1 block break-all font-medium
                             transition-colors hover:text-primary-dark"
                    >
                      rjangco.personal@gmail.com
                    </a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center
                           justify-center rounded-xl
                           bg-primary-light/15 text-primary-dark"
                  >
                    <i class="fas fa-phone-alt text-lg"></i>
                  </div>

                  <div>
                    <p class="text-sm text-gray-400">Call Me</p>
                    <a
                      href="tel:+639177060204"
                      class="mt-1 block font-medium
                             transition-colors hover:text-primary-dark"
                    >
                      (+63) 0917-706-0204
                    </a>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-start gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center
                           justify-center rounded-xl
                           bg-primary-light/15 text-primary-dark"
                  >
                    <i class="fas fa-map-marker-alt text-lg"></i>
                  </div>

                  <div>
                    <p class="text-sm text-gray-400">Location</p>
                    <p class="mt-1 font-medium">
                      San Pablo City, Philippines
                    </p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="mt-12 border-t border-gray-700 pt-8">
                <h4 class="mb-5 font-semibold">
                  Find me online
                </h4>

                <div class="flex gap-3">
                  <a
                    href="https://linkedin.com/in/ralphael-joaquin-angco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    class="flex h-12 w-12 items-center justify-center
                           rounded-xl bg-white/10 text-lg
                           transition-all hover:-translate-y-1
                           hover:bg-primary-light hover:text-white"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>

                  <a
                    href="https://github.com/Toraaaamizu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    class="flex h-12 w-12 items-center justify-center
                           rounded-xl bg-white/10 text-lg
                           transition-all hover:-translate-y-1
                           hover:bg-primary-light hover:text-white"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>

              <!-- Availability -->
              <div
                class="mt-10 flex items-center gap-3 rounded-xl
                       border border-white/10 bg-white/5 p-4"
              >
                <span class="relative flex h-3 w-3">
                  <span
                    class="absolute inline-flex h-full w-full
                           animate-ping rounded-full bg-green-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex h-3 w-3 rounded-full
                           bg-green-500"
                  ></span>
                </span>

                <span class="text-sm text-gray-300">
                  Open to opportunities and collaborations
                </span>
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

// Validation errors
const nameError = ref('')
const emailError = ref('')
const subjectError = ref('')

// Validation
const validateName = () => {
  nameError.value =
    form.value.name.trim().length < 4
      ? 'Name must be at least 4 characters'
      : ''
}

const validateEmail = () => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  emailError.value =
    !pattern.test(form.value.email.trim())
      ? 'Enter a valid email address'
      : ''
}

const validateSubject = () => {
  subjectError.value =
    form.value.subject.trim().length < 10
      ? 'Subject must be at least 10 characters'
      : ''
}

// Submit
const handleSubmit = async () => {
  validateName()
  validateEmail()
  validateSubject()

  if (
    nameError.value ||
    emailError.value ||
    subjectError.value ||
    !form.value.message.trim()
  ) {
    toast.error('Please complete the form correctly.')
    return
  }

  loading.value = true

  try {
    const formData = new FormData()

    formData.append('name', form.value.name.trim())
    formData.append('email', form.value.email.trim())
    formData.append('subject', form.value.subject.trim())
    formData.append('message', form.value.message.trim())

    const res = await fetch('https://formspree.io/f/manbeqgj', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })

    const data = await res.json()

    if (res.ok) {
      toast.success('✅ Message sent successfully! Thank you for reaching out.')

      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }

      nameError.value = ''
      emailError.value = ''
      subjectError.value = ''

    } else {
      const error =
        data.errors?.[0]?.message ||
        'Failed to send message. Please try again.'

      toast.error(error)
    }

  } catch (error) {
    toast.error(
      'Something went wrong. Please try again later.'
    )
  } finally {
    loading.value = false
  }
}
</script>
