/**
 * 白名单，在此名单中的路由均为对外开放路由，无需登录即可访问
 * @type {string[]}
 */

const whiteList = [ '/online','/online/group_chat','/online/open_class','/online/open_class','/online/toeflman',
    '/online/register','/online/login'] // no redirect whitelist

export default whiteList
