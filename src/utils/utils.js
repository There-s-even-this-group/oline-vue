import {getRequest} from './api'

export const initMenu = (router, store)=> {
    if (store.state.routes.length > 0) {
        return;
    }
    getRequest("/config/sysmenu").then(resp=> {
        if (resp && resp.status == 200) {
            var fmtRoutes = formatRoutes(resp.data);
            router.addRoutes(fmtRoutes);
            store.commit('initMenu', fmtRoutes);
        }
    })
}
export const formatRoutes = (routes)=> {
    let fmRoutes = [];
    routes.forEach(router=> {
        let {
            path,
            component,
            name,
            meta,
            iconCls,
            children
        } = router;
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: path,
            component(resolve){
                if (component.startsWith("Home")) {
                    require(['../components/' + component + '.vue'], resolve)
                } else if (component.startsWith("o1")) {
                    require(['../components/个人资料/' + component + '.vue'], resolve)
                } else if (component.startsWith("o2")) {
                    require(['../components/公开课/' + component + '.vue'], resolve)
                } else if (component.startsWith("o3")) {
                    require(['../components/托福人/' + component + '.vue'], resolve)
                } else if (component.startsWith("o4")) {
                    require(['../components/支付/' + component + '.vue'],resolve)
                } else if (component.startsWith("o5")) {
                    require(['../components/登录注册/' + component + '.vue'],resolve)
                } else if (component.startsWith("o6")) {
                    require(['../components/福利城堡/' + component + '.vue'],resolve)
                } else if (component.startsWith("o7")) {
                    require(['../components/系统管理员/' + component + '.vue'],resolve)
                } else if (component.startsWith("o8")) {
                    require(['../components/群组聊/' + component + '.vue'],resolve)
                }
            },
            name: name,
            iconCls: iconCls,
            meta: meta,
            children: children
        };
        fmRoutes.push(fmRouter);
    })
    return fmRoutes;
}
