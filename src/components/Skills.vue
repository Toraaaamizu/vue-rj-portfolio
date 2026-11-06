
<template>
  <section
    id="skills"
    class="relative overflow-hidden bg-gray-50
           px-4 py-24 dark:bg-gray-950
           sm:px-6 lg:px-8"
  >
    <!-- Background Decorations -->
    <div
      class="pointer-events-none absolute -right-40 top-10
             h-96 w-96 rounded-full bg-primary-light/10 blur-3xl
             dark:bg-primary-dark/10"
    ></div>

    <div
      class="pointer-events-none absolute -left-40 bottom-10
             h-96 w-96 rounded-full bg-secondary-light/10 blur-3xl
             dark:bg-secondary-dark/10"
    ></div>

    <div class="relative mx-auto max-w-7xl">

      <!-- Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center">

        <span
          class="mb-5 inline-flex items-center gap-2 rounded-full
                 border border-primary-light/20 bg-primary-light/5
                 px-4 py-2 text-sm font-semibold
                 text-primary-light dark:text-primary-dark"
        >
          <i class="fas fa-layer-group"></i>
          Technical Expertise
        </span>

        <h2
          class="mb-6 text-4xl font-extrabold tracking-tight
                 text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
        >
          My
          <span class="text-primary-light dark:text-primary-dark">
            Skills
          </span>
        </h2>

        <p
          class="mx-auto max-w-2xl text-base leading-8
                 text-gray-600 dark:text-gray-400 sm:text-lg"
        >
          Specialized in automation testing, API validation,
          performance engineering, CI/CD integration, and
          enterprise identity management.
        </p>

        <!-- Highlights -->
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span class="highlight-tag">
            <i class="fas fa-vial"></i>
            Software Testing
          </span>

          <span class="highlight-tag">
            <i class="fas fa-robot"></i>
            Automation
          </span>

          <span class="highlight-tag">
            <i class="fas fa-code-branch"></i>
            CI/CD
          </span>

          <span class="highlight-tag">
            <i class="fas fa-cloud"></i>
            Cloud & Identity
          </span>
        </div>
      </div>

      <!-- Skills Overview -->
      <div class="mb-10 flex flex-wrap items-end justify-between gap-4">

        <div>
          <span class="section-eyebrow">
            TECHNOLOGY STACK
          </span>

          <h3 class="mt-2 text-2xl font-bold sm:text-3xl">
            Core Competencies
          </h3>

          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Technologies and practices I work with.
          </p>
        </div>

        <div
          class="flex items-center gap-2 rounded-xl
                 border border-gray-200 bg-white px-4 py-2.5
                 text-sm text-gray-600 dark:border-gray-800
                 dark:bg-gray-900 dark:text-gray-300"
        >
          <i class="fas fa-code text-primary-light dark:text-primary-dark"></i>
          4 Skill Categories
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <!-- QA & Testing -->
        <article class="skill-card group">

          <div class="skill-top-line"></div>

          <div class="flex items-start justify-between">
            <div class="skill-icon">
              <i class="fas fa-vial"></i>
            </div>

            <span class="category-number">01</span>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 text-xl font-bold">
              QA &amp; Testing
            </h3>

            <p class="skill-subtitle">
              Validation &amp; Quality Practices
            </p>
          </div>

          <div class="skill-divider"></div>

          <div class="skill-tags">

            <span class="skill-badge primary-skill">
              Test Automation
            </span>

            <span class="skill-badge primary-skill">
              API Testing
            </span>

            <span class="skill-badge secondary-skill">
              Regression Testing
            </span>

            <span class="skill-badge secondary-skill">
              End-to-End Testing
            </span>

            <span class="skill-badge primary-skill">
              Performance Testing
            </span>

            <span class="skill-badge secondary-skill">
              Data Migration
            </span>

            <span class="skill-badge secondary-skill">
              Root Cause Analysis
            </span>

          </div>

          <div class="skill-card-footer">
            <i class="fas fa-shield-alt"></i>
            Software Quality
          </div>
        </article>

        <!-- QA Tooling -->
        <article class="skill-card group">

          <div class="skill-top-line"></div>

          <div class="flex items-start justify-between">
            <div class="skill-icon">
              <i class="fas fa-tools"></i>
            </div>

            <span class="category-number">02</span>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 text-xl font-bold">
              QA Tooling
            </h3>

            <p class="skill-subtitle">
              Testing &amp; Management Platforms
            </p>
          </div>

          <div class="skill-divider"></div>

          <div class="skill-tags">

            <span class="skill-badge primary-skill">
              Katalon Studio
            </span>

            <span class="skill-badge primary-skill">
              k6
            </span>

            <span class="skill-badge secondary-skill">
              TestRail
            </span>

            <span class="skill-badge secondary-skill">
              JIRA
            </span>

            <span class="skill-badge secondary-skill">
              Zoho WorkDrive
            </span>

            <span class="skill-badge secondary-skill">
              GitHub
            </span>

          </div>

          <div class="skill-card-footer">
            <i class="fas fa-toolbox"></i>
            Testing Ecosystem
          </div>
        </article>

        <!-- Development -->
        <article class="skill-card group">

          <div class="skill-top-line"></div>

          <div class="flex items-start justify-between">
            <div class="skill-icon">
              <i class="fas fa-code"></i>
            </div>

            <span class="category-number">03</span>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 text-xl font-bold">
              Development
            </h3>

            <p class="skill-subtitle">
              Programming &amp; Data Technologies
            </p>
          </div>

          <div class="skill-divider"></div>

          <div class="skill-tags">

            <span class="skill-badge primary-skill">
              Python
            </span>

            <span class="skill-badge secondary-skill">
              Java
            </span>

            <span class="skill-badge secondary-skill">
              JavaScript
            </span>

            <span class="skill-badge secondary-skill">
              SQL
            </span>

            <span class="skill-badge secondary-skill">
              PostgreSQL
            </span>

            <span class="skill-badge secondary-skill">
              REST APIs
            </span>

          </div>

          <div class="skill-card-footer">
            <i class="fas fa-terminal"></i>
            Programming &amp; Data
          </div>
        </article>

        <!-- Platforms -->
        <article class="skill-card group">

          <div class="skill-top-line"></div>

          <div class="flex items-start justify-between">
            <div class="skill-icon">
              <i class="fas fa-cloud"></i>
            </div>

            <span class="category-number">04</span>
          </div>

          <div class="mb-6">
            <h3 class="mb-2 text-xl font-bold">
              Platforms
            </h3>

            <p class="skill-subtitle">
              Infrastructure &amp; Identity Solutions
            </p>
          </div>

          <div class="skill-divider"></div>

          <div class="skill-tags">

            <span class="skill-badge primary-skill">
              CI/CD
            </span>

            <span class="skill-badge secondary-skill">
              AWS
            </span>

            <span class="skill-badge secondary-skill">
              Azure
            </span>

            <span class="skill-badge secondary-skill">
              OKTA
            </span>

            <span class="skill-badge secondary-skill">
              Microsoft Entra ID
            </span>

            <span class="skill-badge secondary-skill">
              LDAP
            </span>

            <span class="skill-badge primary-skill">
              AI-Assisted Testing
            </span>

          </div>

          <div class="skill-card-footer">
            <i class="fas fa-server"></i>
            Enterprise Technology
          </div>
        </article>

      </div>

      <!-- Bottom Technology Summary -->
      <div
        class="relative mt-16 overflow-hidden rounded-3xl
               border border-gray-200 bg-white p-8
               shadow-sm dark:border-gray-800
               dark:bg-gray-900 sm:p-10"
      >

        <div
          class="pointer-events-none absolute -right-20 -top-20
                 h-64 w-64 rounded-full bg-primary-light/10 blur-3xl
                 dark:bg-primary-dark/10"
        ></div>

        <div
          class="relative flex flex-col items-start
                 justify-between gap-8 lg:flex-row lg:items-center"
        >

          <div class="max-w-xl">
            <span class="section-eyebrow">
              MY ENGINEERING MINDSET
            </span>

            <h3 class="mb-3 mt-2 text-2xl font-bold sm:text-3xl">
              Quality through
              <span class="text-primary-light dark:text-primary-dark">
                continuous improvement.
              </span>
            </h3>

            <p class="leading-7 text-gray-600 dark:text-gray-400">
              Combining automation, technical problem-solving,
              performance analysis, and modern engineering practices
              to help teams deliver reliable software.
            </p>
          </div>

          <div
            class="flex h-20 w-20 shrink-0 items-center
                   justify-center rounded-2xl
                   bg-primary-light/10 text-4xl
                   text-primary-light dark:bg-primary-dark/10
                   dark:text-primary-dark"
          >
            <i class="fas fa-brain"></i>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>

