import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import router from "./routes/index";
import i18n from "./i18n";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);
Vue.$cookies.config("7d");
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: store,
  i18n,
  router,
}).$mount("#app");
