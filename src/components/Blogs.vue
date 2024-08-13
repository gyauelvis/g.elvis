<template>
    <div class="blog-container">
        <div v-for="(blog, index) in blogs" :key="index" class="project">
            <div class="projContainer">
                <div class="name-code">
                    <h2>{{ blog.title.length > 50 ? `${blog.title.substring(0, 45)}...` : blog.title }}</h2>
                </div>
                <a :href="blog.url" target="_blank" class="cover-image">
                    <img :src="blog.cover_image || blogImg" alt="">
                </a>
                <div class="projectDescription">
                    <span>{{ blog.description }}...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
const username = 'gyauelvis';
const blogs = ref([]);
const blogImg = '/src/assets/img/blogImg.svg'

const fetchBlogs = async () => {
    const response = await fetch(
        `https://dev.to/api/articles?username=${username}`
    );
    blogs.value = await response.json();
}
onMounted(() =>fetchBlogs())



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
</style>