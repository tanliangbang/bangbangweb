// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLoading from './plugins/loading/index'
import Prompt from './plugins/prompt/index'
import LoginAndRegist from './components/loginAndregist/index'
Vue.config.productionTip = false
Vue.use(VueLoading)
Vue.use(Prompt)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use(LoginAndRegist, store)
