import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { themeStore } from './themeStore'

import './assets/scss/base.scss'

const app = createApp(App)
app.use(router)
app.provide('themeStore', themeStore) // Provide the theme store globally
app.mount('#app')