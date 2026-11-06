<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-4">
          My
          <span class="text-primary-light dark:text-primary-dark">
            Skills
          </span>
        </h2>

        <div
          class="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark mb-6"
        ></div>

        <p
          class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Specialized in automation testing, API validation, performance
          engineering, CI/CD integration, and enterprise identity management.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <!-- QA -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-vial"></i>
            </div>

            <div>
              <h3>QA & Testing</h3>
              <p class="skill-subtitle">
                Validation & Quality Practices
              </p>
            </div>
          </div>

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
        </div>

        <!-- Tools -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-tools"></i>
            </div>

            <div>
              <h3>QA Tooling</h3>
              <p class="skill-subtitle">
                Testing & Management Platforms
              </p>
            </div>
          </div>

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
        </div>

        <!-- Development -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-code"></i>
            </div>

            <div>
              <h3>Development</h3>
              <p class="skill-subtitle">
                Programming & Data Technologies
              </p>
            </div>
          </div>

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
        </div>

        <!-- Platforms -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-cloud"></i>
            </div>

            <div>
              <h3>Platforms</h3>
              <p class="skill-subtitle">
                Infrastructure & Identity Solutions
              </p>
            </div>
          </div>

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

/* Main Card */
.skill-card {
  position: relative;
  overflow: hidden;

  padding: 1.75rem;
  border-radius: 1.5rem;

  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px);

  border: 1px solid rgba(255,255,255,0.3);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.dark .skill-card {
  background: rgba(31,41,55,0.7);
  border-color: rgba(255,255,255,0.08);
}

/* Top Gradient Line */
.skill-card::before {
  content: "";

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 4px;

  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6,
      #ec4899
    );

  opacity: 0;

  transition: opacity .3s ease;
}

/* Glow Overlay */
.skill-card::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at top right,
      rgba(99,102,241,.10),
      transparent 60%
    );

  opacity: 0;

  transition: opacity .3s ease;

  pointer-events: none;
}

.skill-card:hover {
  transform: translateY(-10px);

  box-shadow:
    0 20px 40px rgba(0,0,0,.12);
}

.skill-card:hover::before,
.skill-card:hover::after {
  opacity: 1;
}

/* Header */
.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.skill-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

.skill-subtitle {
  font-size: .85rem;
  color: #6b7280;
}

.dark .skill-subtitle {
  color: #9ca3af;
}

/* Icon */
.icon-wrapper {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 1rem;

  border-radius: 1rem;

  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6
    );

  color: white;

  transition: transform .3s ease;
}

.skill-card:hover .icon-wrapper {
  transform: rotate(8deg) scale(1.08);
}

/* Skill Group */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
}

/* Common Badge */
.skill-badge {
  padding: .55rem .9rem;

  border-radius: 12px;

  font-size: .85rem;
  font-weight: 500;

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.skill-badge:hover {
  transform: translateY(-3px);

  box-shadow:
    0 8px 20px rgba(0,0,0,.12);
}

/* Primary Skills */
.primary-skill {
  background:
    linear-gradient(
      135deg,
      rgba(99,102,241,.15),
      rgba(139,92,246,.15)
    );

  border: 1px solid rgba(99,102,241,.25);

  color: #6366f1;
}

.dark .primary-skill {
  color: #a5b4fc;
}

/* Supporting Skills */
.secondary-skill {
  background: rgba(59,130,246,.08);

  border: 1px solid rgba(59,130,246,.12);

  color: rgb(37,99,235);
}

.dark .secondary-skill {
  color: rgb(147,197,253);
}

</style>
