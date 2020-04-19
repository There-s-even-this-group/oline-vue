import MainPage from '../../components/首页/index'

const welfarecastleRouter = {
    path: '/welfare_castle',
    component: MainPage,
    children: [
        {
            path:'welfare_castleDetails',
            name:'welfare_castleDetails',
            component: () => import( 'components/福利城堡/o6福利城堡-活动详细页.vue'),
            meta :{
                title:'福利城堡活动详细页'
            }
        },
        {
            path:'welfare_castle',
            name:'welfare_castle',
            component: () => import( 'components/福利城堡/o6福利城堡-福利城堡.vue'),
            meta :{
                title:'福利城堡'
            }
        },
        {
            path:'publish_welfare_castle',
            name:'publish_welfare_castle',
            component: () => import('components/福利城堡/o6福利城堡-发布.vue'),
            meta :{
                title: '福利城堡发布'
            }
        },
        {
            path:'enter_welfare_castle',
            name:'enter_welfare_castle',
            component: () => import('components/福利城堡/choose_class/enterclass.vue'),
            meta :{
                title: '我要加入'
            }
        },

    ]
};

export default welfarecastleRouter;