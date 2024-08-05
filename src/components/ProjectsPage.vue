<script setup>
defineProps({
    projectName: {
        type: String,
        required: true,
    },
    projectLink: {
        type: String,
        required: true,
    },
    projectDescription: {
        type: String,
        required: true,
    },
    projectImage: {
        type: String,
        required: true,
    },
    linkToGithub: {
        type: String,
        required: true,
    }

})


</script>
<template>
    <div class="project" id="projects">
        <div class="projContainer">
            <div class="name-code">
                <h2>{{ projectName }}</h2>
                <a :href="linkToGithub">CODE</a>
            </div>
            <a :href="projectLink" class="cover-image">
                <img :src="projectImage" alt="">
            </a>
            <div class="projectDescription">
                <span>{{ projectDescription }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

.view-code{
    display: none;
    position: absolute;
}
.projContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid #9D9B96;
    width: 100%;
    min-width: 20rem;
    scroll-snap-align: center;
    
    .name-code {
        color: rgba(34, 34, 34, 0.90);
        font-family: var(--play-fair);
        font-weight: 600;
        width: 100%;
        display: flex;
        line-height: normal;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #9D9B96;
        padding: 0 0.5rem;

        a{
            color: rgba(34, 34, 34, 0.90);
            font-family: var(--play-fair);
        }
    }

    .projectDescription {
        color: #222;
        font-family: var(--poppins);
        font-style: normal;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.1rem;
        padding: 1rem;
        border-top: 1px solid #9D9B96;
    }

}

.cover-image img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
    transform: scale(1);
}
.cover-image{
    overflow: hidden;;
}
.cover-image img:hover {
    transform: scale(1.05);
}

.name-code a {
    border-left: 1px solid #9D9B96;
}

:is(h2, a):not(.cover-image){
    font-size: 1rem;
    text-transform: uppercase;
    height: 100%;
    padding: 1rem 0.5rem;
}


@media screen and (min-width: 540px) {
  .projContainer{
    width: 20rem;
    height: fit-content;
  }
}


</style>