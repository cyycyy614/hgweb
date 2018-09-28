import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/store.js'
import ElementUI from 'element-ui'
import lazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(lazyLoad)
Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
