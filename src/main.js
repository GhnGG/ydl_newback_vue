// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
// import VueRouter from 'vue-router';
import store from './vuex/store';
// import Vuex from 'vuex';
// import axios from 'axios';
import { asyncRouterMap, constantRouterMap } from './router/index';

// import routes from './routes'
// Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(VueRouter);
// Vue.use(Vuex);
// Vue.use(axios);
// const router = new VueRouter({
//   routes:constantRouterMap
// })

function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');

  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    // next(to.path)
    next({ path: '/login' })
  } else {
    if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取user_info
          const roles = ['develop'];
          console.log(roles);
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next(to.path); // hack方法 确保addRoutes已完成
          })
        }).catch(err => {
        //   console.log(err);
        });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next();//
        } else {
          next({ path: '/401', query: { noGoBack: true } });
        }
        // 可删 ↑
        // next()
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
