import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes/index.js";
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router: router
}).$mount("#app");
