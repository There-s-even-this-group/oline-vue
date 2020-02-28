import MainPage from '../../components/首页/index'
import Persion from '../../components/个人资料/o1普通用户-首页'

const personalcenterRouter = {
    path : '/person',
    component : MainPage,
    redirect: '/person/personal_data',
    children : [
        {
            path: '',
            component: Persion,
            children: [
                {
                    path: 'personal_data',
                    name: '个人资料',
                    component:  () => import('../../components/个人资料/o1用户中心-个人资料'),
                    meta : {
                        title: '个人资料'
                    },
                    children: [
                        {
                            path: 'base',
                            name: '基础资料',
                            component: () => import('../../components/个人资料/personComp/baseinf'),
                            meta:{
                                title: '基础资料'
                            }
                        },
                        {
                            path: 'icon',
                            name: '头像设置',
                            component: () => import('../../components/个人资料/personComp/iconconfig'),
                            meta:{
                                title: '头像设置'
                            }
                        },
                        {
                            path: 'password',
                            name: '密码设置',
                            component: () => import('../../components/个人资料/personComp/passwordconfig'),
                            meta:{
                                title: '密码设置'
                            }
                        }
                    ]
                },
                {
                    path: 'personal_class',
                    name: '公开课',
                    component: () => import('../../components/个人资料/o1用户中心-我的公开课'),
                    meta: {
                        title: '公开课'
                    }
                },
                {
                    path: 'personal_group',
                    name: '我的群组',
                    component: () => import('../../components/个人资料/o1用户中心-我的群组'),
                    meta: {
                        title: '群组聊'
                    }
                },
                {
                    path: 'personal_castle',
                    name: '福利城堡',
                    component: () => import('../../components/个人资料/o1用户中心-我的福利城堡'),
                    meta: {
                        title: '福利城堡'
                    }
                },
                {
                    path: 'personal_toeflman',
                    name: '托福人',
                    component: () => import('../../components/个人资料/o1用户中心-我的托福人'),
                    meta: {
                        title: '托福人'
                    }
                }
            ]
        }
    ]
}

export default personalcenterRouter;
