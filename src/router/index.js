import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面
//游客界面
export const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    hidden: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    hidden: true
  }
];

//异步挂载的路由
//动态需要根据权限加载的路由表
//登录后访问的
export const asyncRouterMap = [
  {
    path:  '/index',
    component: () => import('@/views/1'),
    name: 'test',
    meta:{
      roles: ['user', 'normal']
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
  },
  {
    path:'/open_class/publish_class',
    name:'/open_class/publish_class',
    component: () => import('components/公开课/o2公开课-发布.vue'),
    meta :{
      title: '公开课发布'
    }
  },
  {
    path:'/group_chat',
    name:'groupChat',
    component: () => import( 'components/群组聊/o8组群聊-组群聊.vue'),
    meta :{
      title:'群组聊'
    }
  },
];

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // reset router
}

//实例化vue的时候只挂载constantRouter
const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  //history会去掉url的#，但是需要全路径访问，并且刷新会访问后端，所以默认的是hash模式
  //mode: 'history'
});

const router = createRouter();

export default router
