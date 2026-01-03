<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import SplitType from 'split-type'

onMounted(() => {
  const text = new SplitType('.hero-title', { types: 'chars' })

  gsap.from(text.chars, {
    y: -50,
    opacity: 0,
    rotationX: -90,
    stagger: 0.02,
    duration: 1,
    ease: 'back.out(1.7)',
    delay: 0.5 // Wait a bit for loader
  })
})
</script>

<template>
  <div class="hero-card bento-card">
    <div class="hero-header">
      <div class="status-indicator">
        <span class="status-dot"></span>
        <span>Available For Work</span>
      </div>
      <div class="location-badge">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none"
          stroke="#ffffff" stroke-width="1.5">
          <path
            d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z" />
          <path
            d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z" />
          <path d="M18 20C18 21.1046 15.3137 22 12 22C8.68629 22 6 21.1046 6 20" />
        </svg>
        <span>Kumasi, Ashanti Region, Ghana</span>
      </div>
    </div>

    <div class="hero-content">
      <h1 class="hero-title">
        Hello there! My name is
        Elvis and I code, design and teach.
      </h1>
    </div>
  </div>
</template>

<style scoped>
.hero-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  padding: 24px 28px;
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--accent-green);
}

.location-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-secondary);
}

.location-badge svg {
  opacity: 0.6;
}

.hero-content {
  margin-top: auto;
  padding-bottom: 8px;
}

.hero-title {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -1px;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 40px;
  }
}

@media (min-width: 900px) {
  .hero-title {
    font-size: 48px;
  }
}
</style>
