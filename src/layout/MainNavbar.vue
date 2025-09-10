<template>
  <nav class="main-navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">My Site</router-link>
      <div class="navbar-links">
        <router-link to="/blog" class="nav-link">Blog</router-link>
        <button class="theme-toggle" @click="themeStore.toggleTheme">
          {{ themeStore.isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { inject } from 'vue';
const themeStore = inject('themeStore');
</script>

<style lang="scss" scoped>
.main-navbar {
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text-color);
  }

  .navbar-links {
    .nav-link {
      margin-left: var(--spacing-md);
      color: var(--text-color);

      &:hover {
        color: var(--accent-color);
      }
    }

    .theme-toggle {
      background: none;
      border: 1px solid var(--border-color);
      color: var(--text-color);
      padding: var(--spacing-sm) var(--spacing-md);
      margin-left: var(--spacing-md);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--accent-color);
        color: #fff;
        border-color: var(--accent-color);
      }
    }
  }
}
</style>
