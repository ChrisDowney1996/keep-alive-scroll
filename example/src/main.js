import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KeepAliveScroll from '../../packages/keep-alive-scroll/index.js'

Vue.config.productionTip = false
Vue.use(KeepAliveScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
