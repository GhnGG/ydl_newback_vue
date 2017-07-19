
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import store from './vuex/store';

Vue.use(ElementUI);


function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
const whiteList = ['/login','/hello'];// 不重定向白名单
router.beforeEach((to, from, next) => {

  if (store.getters.token) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
        if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
          store.dispatch('GetInfo').then(res => { // 拉取user_info
            const roles = ['admin'];
            store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next(to.path); // hack方法 确保addRoutes已完成
            })
          }).catch(err => {
            console.log(err);
          });
        } else {
          // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
          if (hasPermission(store.getters.roles, to.meta.role)) {
            next();//
          } else {
            next({ path: '/401', query: { noGoBack: true } });
          }

        }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login'); // 否则全部重定向到登录
    }
  }
})

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')
