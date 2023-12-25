import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


let brandName = document.querySelector('.nav-bar span');
let sayHello = document.querySelector('.nav-bar a');

let hoverNavBar = () =>{
    document.querySelector('.cursorDot').style.opacity  = 0;
    document.querySelector('.cursor').style.backgroundColor = "#fff";
}

brandName.addEventListener('hover',hoverNavBar);
sayHello.addEventListener('hover',hoverNavBar);

