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
                        <span id="elvis">Elvis</span>
                    </div>
                    <div>
                        <span id="gyau">gyau</span>
                        <span id="boahen">boahen</span>
                    </div>
                </div>
                <div class="description">
                    <div>
                        <p>I'm a <strong class="highlight-text highlight-primary underline">technically creative problem
                                solver ⚡</strong>, passionate about
                            <strong class="highlight-text highlight-secondary">building interactive experiences</strong>
                            and <strong class="highlight-text highlight-secondary">empowering developer
                                communities</strong>. As a <a href="https://githubcampus.expert/gyauelvis/"
                                class="gce">GitHub Campus
                                Expert</a> 🚀,
                            I thrive on <strong class="highlight-text highlight-success">sharing knowledge</strong> and
                            <strong class="highlight-text highlight-success">fostering collaboration</strong>.
                            <span>From crafting <strong class="highlight-text highlight-primary underline">sleek web
                                    interfaces</strong> 🎨 to driving <strong
                                    class="highlight-text highlight-secondary">open-source
                                    contributions</strong> 🛠️,
                                I'm always looking for ways to make <strong
                                    class="highlight-text highlight-success">tech more accessible and impactful</strong>
                                🌍.</span>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
.gce {
    color: blue;
    text-decoration: underline;
    display: inline;
    font-size: large;
}

.wrapper {
    overflow-x: hidden !important;
    min-height: calc(100dvh - 4rem);
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

.highlight-text {
    position: relative;
    display: inline;
    transition: all 0.3s ease;
}

.highlight-text::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -1px;
    right: -1px;
    height: 0.4em;
    z-index: -1;
    transition: all 0.3s ease;
    transform-origin: bottom;
}

.highlight-primary::before {
    background: linear-gradient(100deg, rgba(255, 214, 0, 0.25), rgba(255, 198, 0, 0.4));
}

.highlight-secondary::before {
    background: linear-gradient(100deg, rgba(99, 102, 241, 0.25), rgba(99, 102, 241, 0.4));
}

.highlight-success::before {
    background: linear-gradient(100deg, rgba(52, 211, 153, 0.25), rgba(52, 211, 153, 0.4));
}

.highlight-text:hover::before {
    height: 100%;
    transform: scaleY(1.05);
}


.highlight-text:hover {
    transform: translateY(-1px);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.underline {
    text-decoration: none !important;
    font-weight: 600;
}

.highlight-text strong {
    font-weight: 600;
    position: relative;
    z-index: 1;
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