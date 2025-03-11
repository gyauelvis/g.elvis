<script setup>
import navBar from './components/NavBar.vue'
import heroPage from './components/HeroPage.vue'
import myStack from './components/MyStack.vue'
import { gsap } from "gsap";
import projectsTemplate from './components/ProjectsPage.vue'
import { onMounted } from 'vue';
import Currently from './components/Currently.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Footer from './components/Footer.vue';


let previousScrollTime = 0;
let previousScrollValue = 0;
let addValue = 10;
let longHorizWidth = 53;

let animatedProjectScroller = () => {
  if (window.innerWidth >= 1000) {
    let currentState = document.querySelector('.projects-container').scrollLeft;
    let currentTime = Date.now();
    let deltaTime = (currentTime - previousScrollTime);
    let deltaValue = currentState - previousScrollValue;
    let speed = (deltaValue / deltaTime);
    let animation = gsap.timeline();
    if (currentState > 50) {
      addValue += speed / 2.2;
      longHorizWidth -= speed / 2.2;
      animation
        .to('.circle', {
          duration: .05,
          width: addValue,
          borderRadius: '2rem',
          ease: 'linear'
        })
        .to('.longHoriz', {
          width: longHorizWidth,
          duration: .05,
        })
    } else if (currentState <= 50) {
      animation.to('.circle', {
        duration: .0,
        width: 10,
        borderRadius: '50%'
      })
        .to('.longHoriz', {
          duration: .0,
          width: 50,
        })
    }
    previousScrollValue = currentState;
    previousScrollTime = currentTime;
  }
}


