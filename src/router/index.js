

import yunyin from '../Home/yunyinshuju.vue'
import operationSupport from '../Home/operationSupport.vue'

import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login.vue'
import Home from '../Home/home.vue'
import User from '../User/user.vue'

import graphic from '../graphic/dataSynthesis.vue'
import Hello from '../Home/hello.vue'
import Err401 from '../error/401.vue'
Vue.use(VueRouter);
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
        hidden:true
    },

]
export default new VueRouter({
  routes:constantRouterMap
})
export const asyncRouterMap = [

    {
        path: '/',
        component: Home,
        name: '运营数据',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {
                path: '/yunyinshuju',
                component: yunyin,
                name: '主页',
                hidden: false ,
                children: [

                    { path: '/dataSynthesis', component: graphic, name: '综合数据', hidden: false ,meta: { role: ['admin','editor'] }},
                    { path: '/401', component: Err401, name: '401' },
                ]
            },
            { path: '/hello', component: Hello, name: '欢迎', hidden: false },
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
    { path: '*', redirect: '/401', hidden: true,}
]
