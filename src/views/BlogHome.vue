<script>
import { butter } from '../buttercms'
export default {
  name: 'blog-home',
  bodyClass: "blog-page",
  data() {
    return {
      page_title: 'Latest Posts',
      posts: [],
      colorSet:[
        "#FF0000",
        "#800000",
        "#FFFF00",
        "#00FF00",
        "#008000",
        "#00FFFF",
        "#0000FF",
        "#FF00FF",
        "#000080"
      ],
      colorMapper: {},
      slugMapper: {},
      current_page: 0,
      posts_per_page: 5,
      paginations: [],
      active_tags: new Set(),
    }
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        res.data.data.forEach(row=>{
          let date = new Date(row.published);
          row.date = date.toLocaleDateString('en-sg');
          row.tags.forEach(tag=>{
            this.slugMapper[tag.slug.toUpperCase()] = tag.name
            this.colorClassifier(tag.slug.toUpperCase());
            this.active_tags.add(tag.slug.toUpperCase());
          })
        });
        this.posts = res.data.data;
        this.paginatePosts();
        console.log(this.posts)
      });
    },
    toggle(slug){
      if(this.active_tags.has(slug)){
        this.active_tags.delete(slug)
        this.colorSet.push(this.colorMapper[slug]);
        this.colorMapper[slug] = '#222222';
      }
      else{
        this.active_tags.add(slug);
        this.colorMapper[slug] = this.colorSet.pop();
      }
      this.paginatePosts();
    },
    move(amount) {
      let newActive = this.current_page + amount;
      if (newActive > this.paginations.length - 1) newActive = 0;
      if (newActive < 0) newActive = this.paginations.length - 1;
      this.current_page = newActive;
    },
    jump(index) {
      this.current_page = index;
    },
    colorClassifier(slug){
      if(slug in this.colorMapper){
        return
      }
      this.colorMapper[slug] = this.colorSet.pop()
      return
    },
    paginatePosts() {
      this.paginations = [];
      let post_count = 0;
      let stored_posts = []
      this.posts.forEach(post =>{
        for(let i=0;i<post.tags.length;i++){
          if(this.active_tags.has(post.tags[i].slug.toUpperCase())){
            if(post_count >= this.posts_per_page){
              this.paginations.push(stored_posts);
              post_count = 0;
              stored_posts = [];
            }
            stored_posts.push(post);
            post_count += 1;
            break;
          }
        }
      });
      if (stored_posts.length != 0){
        this.paginations.push(stored_posts);
      }
      this.current_page = 0;
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/poc.jpg")
    },
  },
  created() {
    this.getPosts()
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class='main main-raised' style='padding: 30px'>
      <div>
        <h4 style="text-align: center;"> Blog Posts </h4>
        <div class="container blog-posts">
          <div style="position: relative; height:20px">
            <span
              class="prev"
              @click="move(-1)"
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </span>
            <span
              class="next"
              @click="move(1)"
            >
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
            <div style='margin-left:30%; margin-right:30%;'>
              <ul class="dots" style='top:-2vh;'>
                <li 
                  v-for="(dot, index) in paginations.length"
                  :class="{ active: index === current_page }"
                  :key = index
                  @click="jump(index)"
                ></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <!-- thead -->
            <div style="display:table-row">
              <div class="main-raised blog-post">
                <div class="tcell theader col s6 m2 l2">Published</div>
                <div class="tcell theader col s6 m4 l4">Title</div>
                <div class="tcell theader col s6 m4 l4">Summary</div>
                <div class="tcell theader col s6 m2 l2">Categories</div>
              </div>
            </div>
            <!-- tbody -->
            <div 
              style="display:table-row"
              v-for="(post,index) in paginations[current_page]"
              :key="post.slug + '_' + index"
            >
              <div class="main-raised blog-post">
                <a :href="'/#/blog/' + post.slug">
                  <div class="tcell col s6 m2 l2" style="line-height: 3rem;">
                    {{post.date}}
                  </div>
                  <div class="tcell col s6 m4 l4" style="line-height: 3rem;">
                    {{post.title}}
                  </div>
                  <div class="tcell col s6 m4 l4">
                    {{post.summary}}
                  </div>
                  <div class="tcell col s6 m2 l2">
                    <div 
                      v-for="element in post.tags"
                      :key="element.slug"
                      class="slug"
                      :style="{
                        border: 'solid 1px ' + colorMapper[element.slug.toUpperCase()],
                        backgroundColor:colorMapper[element.slug.toUpperCase()]+'22'
                      }"
                    >{{element.slug.toUpperCase()}}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- Legend at the bottom -->
          <div class="row" style="width:70vw">
            <div
              v-for="(name, slug) in slugMapper"
              :key=name
              style="display: flex; height:30px; margin-bottom: 1vh"
              class="col s6 m6 l3"
            >
              <div
                :style="{
                  border: 'solid 1px ' + colorMapper[slug],
                  backgroundColor:colorMapper[slug]+'22',
                }"
                class="slug"
                @click="toggle(slug.toUpperCase())"
              >{{slug}}</div>
              <div style="text-align:center; font-size: 0.8em; width:100%; display:inline-table">{{slugMapper[slug]}}</div>
            </div>
          </div>
          <div style='text-align:center'>
            <i>Click icons to toggle categories. Posts will show if any of its categories are enabled.</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .left {
    position: relative;
    left: 5rem;
  }
  .right {
    position: relative;
    right: 5rem;
  }
  .slug {
    min-width:30px;
    min-height:30px;
    text-align: center;
    margin: 4px;
    display:inline-table;
  }
  .tcell {
    margin-top: 1em;
    margin-bottom: 1em;
    color: black;
    vertical-align: center;
  }
  .theader {
    font-size: 1.2em;
    font-weight: bold;
  }
  .blog-posts{
    display:table;
    padding:0;
    border-collapse:separate;
    -webkit-border-vertical-spacing: 0.3em;
  }
  .blog-post {
    width:70vw;
    margin: 0;
    margin-left: 10vw;
    margin-right: 10vw;
    min-height: 3rem;
    text-align: center;
    background: #ffffffee;
    display: inline-block;
  }
  .row {
    ::after {
      content: none;
    }
  }
  .blog_thumbnail {
    height: 250px; 
    width: 250px;
  }

  $primary: #221e21;

  .prev,
  .next {
    position: absolute;
    left: 10vw;
    top: 50%;
    width: 20px;
    height: 2spx;
    border: 2px solid $primary;
    color: $primary;
    border-radius: 50%;
    margin-top: -25px;
    margin-left: 0.1vw;
    cursor: pointer;
    line-height: 8px;
    text-align: center;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &:hover {
      background: $primary;
      color: #fff;
      transform: scale(1.2);
    }
    
    &:active {
      transform: translate(0, 3px) scale(1.2);
    }
  }

  .next {
    right: 10vw;
    margin-left: auto;
    margin-right: 0.1vw;
    text-indent: 2px;
  }

  .dots {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
    li {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: $primary;
      opacity: 0.2;
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
      transition: opacity 0.4s ease-in-out,width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      &.active {
        width: 22px;
        opacity: 1;
      }
    }
  }

  .slides {
    font-size: 20px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    .animated {
      transition: all 400ms;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    
    .slide-in {
      opacity: 0;
      transform: translate(-40%, -50%);
    }
    
    .slide-in-active {
      transition-delay: 150ms;
    }
    
    .slide-out {
      opacity: 1;
    }
    
    .slide-out-active {
      opacity: 0;
      transform: translate(-60%, -50%);
    }
  }

  .buttons {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  button {
    padding: 10px;
    outline: none;
    border: none;
    -webkit-appearance: none;
    background: $primary;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    
    &:disabled {
      opacity: 0.2;
      cursor: no-drop;
    }
  }
</style>