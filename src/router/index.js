import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var routers = [
  {
    path: '/',
    name: 'Index',
    component: (resolve) => require(['@/components/Index'], resolve)
  },
  {
    path: '/resContentList',
    name: 'ResContentList',
    component: (resolve) => require(['@/components/ResContentList'], resolve)
  }
]

export default new Router({
  mode: 'history',
  routes: routers
})
