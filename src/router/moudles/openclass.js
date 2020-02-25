import MainPage from '../../components/首页/index'

const openclassRouter = {
    path: '/open_class',
    component: MainPage,
    children: [
        {
            path: '',
            name: 'open_class',
            component: () => import('components/公开课/o2main.vue'),
            meta :{
                title:'公开课'
            }
        },
        {
            path:'courseDetails',
            name:'courseDetails',
            component: () => import( 'components/公开课/o2课程详细页.vue'),
            meta :{
                title:'课程详细页'
            }
        },
        {
            path:'courseReview',
            name:'courseReview',
            component: () => import( 'components/公开课/o2往期回顾-课程回放页.vue'),
            meta :{
                title:'课程回放页'
            }
        },
        {
            path:'publish_class',
            name:'publish_class',
            component: () => import('components/公开课/o2公开课-发布.vue'),
            meta :{
                title: '公开课发布'
            }
        },
    ]
};

export default openclassRouter;
