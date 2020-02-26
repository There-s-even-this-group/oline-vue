import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/首页/index'
import toeflmanRouter from "./moudles/toeflman";
import groupchatRouter from "./moudles/groupchat";
import openclassRouter from "./moudles/openclass";
import systemadminRouter from "./moudles/systemadmin";

Vue.use(VueRouter);

/**
 *
 * hidden: true                   动态加载菜单栏，不用理会
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           重定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    权限控制（示例 ：roles ：['user', 'normal']）
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */



//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面
//游客界面
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/online',
  },
  {
    path: '/online',
    component: MainPage,
    children:[
      {
        path: '',
        name: '首页',
        component: () => import('../components/首页/pageContent/Home'),
        meta: {
          title: '首页'
        }
      },
      {
        path:'group_chat',
        name:'groupChat',
        component: () => import( 'components/群组聊/o8组群聊-组群聊.vue'),
        meta :{
          title:'群组聊'
        }
      },
      {
        path: 'open_class',
        name: 'open_class',
        component: () => import('components/公开课/o2main.vue'),
        meta :{
          title:'公开课'
        }
      },
      {
        path: 'toeflman',
        name: 'toeflman',
        component : () => import('components/托福人/o3托福人.vue'),
        meta:{
          title:'托福人首页'
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/登录注册/o5登录页'),
        meta: {
          title:'用户登录'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../components/登录注册/o5注册页'),
        meta: {
          title: '用户注册'
        }
      }
    ]
  },
];

//异步挂载的路由
//动态需要根据权限加载的路由表
//登录后访问的
export const asyncRouterMap = [
  //避免过长而不易维护
  /**
   * 托福人路由表
   */
  toeflmanRouter,
  /**
   * 公开课路由表
   */
  openclassRouter,
  /**
   * 群组聊路由表
   */
  groupchatRouter,
  /**
   * 管理路由表
   */
  systemadminRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
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