onMounted(() => {
  const cursorDot = document.querySelector('.cursorDot');
  const cursor = document.querySelector('.cursor');

  document.addEventListener('scroll', () => {
    document.querySelector('.nav').style.backdropFilter = 'blur(5px)';
  })

  document.addEventListener('mousemove', (e) => {
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

  let hover = () => {
    cursorDot.style.display = 'none';
    cursor.style.display = 'none';
    document.body.style.cursor = "pointer"
  };

  let mouseLeave = () => {
    cursorDot.style.display = 'block';
    cursor.style.display = 'block';
     document.body.style.cursor = "none";
  };

  document.querySelectorAll('a').forEach((ele) => {
    ele.addEventListener('mouseenter', hover);
    ele.addEventListener('mouseleave', mouseLeave);
  });

})

</script>

<template>
  <div class="app-container">
    <div>
      <div class="cursor"></div>
      <div class="cursorDot"></div>
      <nav-bar></nav-bar>
      <hero-page></hero-page>
      <Currently />
      <Experience />
      <Project />
      <my-stack></my-stack>
      <Footer />

      <!-- <div class="wrapper">
        <div class="projects">
          <div class="heading">
            <h2>PROJECTS</h2>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <mask id="mask0_58_331" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_58_331)">
                  <path
                    d="M16.4 21L15 19.6L16.575 18L15 16.425L16.4 15L18 16.6L19.575 15L21 16.425L19.4 18L21 19.6L19.575 21L18 19.425L16.4 21ZM6 19C6.28333 19 6.52083 18.9042 6.7125 18.7125C6.90417 18.5208 7 18.2833 7 18C7 17.7167 6.90417 17.4792 6.7125 17.2875C6.52083 17.0958 6.28333 17 6 17C5.71667 17 5.47917 17.0958 5.2875 17.2875C5.09583 17.4792 5 17.7167 5 18C5 18.2833 5.09583 18.5208 5.2875 18.7125C5.47917 18.9042 5.71667 19 6 19ZM6 21C5.16667 21 4.45833 20.7083 3.875 20.125C3.29167 19.5417 3 18.8333 3 18C3 17.1667 3.29167 16.4583 3.875 15.875C4.45833 15.2917 5.16667 15 6 15C6.61667 15 7.17917 15.1708 7.6875 15.5125C8.19583 15.8542 8.56667 16.3167 8.8 16.9C9.45 16.7167 9.97917 16.3583 10.3875 15.825C10.7958 15.2917 11 14.6833 11 14V10C11 8.61667 11.4875 7.4375 12.4625 6.4625C13.4375 5.4875 14.6167 5 16 5H17.15L15.575 3.425L17 2L21 6L17 10L15.575 8.6L17.15 7H16C15.1667 7 14.4583 7.29167 13.875 7.875C13.2917 8.45833 13 9.16667 13 10V14C13 15.2167 12.6083 16.2875 11.825 17.2125C11.0417 18.1375 10.05 18.7083 8.85 18.925C8.65 19.5417 8.2875 20.0417 7.7625 20.425C7.2375 20.8083 6.65 21 6 21ZM4.4 9L3 7.6L4.575 6L3 4.425L4.4 3L6 4.6L7.575 3L9 4.425L7.4 6L9 7.6L7.575 9L6 7.425L4.4 9Z"
                    fill="#1C1B1F" />
                </g>
              </svg></span>
          </div>
          <div class="subheading">
            <span>
              Check out a few of the projects I have worked on with the skills I have learnt
            </span>
          </div>
          <div class="projects-container" @scroll='animatedProjectScroller'>
            <projects-template project-name="Dbex"
              project-description="Connect and Query your database with Dbex, A nextjs fullstack app"
              project-image="/projImg/dbexproject_screenshot_dark.webp" project-link="https://dbexproject.vercel.app/"
              link-to-github="https://github.com/jdboachie/dbex"></projects-template>

            <projects-template project-name="WordHaven"
              project-description="A website for the WordHaven international church built with HTML, CSS and JavaScript"
              project-image="/projImg/wordhaven.jpg" project-link="https://wordhaven-international-church.vercel.app/"
              link-to-github="https://github.com/WordHaven-Website/WordHaven"></projects-template>

            <projects-template project-name="Tonaton Clone"
              project-description="Built a tonaton estate clone with html, tailwindcss and javascript"
              project-image="/projImg/tonaton.jpg" project-link="https://tonaton-estate.vercel.app/"
              link-to-github="https://github.com/gyauelvis/tonaton-estate"></projects-template>

            <projects-template project-name="DevQuiz"
              project-description="Built a quiz app that ask questions on various programming languages"
              project-image="/projImg/devquiz.jpeg" project-link="https://devquiz-peach.vercel.app/"
              link-to-github="https://github.com/gyauelvis/devQuiz"></projects-template>

            <projects-template project-name="Dictionary"
              project-description="Built a dictionary app with html, css and Js" project-image="/projImg/dictionary.jpg"
              project-link="https://dictionarygelvis.vercel.app/"
              link-to-github="https://github.com/gyauelvis/dictionary"></projects-template>
          </div>
          <div class="scrollBtns">
            <div class="longHoriz"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div> -->
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
  width: 20px;
  height: 20px;
  transition: all 0.05s ease-in-out;
  background: linear-gradient(135deg, rgba(9, 18, 44, 0.08) 0%, rgba(9, 18, 44, 0.12) 100%);
  opacity: 70%;
  border: 1px solid rgba(37, 99, 235, 0.2);
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.05);
  backdrop-filter: blur(4px);
  position: relative;
  z-index: 999999 !important;
}


.cursorDot {
  width: 12px;
  height: 12px;
  background-color: #ff4646;
  position: relative;
  z-index: 999999!important;
}

.cursor,
.cursorDot {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
}

.heading h2 {
  color: #222;
  font-family: var(--play-fair);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.subheading {
  color: #222;
  font-family: var(--poppins);
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.1rem;
}

@media screen and (min-width: 768px) {
  .subheading {
    font-size: 1.2rem;
  }
}

.projects {
  position: relative;
  height: 30rem;
}

.projects-container {
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: row;
  overflow-x: scroll;
  gap: 1rem;
  padding: 2rem 0;
  scroll-snap-type: x mandatory;
}

.projects-container::-webkit-scrollbar {
  height: 0;
  width: 0;
  background-color: transparent;
}

.scrollBtns {
  position: absolute;
  top: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.2rem;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #222;
  background-color: rgba(34, 34, 34, 0.9);
}

.longHoriz {
  width: 50px;
  height: 10px;
  border-radius: 2rem;
  background-color: rgba(34, 34, 34, 0.9);
}
</style>