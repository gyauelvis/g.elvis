<script setup>
import profileImage from '../assets/img/gyauelvis.png'
</script>

<template>
  <div class="profile-card bento-card">
    <div class="profile-image-wrapper">
      <img :src="profileImage" alt="Elvis Gyau Boahen" class="profile-image" />
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  padding: 0;
  overflow: hidden;
  background: var(--card-bg);
  border-radius: 24px;
}

.profile-image-wrapper {
  width: 100%;
  height: 100%;
  min-height: 280px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
