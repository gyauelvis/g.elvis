<script setup>
  import navBar from './components/NavBar.vue'
  import heroPage from './components/HeroPage.vue'
</script>

<template>
  <div class="app-container">
    <nav-bar></nav-bar>
    <hero-page></hero-page>
  </div>
</template>

<style scoped>

.app-container{
  background-image: url('gradient-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>