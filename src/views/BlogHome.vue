<template>
  <div class="blog-home-page section">
    <div class="container">
      <h1>Blog Posts</h1>
      <div v-if="posts.length" class="blog-list">
        <div v-for="post in posts" :key="post.slug" class="blog-post-card border-bottom">
          <router-link :to="`/blog/${post.slug}`">
            <h2>{{ post.title }}</h2>
          </router-link>
          <p class="post-meta">Published on {{ formatDate(post.published) }}</p>
          <p>{{ post.summary }}</p>
        </div>
      </div>
      <p v-else>No blog posts found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import butter from '@/api/buttercms';

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await butter.post.list({ page: 1, page_size: 10 });
    posts.value = response.data.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(fetchPosts);
</script>

<style lang="scss" scoped>
.blog-home-page {
  h1 {
    text-align: center;
    margin-bottom: var(--spacing-lg);
  }

  .blog-list {
    display: grid;
    gap: var(--spacing-lg);

    .blog-post-card {
      padding-bottom: var(--spacing-lg);

      h2 {
        margin-top: 0;
        margin-bottom: var(--spacing-sm);
        color: var(--text-color);

        &:hover {
          color: var(--accent-color);
        }
      }

      .post-meta {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.7;
        margin-bottom: var(--spacing-md);
      }
    }
  }
}
</style>
