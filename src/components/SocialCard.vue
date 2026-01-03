<script setup>
import profileImage from '../assets/img/gelvis.jpg'
import aitkImage from '../assets/img/AITK.webp'
</script>

<template>
  <div class="social-card bento-card bento-card--dark">
    <div class="social-header">
      <img :src="aitkImage" alt="AITK" />
    </div>

    <div class="social-image">
      <img :src="profileImage" alt="Elvis" />
    </div>

    <div class="social-footer">
      <a href="https://aitk.arnsoninnovate.com/" target="_blank" class="social-link">
        Check Out AITK
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.social-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  background: var(--card-dark) !important;
}

img {
  width: 32px;
  object-fit: contain;
}

.social-header {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  opacity: 0.9;
  color: white;
}

.social-image {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
}

.social-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
  filter: grayscale(20%) contrast(1.1);
}

.social-footer {
  margin-top: auto;
  position: relative;
  z-index: 2;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-primary);
  text-decoration: underline;
  font-size: 13px;
  font-weight: 600;
}

.social-link svg {
  transition: transform 0.2s ease;
}

.social-link:hover svg {
  transform: translateX(4px);
}
</style>
