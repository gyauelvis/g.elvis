<template>
    <div class="blog-container">
        <div v-for="(blog, index) in blogs" :key="index" class="project">
            <div class="projContainer">
                <div class="name-code">
                    <h2>{{ blog.title.substring(0, 55) }}</h2>
                    <!-- <a :href="blog.url">Read</a> -->
                </div>
                <a href="#" class="cover-image">
                    <img :src="blog.cover_image" alt="">
                </a>
                <div class="projectDescription">
                    <span>{{ blog.description }}...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const username = 'gyauelvis';
const response = await fetch(
    `https://dev.to/api/articles?username=${username}`
);
const blogs = await response.json();
</script>
<style scoped>
.blog-container {
    width: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    overflow-x: scroll;
    gap: 1rem;
    padding: 2rem 0;
    scroll-snap-type: x mandatory;

}

.blog-container::-webkit-scrollbar {
    height: 0;
    width: 0;
    background-color: transparent;
}

.name-code {
    white-space: nowrap;
}
</style>