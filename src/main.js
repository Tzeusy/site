import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

Vue.use(VueAnalytics, {
  id: 'UA-161418729-1',
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