/* Section Labels */
.section-eyebrow {
  display: inline-block;
  color: #6366f1;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
}

.dark .section-eyebrow {
  color: #a5b4fc;
}

/* Highlight Tags */
.highlight-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.6rem 1rem;

  border: 1px solid #e5e7eb;
  border-radius: 9999px;

  background: white;
  color: #4b5563;

  font-size: 0.8rem;
  font-weight: 600;

  transition: all 0.3s ease;
}

.dark .highlight-tag {
  background: #111827;
  border-color: #374151;
  color: #d1d5db;
}

.highlight-tag i {
  color: #6366f1;
}

.highlight-tag:hover {
  transform: translateY(-3px);
  border-color: #6366f1;
}

/* Main Skill Card */
.skill-card {
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  padding: 1.75rem;
  border-radius: 1.5rem;

  background: white;
  border: 1px solid #e5e7eb;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.dark .skill-card {
  background: #111827;
  border-color: #374151;
}

.skill-card:hover {
  transform: translateY(-8px);
  border-color: #818cf8;

  box-shadow:
    0 20px 45px rgba(99, 102, 241, 0.12);
}

/* Top Gradient */
.skill-top-line {
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
  transition: opacity 0.3s ease;
}

.skill-card:hover .skill-top-line {
  opacity: 1;
}

