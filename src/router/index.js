import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/首页.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/main',
    name: 'home',
    component: Main,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/toeflman',
    name: 'toeflman',
    component : () => import('components/托福人/o3托福人.vue'),
    meta:{
      title:'托福人首页'
    }
  },
  {
    path:'/toeflman/toelfsort',
    name:'teolfsort',
    component : () => import('components/托福人/o3托福人分类页.vue'),
    meta:{
      title:'托福人分类页'
    }
  },
  {
    path:'/toeflman/toelfsort/details',
    name:'teolfsortdetails',
    component : () => import('components/托福人/o3托福人详情页.vue'),
    meta:{
      title:'托福人详情页'
    }
  },
  {
    path:'/toefmanpublic',
    name:'toefmanpublic',
    component: () => import('components/托福人/o3托福人发布页.vue'),
    meta:{
      title:'托福人发布页'
    }
  },
  {
    path:'/open_class',
    name:'openclass',
    component: () => import( 'components/公开课/o2main.vue'),
    meta :{
      title:'公开课'
    }
  },
  {
    path:'/courseDetails',
    name:'courseDetails',
    component: () => import( 'components/公开课/o2课程详细页.vue'),
    meta :{
      title:'课程详细页'
    }
  },
  {
    path:'/open_class/courseReview',
    name:'courseReview',
    component: () => import( 'components/公开课/o2往期回顾-课程回放页.vue'),
    meta :{
      title:'课程回放页'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
