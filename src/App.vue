<template>
  <div>
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'

const themeStore = inject('themeStore');

onMounted(() => {
  themeStore.loadTheme();
});
</script>

<style lang="scss">
// Global styles will be imported via base.scss
</style>