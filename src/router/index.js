import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var routers = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
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
  },
  {
    path: '/community',
    name: 'community',
    component: (resolve) => require(['@/page/community/Community'], resolve)
  },
  {
    path: '/publishArticle',
    name: 'publishArticle',
    component: (resolve) => require(['@/page/community/PublishArticle'], resolve)
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: (resolve) => require(['@/page/user/UserCenter'], resolve)
  }

]

export default new Router({
  mode: 'history',
  routes: routers
})
