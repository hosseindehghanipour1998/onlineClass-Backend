// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {store} from './store/store';
import mixin from "./mixin";
import VueParticles from 'vue-particles';


Vue.mixin(mixin);
Vue.config.productionTip = false
Vue.use(VueParticles)


new Vue({
  store:store,
  router,
  render: (h) => h(App)
}).$mount("#app")