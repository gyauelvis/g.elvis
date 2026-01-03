<script setup>
import ProfileCard from './ProfileCard.vue'
import HeroCard from './HeroCard.vue'
import AboutCard from './AboutCard.vue'
import ExperienceCard from './ExperienceCard.vue'
import ToolsCard from './ToolsCard.vue'
import ContactCard from './ContactCard.vue'
import SocialCard from './SocialCard.vue'
</script>

<template>
  <div class="bento-container">
    <div class="bento-grid">
      <!-- Row 1: Profile + Hero -->
      <ProfileCard class="profile-card" />
      <HeroCard class="hero-card" />

      <!-- Row 2: About + Experience -->
      <ExperienceCard class="experience-card" />
      <AboutCard class="about-card" />


      <!-- Row 3: Tools + Contact + Social -->
      <ToolsCard class="tools-card" />
      <ContactCard class="contact-card" />
      <SocialCard class="social-card" />
    </div>
  </div>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet: 2 columns */
@media (min-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr 1.6fr;
    grid-template-rows: auto auto auto;
  }

  .profile-card {
    grid-column: 1;
    grid-row: 1;
  }

  .hero-card {
    grid-column: 2;
    grid-row: 1;
  }

  .about-card {
    grid-column: 1;
    grid-row: 2;
  }

  .experience-card {
    grid-column: 2;
    grid-row: 2;
  }

  .tools-card {
    grid-column: 1;
    grid-row: 3;
  }

  .contact-card {
    grid-column: 2;
    grid-row: 3;
  }

  .social-card {
    display: none;
  }
}

/* Desktop: 4 columns for equal width About/Experience */
@media (min-width: 900px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto auto;
    gap: 16px;
  }

  .profile-card {
    grid-column: span 1;
    grid-row: 1;
    height: 320px;
  }

  .hero-card {
    grid-column: span 3;
    grid-row: 1;
  }

  /* Row 2: Equal width sharing */
  .about-card {
    grid-column: span 2;
    grid-row: 2;
  }

  .experience-card {
    grid-column: span 2;
    grid-row: 2;
  }

  /* Row 3 */
  .tools-card {
    grid-column: span 1;
    grid-row: 3;
  }

  .contact-card {
    grid-column: span 2;
    grid-row: 3;
  }

  .social-card {
    display: block;
    grid-column: span 1;
    grid-row: 3;
  }
}
</style>
