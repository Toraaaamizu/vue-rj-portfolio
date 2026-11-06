<template>
  <section
    id="about"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800"
  >
    <div class="max-w-7xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          About
          <span class="text-primary-light dark:text-primary-dark">
            Me
          </span>
        </h2>

        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark mb-6"
        ></div>

        <p
          class="text-lg text-black dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Software Quality Assurance Specialist with 5+ years of experience
          in test automation, API testing, performance testing, and CI/CD
          practices. I specialize in building scalable automation solutions
          using Katalon Studio, Python, and modern testing tools to improve
          software quality and release reliability. By leveraging AI-assisted
          workflows, performance metrics, and automation-first strategies,
          I help engineering teams deliver faster, more reliable software.
        </p>
      </div>

      <!-- Expertise Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- QA -->
        <div class="glass-card expertise-card p-8 rounded-3xl">
          <div class="icon-wrapper mb-6">
            <i class="fas fa-shield-check"></i>
          </div>

          <h3 class="text-xl font-bold mb-3">
            Quality Assurance
          </h3>

          <p class="text-black dark:text-gray-300 leading-relaxed">
            Ensuring software quality through functional, regression,
            API, exploratory, and end-to-end testing. Focused on
            identifying risks early and maintaining high release confidence.
          </p>
        </div>

        <!-- Automation -->
        <div class="glass-card expertise-card p-8 rounded-3xl">
          <div class="icon-wrapper mb-6">
            <i class="fas fa-robot"></i>
          </div>

          <h3 class="text-xl font-bold mb-3">
            Automation &amp; CI/CD
          </h3>

          <p class="text-black dark:text-gray-300 leading-relaxed">
            Building scalable automated test solutions using Katalon Studio
            and Python while integrating testing into CI/CD pipelines for
            faster feedback and more reliable releases.
          </p>
        </div>

        <!-- Performance -->
        <div class="glass-card expertise-card p-8 rounded-3xl">
          <div class="icon-wrapper mb-6">
            <i class="fas fa-chart-line"></i>
          </div>

          <h3 class="text-xl font-bold mb-3">
            Performance Testing
          </h3>

          <p class="text-black dark:text-gray-300 leading-relaxed">
            Leveraging k6 and performance metrics to identify bottlenecks,
            validate scalability, and optimize application performance while
            utilizing AI-powered tools to accelerate testing workflows.
          </p>
        </div>

      </div>

      <!-- Approach Section -->
      <div
        class="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        <!-- Left Content -->
        <div>

          <h3 class="text-3xl font-bold mb-6">
            My
            <span class="text-primary-light dark:text-primary-dark">
              Quality Engineering Approach
            </span>
          </h3>

          <p class="text-black dark:text-gray-300 mb-8 leading-relaxed">
            Quality is more than finding defects. It is about building
            confidence in every release. I combine automation, API
            validation, performance testing, AI-assisted workflows,
            and collaborative problem-solving to ensure software remains
            reliable, scalable, and user-focused throughout the entire
            development lifecycle.
          </p>

          <div class="space-y-6">

            <div class="approach-item">
              <div class="approach-icon">
                <i class="fas fa-bolt"></i>
              </div>

              <div>
                <h4 class="font-semibold mb-1">
                  Automation &amp; Efficiency
                </h4>

                <p class="text-gray-600 dark:text-gray-400">
                  Leveraging automation, CI/CD pipelines, and AI-assisted
                  testing to accelerate delivery and improve testing coverage.
                </p>
              </div>
            </div>

            <div class="approach-item">
              <div class="approach-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>

              <div>
                <h4 class="font-semibold mb-1">
                  Performance &amp; Reliability
                </h4>

                <p class="text-gray-600 dark:text-gray-400">
                  Using k6 and performance analysis to identify bottlenecks,
                  validate scalability, and improve application stability.
                </p>
              </div>
            </div>

            <div class="approach-item">
              <div class="approach-icon">
                <i class="fas fa-users"></i>
              </div>

              <div>
                <h4 class="font-semibold mb-1">
                  Continuous Quality Mindset
                </h4>

                <p class="text-gray-600 dark:text-gray-400">
                  Collaborating closely with developers, product owners,
                  and stakeholders to embed quality throughout the SDLC.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Metrics -->
        <div>
          <div class="grid grid-cols-2 gap-5">

            <div class="metric-card">
              <h4>5+</h4>
              <p>Years Experience</p>
            </div>

            <div class="metric-card">
              <h4>500+</h4>
              <p>Automated Test Cases</p>
            </div>

            <div class="metric-card">
              <h4>40%</h4>
              <p>Faster Test Execution</p>
            </div>

            <div class="metric-card">
              <h4>CI/CD</h4>
              <p>Integration Ready</p>
            </div>

            <div class="metric-card col-span-2">
              <h4>Modern QA Stack</h4>
              <p>
                Python • k6 • Katalon Studio • TestRail • OKTA •
                Microsoft Entra ID • AI-Assisted Testing
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>

/* Expertise Cards */
.expertise-card {
  position: relative;
  overflow: hidden;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.expertise-card::before {
  content: '';

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 4px;

  background: linear-gradient(
    90deg,
    #6366f1,
    #8b5cf6,
    #ec4899
  );

  opacity: 0;
  transition: opacity 0.35s ease;
}

.expertise-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.12);
}

.expertise-card:hover::before {
  opacity: 1;
}

/* Icons */
.icon-wrapper {
  width: 64px;
  height: 64px;

  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color: white;
  font-size: 1.5rem;

  transition: transform 0.35s ease;
}

.expertise-card:hover .icon-wrapper {
  transform: rotate(8deg) scale(1.08);
}

/* Approach */
.approach-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.approach-icon {
  min-width: 42px;
  height: 42px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color: white;
}

/* Metrics */
.metric-card {
  padding: 1.5rem;

  border-radius: 1.25rem;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.dark .metric-card {
  background: rgba(31, 41, 55, 0.75);
}

.metric-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 20px 35px rgba(0, 0, 0, 0.12);
}

.metric-card h4 {
  font-size: 1.875rem;
  font-weight: 700;

  color: #6366f1;
  margin-bottom: 0.5rem;
}

.metric-card p {
  color: #6b7280;
}

.dark .metric-card p {
  color: #9ca3af;
}

</style>
