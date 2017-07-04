//test
// export const getCount = state => {
//     return state.count
// }
const getters = {
  name: state => state.user.name,
  roles: state => state.user.roles,
  router: state => state.user.router,
  token: state => state.user.token,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters

};
export default getters
