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
      path:'Curriculum_activities',
      name:'Curriculum_activities',
      component: () => import( 'components/系统管理员/o7系统管理-课程活动.vue'),
      meta :{
        title:'课程活动'
      }
    },
    {
      path:'welfare_castle_release',
      name:'welfare_castle_release',
      component: () => import( 'components/福利城堡/o6福利城堡-发布.vue'),
      meta :{
        title:'福利发布'
      }
    },

  ]
}