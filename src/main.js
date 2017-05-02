// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from '@/router/index';
import * as filters from '@/filter'
import '@/config/config.pro.js';
import MasterOutBackApp from '@/plugins/master-out-back-app';

//aoo 外顶部返回app 功能 不用刻意闪电
Vue.use(MasterOutBackApp)

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

import {
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  AjaxPlugin
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
