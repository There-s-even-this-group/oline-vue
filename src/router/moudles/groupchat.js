import MainPage from '../../components/首页/index'

const groupchatRouter = {
    path: '/group_chat',
    component: MainPage,
    children: [
        {
            path:'',
            name:'groupChat',
            component: () => import( 'components/群组聊/o8组群聊-组群聊.vue'),
            meta :{
                title:'群组聊'
            }
        },
        {
            path:'group_detail',
            name:'groupDetail',
            component: () => import( 'components/群组聊/o8组群聊-组群详细页.vue'),
            meta :{
                title:'组群详细页'
            }
        },
        {
            path:'group_chatRoom',
            name:'groupChatRoom',
            component: () => import( 'components/群组聊/o8组群聊-群聊页.vue'),
            meta :{
                title:'群聊页'
            }
        }
    ]
};

export default groupchatRouter;
