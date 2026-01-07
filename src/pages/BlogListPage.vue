<script setup>
import { getAllBlogs } from '../data/blogs.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const blogs = getAllBlogs()

const navigateToBlog = (slug) => {
    router.push(`/blog/${slug}`)
}

const goHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="blog-page">
        <div class="blog-container">
            <header class="blog-header">
                <button class="back-button" @click="goHome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </button>
                <h1 class="page-title">Blog</h1>
                <p class="page-subtitle">Thoughts, learnings, and technical deep-dives</p>
            </header>

            <div class="blog-list">
                <article v-for="blog in blogs" :key="blog.slug" class="blog-item" @click="navigateToBlog(blog.slug)">
                    <h2 class="blog-title">{{ blog.title }}</h2>
                    <div class="blog-meta">
                        <span class="blog-tag">{{ blog.tag }}</span>
                        <span class="blog-date">{{ blog.date }}</span>
                    </div>
                    <div class="blog-line"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-page {
    min-height: 100vh;
    background: var(--bg-main);
    padding: 40px 24px;
}

.blog-container {
    max-width: 800px;
    margin: 0 auto;
}

.blog-header {
    margin-bottom: 48px;
}

.blog-line {
    height: 1px;
    background: var(--border-color);
    margin-top: 16px;
}

.back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 10px 16px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 32px;
    font-family: var(--font-sans);
}

.back-button:hover {
    background: var(--card-bg);
    color: var(--text-primary);
    border-color: var(--text-muted);
}

.page-title {
    font-size: 48px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.page-subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    font-weight: 400;
}

.blog-list {
    display: flex;
    flex-direction: column;
}

.blog-item {
    padding: 24px 0;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.2s ease;
}

.blog-item:first-child {
    padding-top: 0;
}

.blog-item:last-child {
    border-bottom: none;
}

.blog-item:hover .blog-title {
    color: var(--accent-green);
}

.blog-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 12px;
    line-height: 1.4;
    transition: color 0.2s ease;
}

.blog-meta {
    display: flex;
    align-items: center;
    gap: 24px;
}

.blog-tag {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    padding: 6px 14px;
    border: 1px solid var(--border-color);
    border-radius: 100px;
    background: var(--card-label-bg);
}

.blog-date {
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 400;
}

@media (max-width: 640px) {
    .page-title {
        font-size: 36px;
    }

    .blog-title {
        font-size: 16px;
    }

    .blog-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>
