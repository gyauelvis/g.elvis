import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
let cursor = document.querySelector('.cursor')
let cursorDot = document.querySelector('.cursorDot')

let hover = () => {
  cursorDot.style.opacity = 0
  cursor.style.backgroundColor = '#fff'
  cursor.style.width = '80px'
  cursor.style.height = '80px'
}
let mouseLeave = () => {
  cursorDot.style.opacity = 1
  cursor.style.backgroundColor = '#ECE4B7'
  cursor.style.width = '50px'
  cursor.style.height = '50px'
}

document.querySelectorAll('.nav-bar a').forEach((ele) => {
  ele.addEventListener('mouseenter', hover)
})

document.querySelectorAll('.nav-bar a').forEach((ele) => {
  ele.addEventListener('mouseleave', mouseLeave)
})
document.querySelectorAll('.s-media a').forEach((ele) => {
  ele.addEventListener('mouseenter', hover)
  ele.style.cursor = 'pointer'
})
document.querySelectorAll('.s-media a').forEach((ele) => {
  ele.addEventListener('mouseleave', mouseLeave)
})

document.querySelectorAll('.call-to-action a').forEach((ele) => {
  ele.addEventListener('mouseenter', hover)
})
document.querySelectorAll('.call-to-action a').forEach((ele) => {
  ele.addEventListener('mouseleave', mouseLeave)
})


