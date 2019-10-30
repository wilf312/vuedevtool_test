import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import VuexORM from "@vuex-orm/core";
import User from "./orm/User";
import users from "./orm/users";

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User, users);

const store = new Vuex.Store({
  /**
   * vuex-orm: module
   * - entities/<MODULE>
   */
  plugins: [VuexORM.install(database)]
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
