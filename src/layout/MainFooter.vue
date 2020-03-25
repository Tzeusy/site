<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <div style="text-align:center; width:100%; height:100%; padding: 30px;">
        Source code for this website accessible <a href="https://github.com/Tzeusy/site">here</a>. MIT License - feel free to clone for adaptation for personal use.<br />
        This site was built using Vue.js, with the <a href="https://materializecss.com"> Materialize CSS </a> and <a href="https://demos.creative-tim.com/material-kit/index.html">Material Kit</a> frameworks. 
        Blog powered by <a href="https://buttercms.com/"> ButterCMS </a>.<br />
        All views in this website reflect only my personal views and do not represent any other entity.
        <br /><br />
        <a href="https://www.vuejs.org"> <img style="height:50px" src="https://vuejs.org/images/logo.png" /></a>
        <a href="https://materializecss.com"><img style="height:40px" src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png" /></a>
        <a href="https://buttercms.com/"> <img style="height:50px" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" /> </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
  .footer {
    bottom: 0;
    width:100%;
  }
</style>
