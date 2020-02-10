import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import {getRequest, uploadFileRequest} from './utils/api'
import {postRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {putRequest} from './utils/api'
import {initMenu} from './utils/utils'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;

Vue.config.productionTip = false

router.beforeEach((to, from, next)=> {
  document.title = to.meta.title;
      if (to.name == 'Login') {
        next();
        return;
      }
      var name = store.state.user.name;
      if (name == '未登录') {
        if (to.meta.requireAuth || to.name == null) {
          next({path: '/', query: {redirect: to.path}})
        } else {
          next();
        }
      } else {
        initMenu(router, store);
        next();
      }
    }
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
