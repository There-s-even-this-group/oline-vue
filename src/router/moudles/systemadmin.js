import MainPage from '../../components/首页/index'

const systemadminRouter={
  path:'/system_admin',
  component:MainPage,
  children:[
    {
      path:'',
      name:'system_admin',
      component: () => import( 'components/系统管理员/o7系统管理-用户列表.vue'),
      meta :{
        title:'用户列表'
      }
    },
    {
      path:'teacher',
      name:'teacher',
      component: () => import( 'components/系统管理员/o7系统管理-讲师列表.vue'),
      meta :{
        title:'讲师列表'
      }
    },

    {
      path:'tolfman',
      name:'tolfman',
      component: () => import( 'components/系统管理员/o7系统管理-托福人列表.vue'),
      meta :{
        title:'托福人列表'
      }
    },
    {
      path:'Curriculum_activities',
      name:'Curriculum_activities',
      component: () => import( 'components/系统管理员/o7系统管理-课程活动.vue'),
      meta :{
        title:'课程活动'
      }
    },
    {
      path:'/welfare_castle_release',
      name:'welfare_castle_release',
      component: () => import( 'components/福利城堡/o6福利城堡-发布.vue'),
      meta :{
        title:'福利发布'
      }
    },

    {
      path:'/FirstPage',
      name:'FirstPage',
      component: () => import( 'components/系统管理员/ChildComponent/个人资料首页.vue'),
      meta :{
        title:'个人资料首页'
      }
    },
    {
      path:'/User_Information',
      name:'User_Information',
      component: () => import( 'components/系统管理员/ChildComponent/o7系统管理-用户资料全部组件集合.vue'),
      meta :{
        title:'用户资料'
      }
    },

    {
      path:'/AdminUpdatePassword',
      name:'AdminUpdatePassword',
      component: () => import( 'components/系统管理员/ChildComponent/adminPassword.vue'),
      meta :{
        title:'密码设置'
      }
    },
    {
      path:'/AdminUpdateBaseinf',
      name:'AdminUpdateBaseinf',
      component: () => import( 'components/系统管理员/ChildComponent/adminBaseinf.vue'),
      meta :{
        title:'基本资料'
      }
    },
    {
      path:'/AdminUpdateIconconfig',
      name:'AdminUpdateIconconfig',
      component: () => import( 'components/系统管理员/ChildComponent/adminIconconfig.vue'),
      meta :{
        title:'更改头像'
      }
    },

    {
      path:'/AdminUpdateSecondMenu',
      name:'AdminUpdateSecondMenu',
      component: () => import( 'components/系统管理员/ChildComponent/AdminSecondMenu.vue'),
      meta :{
        title:'子集目录'
      }
    },

    {
      path:'/AdminUpdateUserInf',
      name:'AdminUpdateUserInf',
      component: () => import( 'components/系统管理员/ChildComponent/admin个人资料页.vue'),
      meta :{
        title:'个人资料'
      }
    },

  ]
}

export default systemadminRouter;
