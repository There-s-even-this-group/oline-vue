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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
