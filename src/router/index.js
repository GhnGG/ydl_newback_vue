
// 引用vue 和vue-router
import Vue from 'vue';
import VueRouter from 'vue-router';
// 四大板块的引用
import Home from '../Home/home.vue';//总的页面
import operationData from '../Home/operationData.vue';//运营数据
import operationSupport from '../Home/operationSupport.vue';//运营支撑
import anchorManager from '../Home/anchorManager.vue';//主播管理
import systemManagement from '../Home/systemManagement.vue';//系统管理
import Login from '../components/login.vue';//登陆页面
// 图形的页面
import graphic from '../graphic/dataSynthesis.vue';
// 运营支撑的
import User from '../User/richText.vue';//文章编辑
import userQuery from '../User/userQuery.vue'//用户查询
// 页面的基本架构
import Hello from '../Home/hello.vue';//欢迎界面
import Err401 from '../error/401.vue';//错误界面
// 基础数据
import channelDataManagement from '../basicData/channelDataManagement'; //总渠道基础数据
import subChannel from '../basicData/subChannel'; //分渠道数据
import heldOutData from '../basicData/heldOutData'; //留存数据
import liveOnlineDetails from '../basicData/liveOnlineDetails'; //实时在线详情
import realTimeMatching from '../basicData/realTimeMatching'; //实时匹配详情

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
// 其他路由 这里可以使用请求的返回的路由代替
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
                name: '基础数据',
                hidden: false ,
                children: [
                    { path: '/dataSynthesis', component: graphic, name: '综合数据', hidden: false ,meta: { role: ['admin'] }},
                    { path: '/channelDataManagement', component: channelDataManagement, name: '总渠道基础数据', hidden: false ,meta: { role: ['admin'] }},
                    { path: '/subChannel', component: subChannel, name: '分渠道数据', hidden: false ,meta: { role: ['admin'] }},
                    { path: '/heldOutData', component: heldOutData, name: '留存数据', hidden: false ,meta: { role: ['admin'] }},
                    { path: '/liveOnlineDetails', component: liveOnlineDetails, name: '实时在线详情', hidden: false ,meta: { role: ['admin'] }},
                    { path: '/realTimeMatching', component: realTimeMatching, name: '实时匹配详情', hidden: false ,meta: { role: ['admin'] }},
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
                iconCls: 'el-icon-menu',
                hidden: false ,
                children: [
                    { path: '/user', component: User, name: '文章编辑', hidden: false ,meta:{role:['admin'] }},
                    { path: '/userQuery', component: userQuery, name: '用户查询', hidden: false,meta:{role:['admin'] } },    
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
