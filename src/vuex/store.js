import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import * as actions from './actions';
import * as getters from './getters';
import permission from './modules/permission';
import { asyncRouterMap, constantRouterMap } from '../router/index';
Vue.use(Vuex)

// 应用初始状态
const state = {
    Vue_router: asyncRouterMap,
    count:10,
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        router.addRoutes(state.Vue_router)
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    permission,
    state,
    mutations,
})
