<script setup>
import navBar from './components/NavBar.vue'
import heroPage from './components/HeroPage.vue'
import myStack from './components/MyStack.vue'
import { gsap } from "gsap";
document.addEventListener('mousemove', (e) => {
  let cursorDot = document.querySelector('.cursorDot');
  let cursor = document.querySelector('.cursor');
  cursorDot.style.top = `${e.pageY}px`;
  cursorDot.style.left = `${e.pageX}px`;
  gsap.to('.cursor', {
    ease: 'power3.out',
    duration: .5,
    delay: 0.2,
    left: `${e.pageX - 20}px`,
    top: `${e.pageY - 20}px`
  })
})



</script>

<template>
  <div class="app-container">
    <div>
      <div class="cursor"></div>
      <div class="cursorDot"></div>
      <nav-bar></nav-bar>
      <hero-page></hero-page>
      <my-stack></my-stack>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cursor {
  width: 50px;
  height: 50px;
  transition: all 0.05s ease-in-out;
  background-color: #ECE4B7;
  opacity: 70%;
}

.cursorDot {
  width: 12px;
  height: 12px;
  background-color: var(--black-text-100);
}

.cursor,
.cursorDot {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}
</style>