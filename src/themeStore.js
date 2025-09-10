import { reactive } from 'vue';

export const themeStore = reactive({
  isDarkMode: false,
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode);
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  },
  loadTheme() {
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme) {
      this.isDarkMode = JSON.parse(savedTheme);
    } else {
      // Default to light mode or detect system preference
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }
});