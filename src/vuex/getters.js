//test
// export const getCount = state => {
//     return state.count
// }
const getters = {
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
};
export default getters
