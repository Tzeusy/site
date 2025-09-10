<template>
  <footer class="main-footer">
    <div class="container">
      <p>&copy; {{ currentYear }} My Site. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
.main-footer {
  background-color: var(--background-color);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  text-align: center;
  color: var(--text-color);
  font-size: 0.9rem;
}
</style>
