<script setup>
  import navBar from './components/NavBar.vue'
  import heroPage from './components/HeroPage.vue'
  import myStack from './components/MyStack.vue';
  import { gsap } from "gsap";
  document.addEventListener('mousemove',(e)=>{
    let cursorDot  = document.querySelector('.cursorDot');
    let cursor = document.querySelector('.cursor');
    cursorDot.style.top = `${e.pageY}px`;
    cursorDot.style.left = `${e.pageX}px`;
    // cursor.style.top = `${e.pageY + -20}px`;
    // cursor.style.left = `${e.pageX + -20}px`;
    gsap.to('.cursor',{
    ease:'back.inOut(1.7)',
    duration:.5,
    delay:0.2,
    x: `${e.pageX + -20}px`,
    y: `${e.pageY + -20}px`
  })
    console.log(typeof(e.pageX))
  })

  
</script>

<template>
  <div class="app-container">
    <div class="cursor"></div>
    <div class="cursorDot"></div>
    <nav-bar></nav-bar>
    <hero-page></hero-page>
    <my-stack></my-stack>
  </div>
</template>

<style scoped>

.app-container{
  background-image: url('gradient-bg.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cursor{
  width: 50px;
  height: 50px;
  border: 1px solid var(--black-text-100);
}
.cursorDot{
  width: 10px;
  height: 10px;
  background-color:var(--black-text-100);
}
.cursor,.cursorDot{
  position: absolute;
border-radius: 50%;
}
</style>