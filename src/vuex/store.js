import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import permission from './modules/permission';
import user from './modules/user';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  getters
});

export default store
// 应用初始状态
// const state = {
//     Vue_router: asyncRouterMap,
//     count:10,
// }

// 定义所需的 mutations
// const mutations = {
//     INCREMENT(state) {
//         router.addRoutes(state.Vue_router)
//         state.count++
//     },
//     DECREMENT(state) {
//         state.count--
//     }
// }

// 创建 store 实例
// export default new Vuex.Store({
//     actions,
//     getters,
//     permission,
//     state,
//     mutations,
// })
