<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBlogBySlug } from '../data/blogs.js'

const route = useRoute()
const router = useRouter()

const blog = computed(() => getBlogBySlug(route.params.slug))

const goBack = () => {
    router.push('/blog')
}

// Simple markdown-like rendering
const renderContent = (content) => {
    if (!content) return ''

    let html = content
        // Headers
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Horizontal rule
        .replace(/^---$/gm, '<hr>')
        // Lists
        .replace(/^\* (.+)$/gm, '<li>$1</li>')
        // Paragraphs
        .split('\n\n')
        .map(block => {
            if (block.startsWith('<h') || block.startsWith('<hr') || block.startsWith('<li')) {
                // Wrap list items in ul
                if (block.includes('<li>')) {
                    return `<ul>${block}</ul>`
                }
                return block
            }
            if (block.trim()) {
                return `<p>${block.replace(/\n/g, '<br>')}</p>`
            }
            return ''
        })
        .join('')

    return html
}
</script>

<template>
    <div class="blog-detail-page">
        <div class="blog-container" v-if="blog">
            <header class="blog-header">
                <button class="back-button" @click="goBack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>All posts</span>
                </button>
            </header>

            <article class="blog-article">
                <div class="article-meta">
                    <span class="article-tag">{{ blog.tag }}</span>
                    <span class="article-date">{{ blog.date }}</span>
                </div>

                <h1 class="article-title">{{ blog.title }}</h1>

                <div class="article-content" v-html="renderContent(blog.content)"></div>
            </article>
        </div>

        <div class="blog-container" v-else>
            <div class="not-found">
                <h2>Blog post not found</h2>
                <button class="back-button" @click="goBack">
                    <span>Back to all posts</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-detail-page {
    min-height: 100vh;
    background: var(--bg-main);
    padding: 40px 24px;
}

.blog-container {
    max-width: 720px;
    margin: 0 auto;
}

.blog-header {
    margin-bottom: 40px;
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
    font-family: var(--font-sans);
}

.back-button:hover {
    background: var(--card-bg);
    color: var(--text-primary);
    border-color: var(--text-muted);
}

.article-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.article-tag {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-primary);
    padding: 6px 14px;
    border: 1px solid var(--border-color);
    border-radius: 100px;
    background: var(--card-label-bg);
}

.article-date {
    font-size: 14px;
    color: var(--text-muted);
}

.article-title {
    font-size: 40px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2;
    margin-bottom: 40px;
    letter-spacing: -0.02em;
}

.article-content {
    color: var(--text-primary);
    font-size: 16px;
    line-height: 1.75;
}

.article-content :deep(h1) {
    font-size: 32px;
    font-weight: 700;
    margin: 48px 0 24px;
    color: var(--text-primary);
}

.article-content :deep(h2) {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 20px;
    color: var(--text-primary);
}

.article-content :deep(h3) {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 16px;
    color: var(--text-primary);
}

.article-content :deep(p) {
    margin-bottom: 20px;
    color: var(--text-secondary);
}

.article-content :deep(strong) {
    color: var(--text-primary);
    font-weight: 600;
}

.article-content :deep(em) {
    font-style: italic;
}

.article-content :deep(code) {
    background: var(--card-bg);
    color: var(--accent-green);
    padding: 3px 8px;
    border-radius: 6px;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 14px;
    border: 1px solid var(--border-color);
}

.article-content :deep(ul) {
    margin: 20px 0;
    padding-left: 24px;
}

.article-content :deep(li) {
    margin-bottom: 12px;
    color: var(--text-secondary);
}

.article-content :deep(hr) {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 40px 0;
}

.not-found {
    text-align: center;
    padding: 80px 0;
}

.not-found h2 {
    font-size: 24px;
    color: var(--text-primary);
    margin-bottom: 24px;
}

@media (max-width: 640px) {
    .article-title {
        font-size: 28px;
    }

    .article-content {
        font-size: 15px;
    }

    .article-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>
