<script>
  import { butter } from '../buttercms'
  export default {
    name: 'blog-post',
    bodyClass: "blog-page",
    data() {
      return {
        post: null
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data;
            let date = new Date(this.post.data.published);
            this.post.data.date = date.toLocaleDateString('en-sg');
          })
      },
      headerStyle() {
        return {
          backgroundImage: `url(${this.post.data.featured_image})`
        };
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          console.log(to, from)
          this.getPost()
        }
      }
    },
    props: {
      header: {
        type: String,
        default: require("@/assets/img/poc.jpg")
      },
    },
    created() {
      this.getPost()
    },
  }
</script>
<template>
  <div class="wrapper">
    <div
      class="section page-header header-filter"
      :style="headerStyle()"
    ></div>
    <div v-if="post" class="main main-raised">
      <div class="container" id="blog-post">
        <h2 style='padding-top: 4rem'>{{ post.data.title }}</h2>
        <i>Published on {{ post.data.date }} by {{post.data.author.first_name}}</i>
        <!-- {{ post.data.author.first_name }} {{ post.data.author.last_name }} -->
        <div v-html="post.data.body"></div>
        <router-link
          v-if="post.meta.previous_post"
          :to="/blog/ + post.meta.previous_post.slug"
          class="button"
        >
          {{ post.meta.previous_post.title }}
        </router-link>
        <router-link
          v-if="post.meta.next_post"
          :to="/blog/ + post.meta.next_post.slug"
          class="button"
        >
          {{ post.meta.next_post.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  #blog-post {
    display: block;
    text-align: left;
  }
</style>