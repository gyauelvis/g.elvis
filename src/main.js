import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
let cursor = document.querySelector(".cursor");
let cursorDot = document.querySelector(".cursorDot");

let hover = () => {
  cursorDot.style.opacity = 0;
  cursor.style.backgroundColor = "#FFC971";
  cursor.style.width = "90px";
  cursor.style.height = "90px";
};
let mouseLeave = () => {
  cursorDot.style.opacity = 1;
  cursor.style.backgroundColor = "#ECE4B7";
  cursor.style.width = "50px";
  cursor.style.height = "50px";
};

document.querySelectorAll("a").forEach((ele) => {
  ele.addEventListener("mouseenter", hover);
});

document.querySelectorAll("a").forEach((ele) => {
  ele.addEventListener("mouseleave", mouseLeave);
});

const username = 'gyauelvis';
const response = await fetch(
    `https://dev.to/api/articles?username=${username}`
);
const blogs = await response.json();

// document.querySelectorAll('.cover-image').forEach(ele=>{
//   ele.addEventListener('click',(e)=>{
//     e.preventDefault();
//   })
// })
