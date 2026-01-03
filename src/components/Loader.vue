<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const progress = ref(0)
const counter = ref(0)

onMounted(() => {
    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to('.loader-container', {
                yPercent: -100,
                duration: 1,
                ease: 'power4.inOut',
                onComplete: () => emit('loaded')
            })
        }
    })

    tl.to(progress, {
        value: 100,
        duration: 3.5,
        ease: 'power3.inOut',
        onUpdate: () => {
            counter.value = Math.floor(progress.value)
        }
    })
})
</script>

<template>
    <div class="loader-container">
        <div class="loader-content">
            <svg class="progress-ring" width="250" height="250" viewBox="0 0 250 250">
                <circle class="progress-ring__circle" stroke="white" stroke-width="1" fill="transparent" r="115"
                    cx="125" cy="125" :style="{ strokeDashoffset: 722 - (722 * progress) / 100 }" />
            </svg>
            <div class="counter">{{ counter }}</div>
        </div>
    </div>
</template>

<style scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.loader-content {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress-ring__circle {
    stroke-dasharray: 722;
    /* 2 * PI * R (115) ≈ 722.5 */
    stroke-dashoffset: 722;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 0.1s linear;
    opacity: 0.9;
}

.counter {
    position: absolute;
    font-family: var(--font-playfair), serif;
    /* Using Playfair Display as per style guide potentially, or Fallback to serif */
    font-size: 80px;
    font-weight: 300;
    letter-spacing: -2px;
}
</style>