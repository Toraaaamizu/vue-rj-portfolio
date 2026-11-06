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

        <p class="text-lg text-black dark:text-gray-300 max-w-3xl mx-auto">
          Expertise across test automation, API validation, performance testing,
          CI/CD, enterprise identity management, and AI-assisted QA workflows.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        <!-- QA & Testing -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-vial"></i>
            </div>
            <h3>QA & Testing</h3>
          </div>

          <div class="skill-tags">
            <span class="skill-badge expert">Test Automation</span>
            <span class="skill-badge expert">API Testing</span>
            <span class="skill-badge expert">Regression Testing</span>
            <span class="skill-badge expert">End-to-End Testing</span>
            <span class="skill-badge advanced">Performance Testing</span>
            <span class="skill-badge advanced">Data Migration</span>
            <span class="skill-badge advanced">Root Cause Analysis</span>
          </div>
        </div>

        <!-- Tools -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Tools</h3>
          </div>

          <div class="skill-tags">
            <span class="skill-badge expert">Katalon Studio</span>
            <span class="skill-badge advanced">k6</span>
            <span class="skill-badge advanced">TestRail</span>
            <span class="skill-badge advanced">JIRA</span>
            <span class="skill-badge advanced">Zoho WorkDrive</span>
            <span class="skill-badge advanced">GitHub</span>
          </div>
        </div>

        <!-- Development -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-code"></i>
            </div>
            <h3>Development</h3>
          </div>

          <div class="skill-tags">
            <span class="skill-badge advanced">Python</span>
            <span class="skill-badge advanced">Java</span>
            <span class="skill-badge advanced">JavaScript</span>
            <span class="skill-badge advanced">SQL</span>
            <span class="skill-badge advanced">PostgreSQL</span>
            <span class="skill-badge advanced">REST APIs</span>
          </div>
        </div>

        <!-- Platforms -->
        <div class="skill-card">
          <div class="skill-header">
            <div class="icon-wrapper">
              <i class="fas fa-cloud"></i>
            </div>
            <h3>Platforms</h3>
          </div>

          <div class="skill-tags">
            <span class="skill-badge advanced">CI/CD</span>
            <span class="skill-badge advanced">AWS</span>
            <span class="skill-badge advanced">Azure</span>
            <span class="skill-badge advanced">OKTA</span>
            <span class="skill-badge advanced">Microsoft Entra ID</span>
            <span class="skill-badge advanced">LDAP</span>
            <span class="skill-badge advanced">
              AI-Assisted Testing
            </span>
          </div>
        </div>

      </div>

      <!-- Bottom Summary -->
      <div class="mt-16 flex flex-wrap justify-center gap-4">

        <div class="legend expert-pill">
          Expert
        </div>

        <div class="legend advanced-pill">
          Advanced
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

/* Card */
.skill-card {
  position: relative;
  padding: 1.75rem;
  border-radius: 1.5rem;

  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.3);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  overflow: hidden;
}

.dark .skill-card {
  background: rgba(31,41,55,0.65);
  border-color: rgba(255,255,255,0.08);
}

.skill-card::before {
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

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 20px 40px rgba(0,0,0,0.12);
}

.skill-card:hover::before {
  opacity: 1;
}

/* Header */
.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

/* Icon */
.icon-wrapper {
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;

  border-radius: 0.75rem;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );

  color: white;

  transition: transform 0.35s ease;
}

.skill-card:hover .icon-wrapper {
  transform: rotate(8deg) scale(1.1);
}

/* Skill Tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.skill-badge {
  padding: 0.45rem 0.85rem;
  border-radius: 999px;

  font-size: 0.875rem;
  font-weight: 500;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.skill-badge:hover {
  transform: scale(1.05);
}

/* Expert Badge */
.expert {
  background: rgba(34,197,94,0.12);
  color: rgb(22,101,52);
}

.dark .expert {
  background: rgba(34,197,94,0.2);
  color: rgb(74,222,128);
}

/* Advanced Badge */
.advanced {
  background: rgba(59,130,246,0.12);
  color: rgb(29,78,216);
}

.dark .advanced {
  background: rgba(59,130,246,0.2);
  color: rgb(96,165,250);
}

/* Legend */
.legend {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-weight: 600;
}

.expert-pill {
  background: rgba(34,197,94,0.12);
  color: rgb(22,101,52);
}

.advanced-pill {
  background: rgba(59,130,246,0.12);
  color: rgb(29,78,216);
}

.dark .expert-pill {
  background: rgba(34,197,94,0.2);
  color: rgb(74,222,128);
}

.dark .advanced-pill {
  background: rgba(59,130,246,0.2);
  color: rgb(96,165,250);
}

</style>
