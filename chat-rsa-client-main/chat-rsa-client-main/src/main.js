import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import chat from "./chat/components/chat"
import rsa from "./rsa/components/rsa"

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
}))


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// BootstrapVue vào 
Vue.use(BootstrapVue)
// cài đặt plugin thành phần biểu tượng BootstrapVue
Vue.use(IconsPlugin)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '', component: chat },
  { path: '/rsa', component: rsa }// mã hóa tin nhắn
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
