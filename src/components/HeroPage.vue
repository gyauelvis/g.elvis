<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from 'vue';

let splitValue = (id) => {
    let array = [];
    let element = document.getElementById(`${id}`);
    for (let i = 0; i < element.textContent.length; i++) {
        array[i] = element.textContent[i];
    }
    element.textContent = '';
    for (let i = 0; i < array.length; i++) {
        let span = document.createElement("span");
        span.classList.add('char');
        span.textContent = array[i];
        element.appendChild(span)
    }

}

onMounted(() => {
    splitValue('im');
    splitValue('elvis');
    splitValue('gyau');
    splitValue('boahen');
    let animation = gsap.timeline();
    animation
        .to('.char',
            {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: .1,
                ease: 'back.inOut(2.7)'
            })
        .to('.description div', {
            y: 0,
            duration: .2,
            delay: 0.2,
        }).fromTo('#myImage', {
            duration: .5,
            opacity: 0
        }, {
            opacity: 1,
            delay: 0.3,
            ease: 'back.out'
        })

})
</script>
<template>
    <div class="wrapper">
        <div class="brand-name">
            <div>
                <div class="name">
                    <div>
                        <span id="im">I'm</span>
                        <!-- <img src="/src/assets/img/gelvis.jpg" alt="" title="yep, that me" id="myImage"> -->
                        <span id="elvis">Elvis</span>
                    </div>
                    <div>
                        <span id="gyau">gyau</span>
                        <span id="boahen">boahen</span>
                    </div>
                </div>
                <div class="description">
                    <div>
                        <p>I’m a <strong class="underline">technically creative problem solver ⚡</strong>, passionate
                            about
                            <strong>building interactive experiences</strong> and <strong>empowering developer
                                communities</strong>. As a <strong class="underline">GitHub Campus
                                Expert</strong> 🚀,
                            I thrive on <strong>sharing knowledge</strong> and <strong>fostering collaboration</strong>.
                            <span class="desktop-only">From crafting <strong class="underline">sleek web
                                    interfaces</strong> 🎨 to driving <strong>open-source
                                    contributions</strong> 🛠️,
                                I’m always looking for ways to make <strong>tech more accessible and impactful</strong>
                                🌍.</span>
                        </p>

                    </div>
                </div>
                <!-- <div class="call-to-action">
                    <a href="#" class="resume">
                        <span>My Resume</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                    <a href="#projects" class="proj">
                        <span>Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13 17L18 12L13 7" stroke="#222222" stroke-opacity="0.9" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 17L11 12L6 7" stroke="#222222" stroke-opacity="0.9" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>

                </div> -->
            </div>
        </div>
        <!-- <div class="s-media">
            <div>
                <a href="https://github.com/gyauelvis">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9.50389 18.9109C9.50389 18.9109 8 18.9109 6.5 16.9117M14.0588 22V17.6759C14.0588 17.3125 13.9506 16.9966 13.7762 16.7112C13.6566 16.5155 13.7385 16.2377 13.9547 16.1763C15.7447 15.6681 17 14.851 17 12.1406C17 11.4359 16.7764 10.7734 16.3834 10.1968C16.1879 9.90984 16.1928 9.9364 16.2746 9.59719C16.4183 9.00067 16.4298 8.37225 16.2692 7.78605C16.2164 7.59335 16.1032 7.48096 15.8983 7.50266C15.6326 7.53081 15.1725 7.65663 14.49 8.09692C14.2219 8.26992 14.0878 8.35642 13.9697 8.37577C13.8516 8.39512 13.6938 8.35459 13.378 8.27353C12.9463 8.16268 12.5014 8.10318 12 8.10318C11.4986 8.10318 11.0537 8.16268 10.622 8.27353C10.3062 8.35459 10.1484 8.39512 10.0303 8.37577C9.9122 8.35642 9.77813 8.26992 9.50999 8.09692C8.82753 7.65663 8.3674 7.53081 8.10166 7.50266C7.8968 7.48096 7.78361 7.59335 7.73081 7.78605C7.57017 8.37225 7.58167 9.00069 7.72543 9.5972C7.80718 9.93642 7.81213 9.90984 7.61654 10.1968C7.22356 10.7734 7 11.4359 7 12.1406C7 14.851 8.25526 15.6681 10.0453 16.1763C10.2615 16.2377 10.3434 16.5155 10.2238 16.7112C10.0494 16.9966 9.94118 17.3125 9.94118 17.6759V22"
                            stroke="#EEEEEE" stroke-width="1.5" />
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#EEEEEE" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="https://x.com/gyauboahen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M7 17L11.1935 12.8065M11.1935 12.8065L7 7H9.77778L12.8065 11.1935M11.1935 12.8065L14.2222 17H17L12.8065 11.1935M17 7L12.8065 11.1935"
                            stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/gyauboahenelvis">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 10V17" stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                            stroke="#EEEEEE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.00801 7H6.99902" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="#EEEEEE" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                </a>
                <a href="https://dev.to/gyauelvis/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#EEEEEE" viewBox="0 0 256 256">
                        <path
                            d="M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Zm0,128H24V72H232V184ZM128,104v16h8a8,8,0,0,1,0,16h-8v16h16a8,8,0,0,1,0,16H120a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16Zm87.7-5.83-18,64a8,8,0,0,1-15.4,0l-18-64a8,8,0,0,1,15.4-4.34L190,130.45l10.3-36.62a8,8,0,1,1,15.4,4.34ZM64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32V120A32,32,0,0,0,64,88Zm16,48a16,16,0,0,1-16,16V104a16,16,0,0,1,16,16Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div> -->

    </div>
