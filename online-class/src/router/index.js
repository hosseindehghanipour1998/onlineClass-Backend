import Vue from 'vue'
import Router from 'vue-router';
import SUSI from '@/components/SUSI.vue';
import Home from '@/components/Home/Home.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SUSI',
      component: SUSI
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
