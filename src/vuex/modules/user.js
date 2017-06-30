import { allget } from '../../api/api';

const user = {
  state: {
    user: '',
    status: '',
    roles: [],
    router:[],
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
    SET_ROUTER:(state,router) => {
        state.router = router
    }
  },

  actions: {

    // 获取用户信息
    GetInfo({ commit, state }) {
        // commit('SET_ROLES', ['editor']);
        // commit('SET_NAME', '超级管理员');
        // commit('SET_ROUTER', 'data');

      return new Promise((resolve,reject) => {
          let url = '/loginTpl/login'
          try {
              allget({userid:'ghn',userpwd:'e10adc3949ba59abbe56e057f20f883e'}, url).then(data => {
                console.log(data);
                console.log('获取用户信息');
                commit('SET_ROLES', ['editor']);
                commit('SET_NAME', '超级管理员');
                commit('SET_ROUTER', data.data.data);
                resolve();
              });
          } catch (e) {
             console.log(e);
          } finally {

          }


      }).catch(e => {
          reject(e)
      })
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