</template>
<style scoped>
.wrapper {
    overflow-x: hidden !important;
    min-height: calc(100vh - 4rem);
}

.desktop-only {
    display: none;
}

.s-media {
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.s-media a:hover svg {
    padding: 0;
    transition: all 0.5s ease-in-out;
    scale: 1.05;
    cursor: pointer;
}

.name div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
}

.name div:has(#gyau) {
    flex-direction: column;
}

.name div:has(#im) {
    gap: 0.5rem;
}

.brand-name div>span {
    font-family: var(--play-fair);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    line-height: normal;
    color: var(--black-text-90);
    text-align: right;
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0% 100%);
    white-space: nowrap;
}

.description {
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0% 100%);
}

.description div {
    font-family: var(--space-mono);
    font-size: small;
    padding: 1rem 0.5rem;
    font-weight: 400;
    transition: transform 200ms ease-in-out;
    transform: translateY(300px);
    color: var(--gray);
}

.s-media:before,
.s-media::after {
    content: '';
    width: 1px;
    height: 83px;
    background: #9D9B96;
}

.s-media div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.s-media div a {
    padding: 0.5rem 0;
}

div :has(a)>a {
    font-family: var(--play-fair);
    color: var(--black-text-90);
    font-weight: 700;
    font-size: 1rem;
}

div:has(#elvis)>img {
    display: none;
}

.call-to-action {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 10;
}

.call-to-action {
    font-family: var(--play-fair);
    color: var(--black-text-90);
}

.call-to-action a:hover {
    cursor: pointer;
}

.proj {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-text-90);
}

.proj svg {
    animation: oscillate 1000ms linear infinite;
}

.underline {
    text-decoration: underline;
}

@keyframes oscillate {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(3px);
    }

}

.resume svg {
    width: 1rem;
}

.resume {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
}

.resume {
    border: 1px solid #9D9B96;
    background: rgba(217, 217, 217, 0.00);
    padding: 0.4rem;
    color: var(--black-text-90);
}

@media screen and (min-width: 550px) {
    .wrapper {
        max-width: 650px;
    }

    .brand-name div>span {
        font-size: 6rem;
    }

    .description div {
        font-size: 1.2rem;
        color: var(--gray);
        line-height: 1.8rem;
    }

    div :has(a)>a {
        font-size: 1.8rem;
    }

    .proj svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    .s-media div a svg {
        width: 2.5rem;
        height: 2.5rem;
    }
}

@media screen and (min-width: 1024px) {

    .desktop-only {
        display: inline;
    }

    .wrapper {
        max-width: 1000px;
        padding: 0 1.8rem 00% 1.8rem;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .brand-name div>span {
        text-align: left;
    }

    .description div {
        text-align: left;
        width: 70%;
    }

    .name {
        display: flex;
        flex-direction: column;
    }

    .name div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;
    }

    .name div:has(#gyau) {
        flex-direction: row;
    }

    .call-to-action {
        justify-content: flex-start;
    }

    div:has(#elvis)>img {
        display: block;
        width: 10rem;
        border-radius: 15px;
    }

    div :has(a)>a {
        font-size: 1.5rem;
    }
}
</style>