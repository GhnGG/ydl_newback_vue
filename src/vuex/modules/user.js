import { getUserList } from '../../api/api';

const user = {
  state: {
    user: '',
    status: '',
    roles: [],
    au_channelname: '',
    channelid: '',
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {

    // 获取用户信息
    GetInfo({ commit, state }) {
      commit('SET_ROLES', ['editor']);
      commit('SET_NAME', '超级管理员');
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {

          commit('SET_ROLES', []);
          Cookies.remove('Admin-Token');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        Cookies.remove('Admin-Token');
        resolve();
      });
    },

    // 动态修改权限
    ChangeRole({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_ROLES', [role]);
        Cookies.set('Admin-Token', role);
        resolve();
      })
    }
  }
};

export default user;
