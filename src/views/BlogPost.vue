<template>
  <div class="blog-post-page section">
    <div v-if="post" class="container">
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-meta">Published on {{ formatDate(post.published) }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="post-body" v-html="post.body"></div>
    </div>
    <div v-else class="container">
      <p>Loading blog post...</p>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable vue/no-v-html */
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import butter from '@/api/buttercms';

const route = useRoute();
const post = ref(null);

const fetchPost = async (slug) => {
  try {
    const response = await butter.post.retrieve(slug);
    post.value = response.data.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    post.value = null; // Clear post on error
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
  fetchPost(route.params.slug);
});

watch(() => route.params.slug, (newSlug) => {
  fetchPost(newSlug);
});
</script>

<style lang="scss" scoped>
.blog-post-page {
  .post-title {
    text-align: center;
    margin-bottom: var(--spacing-sm);
  }

  .post-meta {
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.7;
    margin-bottom: var(--spacing-lg);
  }

  .post-body {
    line-height: 1.6;

    // Basic styling for ButterCMS content
    h1, h2, h3, h4, h5, h6 {
      font-weight: 300;
      margin-top: var(--spacing-lg);
      margin-bottom: var(--spacing-md);
    }

    p {
      margin-bottom: var(--spacing-md);
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: var(--spacing-md) auto;
    }

    ul, ol {
      margin-left: var(--spacing-lg);
      margin-bottom: var(--spacing-md);
    }

    blockquote {
      border-left: 4px solid var(--accent-color);
      padding-left: var(--spacing-md);
      margin: var(--spacing-md) 0;
      color: var(--text-color);
      opacity: 0.8;
    }

    pre {
      background-color: var(--border-color);
      padding: var(--spacing-md);
      border-radius: 4px;
      overflow-x: auto;
    }

    code {
      font-family: 'Fira Code', monospace; // Example for code font
      background-color: var(--border-color);
      padding: 2px 4px;
      border-radius: 3px;
    }
  }
}
</style>
