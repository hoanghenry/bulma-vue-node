import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import routes from '@/router/';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', 
  routes,
  linkActiveClass: 'is-active'
});

require("./assets/main.scss");

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');