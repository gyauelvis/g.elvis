<template>
  <div class="experience-card bento-card">
    <span class="card-label">Currently</span>

    <div class="experience-list">
      <div class="experience-item" v-for="job in experiences" :key="job.company">
        <div class="experience-info">
          <div class="experience-logo" :style="{ background: job.bgColor }">
            <img :src="job.logo" :alt="job.company" class="company-logo-img" />
          </div>
          <div class="experience-details">
            <h4>
              <a v-if="job.url" :href="job.url" target="_blank" rel="noopener" class="company-link">{{ job.company }}</a>
              <template v-else>{{ job.company }}</template>
            </h4>
            <p>{{ job.role }}</p>
          </div>
        </div>
        <span class="experience-date">{{ job.period }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

// Import logos
import arnsonLogo from '../assets/img/arnson-innovate.png'
import kwekuLogo from '../assets/img/kweku-tech.png'
import flyteLogo from '../assets/img/flyte.svg'

const experiences = [
  {
    company: 'Arnson Innovate',
    role: 'STEM Project Lead',
    period: 'Oct 2022 - Present',
    url: 'https://arnsoninnovate.com',
    bgColor: '#ffffff', // Use white background for logos
    logo: arnsonLogo
  },
  {
    company: 'Kweku Tech',
    role: 'Community Manager',
    period: 'Oct 2025 - Present', // Note: Date seems future, keeping as per user input
    url: 'https://kweku.tech',
    bgColor: '#ffffff',
    logo: kwekuLogo
  },
  {
    company: 'Building Flyte',
    role: 'Founder',
    period: 'April 2026 - Present',
    url: 'https://flyteblocks.com',
    bgColor: '#ffffff',
    logo: flyteLogo
  }
]
</script>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  min-height: 380px;
}

.card-label {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 100px;
  background: var(--card-label-bg);
  width: fit-content;
}

.experience-list {
  margin-top: auto;
  display: flex;
  flex-direction: column;
}

.experience-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-bottom: 1px solid var(--border-color);
}

.experience-item:first-child {
  padding-top: 0;
}

.experience-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.experience-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.experience-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 8px;
  /* Add padding for logos */
}

.company-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
}

.experience-details h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--text-primary);
}

.company-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.company-link:hover {
  color: var(--accent-color, #FF6B00);
  text-decoration: underline;
}

.experience-details p {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.experience-date {
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
}
</style>
