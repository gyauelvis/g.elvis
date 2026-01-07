<script setup>
import { ref } from 'vue'
import BentoGrid from '../components/BentoGrid.vue'
import Loader from '../components/Loader.vue'

const isLoading = ref(true)

const handleLoaded = () => {
    isLoading.value = false
}
</script>

<template>
    <div class="home-page">
        <Loader v-if="isLoading" @loaded="handleLoaded" />
        <BentoGrid />
    </div>
</template>

<style scoped>
.home-page {
    min-height: 100vh;
}
</style>
