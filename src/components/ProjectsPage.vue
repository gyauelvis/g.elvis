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
    <div class="project">
        <div class="projContainer">
            <div class="name-code">
                <h2>{{ projectName }}</h2>
                <a :href="linkToGithub">CODE</a>
            </div>
            <div class="cover-image">
                <img :src="projectImage" alt="">
            </div>
            <div class="projectDescription">
                <span>{{ projectDescription }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid #9D9B96;
    min-width: 20rem;
    .name-code {
        color: rgba(34, 34, 34, 0.90);
        font-family: var(--poppins);
        font-weight: 600;
        width: 100%;
        display: flex;
        line-height: normal;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #9D9B96;
        padding: 0 0.5rem;
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
    object-fit: cover;
}

.name-code a {
    border-left: 1px solid #9D9B96;
}

:is(h2, a) {
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