/* Skill Icon */
.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;

  border-radius: 17px;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color: white;
  font-size: 1.4rem;

  transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
  transform: rotate(7deg) scale(1.08);
}

/* Category Number */
.category-number {
  font-size: 0.85rem;
  font-weight: 800;
  color: #9ca3af;
  letter-spacing: 0.1em;
}

/* Subtitle */
.skill-subtitle {
  font-size: 0.85rem;
  color: #6b7280;
}

.dark .skill-subtitle {
  color: #9ca3af;
}

/* Divider */
.skill-divider {
  height: 1px;
  margin-bottom: 1.5rem;
  background: #e5e7eb;
}

.dark .skill-divider {
  background: #374151;
}

/* Skill Tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.65rem;

  flex-grow: 1;
}

.skill-badge {
  display: inline-flex;
  align-items: center;

  padding: 0.55rem 0.8rem;

  border-radius: 9px;

  font-size: 0.78rem;
  font-weight: 600;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.skill-badge:hover {
  transform: translateY(-3px);

  box-shadow:
    0 8px 18px rgba(0, 0, 0, 0.08);
}

/* Primary Skills */
.primary-skill {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.14),
    rgba(139, 92, 246, 0.14)
  );

  border: 1px solid rgba(99, 102, 241, 0.25);
  color: #6366f1;
}

.dark .primary-skill {
  color: #a5b4fc;
}

/* Supporting Skills */
.secondary-skill {
  background: rgba(59, 130, 246, 0.07);

  border: 1px solid rgba(59, 130, 246, 0.13);
  color: #2563eb;
}

.dark .secondary-skill {
  color: #93c5fd;
}

/* Card Footer */
.skill-card-footer {
  display: flex;
  align-items: center;
  gap: 0.6rem;

  margin-top: 1.75rem;
  padding-top: 1.25rem;

  border-top: 1px solid #e5e7eb;

  font-size: 0.75rem;
  font-weight: 700;
  color: #6b7280;
}

.dark .skill-card-footer {
  border-color: #374151;
  color: #9ca3af;
}

.skill-card-footer i {
  color: #6366f1;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .skill-card,
  .skill-icon,
  .skill-badge,
  .highlight-tag,
  .skill-top-line {
    transition: none !important;
  }

  .skill-card:hover,
  .skill-icon:hover,
  .skill-badge:hover,
  .highlight-tag:hover {
    transform: none;
  }
}

</style>
