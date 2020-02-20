import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import {getRequest} from './utils/api'
import {postRequest} from './utils/api'
import {getToken} from "@/utils/auth";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;

Vue.config.productionTip = false

const whiteList = ['/about','/auth-redirect','/'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken();
  document.title = to.meta.title;
  if (hasToken) {
    if (to.path === '/login') {
      next({path : '/'})
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { role } = await store.dispatch('user/getInfo');

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', role);

          // dynamically add accessible routes
          router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next('/login')
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/about')
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
