import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var routers = [
  {
    path: '/',
    name: 'Index',
    component: (resolve) => require(['@/page/Index'], resolve)
  },
  {
    path: '/resContentList',
    name: 'resContentList',
    component: (resolve) => require(['@/page/res/ResContentList'], resolve)
  },
  {
    path: '/resContent',
    name: 'resContent',
    component: (resolve) => require(['@/page/res/ResContent'], resolve)
  },
  {
    path: '/myProduction',
    name: 'myProduction',
    component: (resolve) => require(['@/page/production/MyProduction'], resolve)
  }
]

export default new Router({
  mode: 'history',
  routes: routers
})
