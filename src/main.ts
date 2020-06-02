import Vue from "vue";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  store,
  router,

  // eslint-disable-next-line
  render: (h) => h(App)
}).$mount("#app");
