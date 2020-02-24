import MainPage from '../../components/首页/index'

const toeflmanRouter = {
    path: '/toeflman', //跟路由
    component: MainPage, //每一个模块的跟路由请保证务必是此界面！
    children: [
        {
            path: '',
            name: 'toeflman',  //子路由，表现形式即为 /toeflman下<router-view>中的所显示的页面
            component : () => import('components/托福人/o3托福人.vue'),
            meta:{
                title:'托福人首页'
            }
        },
        {
            path:'toelfsort',  //子路由，表现形式即为 /toeflman/toelfsort 以后的嵌套路由以此类推，此处务必使用套娃，否则bug飞上天
            name:'teolfsort',
            component : () => import('components/托福人/o3托福人分类页.vue'),
            meta:{
                title:'托福人分类页'
            },
            children: [
                {
                    path:'details',  //即为  /toeflman/toelfsort/details
                    name:'teolfsortdetails',
                    component : () => import('components/托福人/o3托福人详情页.vue'),
                    meta:{
                        title:'托福人详情页'
                    }
                }
            ]
        },
        {
            path:'toefmanpublic',
            name:'toefmanpublic',
            component: () => import('components/托福人/o3托福人发布页.vue'),
            meta:{
                title:'托福人发布页'
            }
        }
    ]
}

export default toeflmanRouter
