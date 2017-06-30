
// 引用vue 和vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
// 四大板块的引用
import Home from '../Home/home.vue';
import operationData from '../Home/operationData.vue';
import operationSupport from '../Home/operationSupport.vue';
import anchorManager from '../Home/anchorManager.vue';
import systemManagement from '../Home/systemManagement.vue';
import Login from '../components/login.vue';
// 图形的页面
import graphic from '../graphic/dataSynthesis.vue';
// 运营支撑的
import User from '../User/user.vue';
// 页面的基本架构
import Hello from '../Home/hello.vue';
import Err401 from '../error/401.vue';


// 把router 引用进入vue
Vue.use(VueRouter);
// 基本的路由配置
export const constantRouterMap = [
    {
        path:'/login',
        component:Login,
        name:'',
        hidden:true
    },
    {
        path:'/home',
        component:Home,
        name:'',
        hidden:true,
        children:[
            { path: '/hello', component: Hello, name: '欢迎', hidden: true },
            { path: '/401', component: Err401, name: '401' },
        ]
    },

]
export default new VueRouter({
  routes:constantRouterMap
})
// 其他路由
export const asyncRouterMap = [

    {
        path: '/operationData',
        component: Home,
        name: '运营数据',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/operationData',
                component: operationData,
                name: '主页',
                hidden: false ,
                children: [

                    { path: '/dataSynthesis', component: graphic, name: '综合数据', hidden: false ,meta: { role: ['admin'] }},
                    // { path: '/401', component: Err401, name: '401' },
                ]
            },

        ],
    },
    {
        path: '/operationSupport',
        component: Home,
        name: '运营支撑',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/operationSupport',
                component: operationSupport,
                name: '运营支撑主页',
                hidden: false ,
                children: [
                    { path: '/user', component: User, name: '用户', hidden: false },

                ]
            },
        ],
    },
    {
        path: '/anchorManager',
        component: Home,
        name: '主播管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/anchorManager',
                component: anchorManager,
                name: '主播管理主页',
                hidden: false ,
                children: [


                ]
            },
        ],
    },
    {
        path: '/systemManagement',
        component: Home,
        name: '系统管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/systemManagement',
                component: systemManagement,
                name: '系统管理主页',
                hidden: false ,
                children: [


                ]
            },
        ],
    },
    { path: '*', redirect: '/401', hidden: true,}
]
