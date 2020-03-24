import Vue from "vue";
import Router from "vue-router";
// import Index from "./views/Index.vue";
// import Landing from "./views/Landing.vue";
// import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import BlogHome from './views/BlogHome'
import BlogPost from './views/BlogPost'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: '/blog',
      name: 'blog-home',
      components: {default: BlogHome, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 1 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      components: {default: BlogPost, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 1 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
