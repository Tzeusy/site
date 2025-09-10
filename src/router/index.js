import { createRouter, createWebHistory } from 'vue-router'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

const Profile = () => import('@/views/UserProfile.vue')
const BlogHome = () => import('@/views/BlogHome.vue')
const BlogPost = () => import('@/views/BlogPost.vue')

const routes = [
  {
    path: '/',
    name: 'user-profile',
    components: { default: Profile, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/blog',
    name: 'blog-home',
    components: { default: BlogHome, header: MainNavbar, footer: MainFooter },
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    components: { default: BlogPost, header: MainNavbar, footer: MainFooter },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
})

export default router
