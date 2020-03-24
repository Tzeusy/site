<script>
  import { butter } from '../buttercms'
  export default {
    name: 'blog-post',
    bodyClass: "blogpost-page",
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
    <parallax
      class="section page-header header-filter"
      :style="headerStyle()"
    ></parallax>
    <div v-if="post" class="main main-raised">
      <div class="container" id="blog-post">
        <h2 style='padding-top: 4rem'>{{ post.data.title }}</h2>
        <i>Published on {{ post.data.date }} by {{post.data.author.first_name}}</i>
        <!-- {{ post.data.author.first_name }} {{ post.data.author.last_name }} -->
        <div v-html="post.data.body"></div>
        <div style='display: inline-block'>
          <router-link
            v-if="post.meta.previous_post"
            :to="/blog/ + post.meta.previous_post.slug"
            class="button left"
          >
            &lt;&lt; Previous Post: <br />{{ post.meta.previous_post.title }}
          </router-link>
          <router-link
            :to="/blog/"
            class="button middle"
          >
            Back to Blog Home
          </router-link>
          <router-link
            v-if="post.meta.next_post"
            :to="/blog/ + post.meta.next_post.slug"
            class="button right"
          >
            >> Next Post: <br />{{ post.meta.next_post.title }}
          </router-link>
        </div>
        <div style="margin: 4rem"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  #blog-post {
    display: block;
    text-align: left;
  }
  .main-raised {
    margin-top: -50vh;
    margin-left: 12vw;
    margin-right: 12vw;
    padding-bottom: 20px;
    background: #FFFFFFF7
  }
  .middle {
    position:absolute;
    margin:auto;
    width:100%;
    text-align: center;
  }
  .left {
    position:absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 0;
  }
</style>