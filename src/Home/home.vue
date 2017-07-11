<template lang="html">
    <el-row class="container">
        <!-- 头部的导航栏 -->
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo nav-head" mode="horizontal" router @select="handleSelect">

          <div class="logo"></div>
          <el-menu-item index="operationData">运营数据</el-menu-item>
          <el-menu-item index="operationSupport">运营支撑</el-menu-item>
          <el-menu-item index="anchorManager">主播管理</el-menu-item>
          <el-menu-item index="systemManagement">系统管理</el-menu-item>
          <el-col :span="4" class="userinfo">
              <el-dropdown trigger="hover">
                  <span class="el-dropdown-link userinfo-inner"><img :src="sysUserAvatar" /> {{sysUserName}}</span>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>我的消息</el-dropdown-item>
                      <el-dropdown-item>设置</el-dropdown-item>
                      <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </el-col>
        </el-menu>
        <!-- 左侧的导航栏 -->
        <!-- <div class="left_active">
            <el-menu default-active="1-1"  class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" >
                <template >
                    <el-submenu index="1" >
                        <template slot="title"><i class="el-icon-message"></i>{{OperationData.name}}</template>
                        <el-menu-item-group v-for="item in OperationData.children">
                            <router-link :to="item.path"><el-menu-item index="1-1">{{item.name}}</el-menu-item></router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
            </el-menu>
        </div> -->

        <el-col :span="24" class="content-all-wrapper">
            <transition name="el-fade-in-linear" mode="out-in" >
                <router-view  class="nav-view">

                </router-view>
            </transition>
        </el-col>
    </el-row>

</template>

<script>
import { mapGetters } from 'vuex';
import store from '../vuex/store';
export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        sysUserName: '',
        sysUserAvatar: 'http://imgtu.5011.net/uploads/content/20170410/2880121491810236.jpg',
        // routes:"",
      };
    },
    mounted:function(){
        this.$nextTick(function(){

        })
    },
    computed: {
        ...mapGetters([
          'permission_routers'
        ])
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        logout: function () {
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
                //type: 'warning'
            }).then(() => {
                sessionStorage.removeItem('user');
                //这个不能动
                location.reload();
            }).catch(() => {

            });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="css">
.userinfo {
    text-align: right;
    padding-right: 35px;
    float: right !important;
}
.userinfo-inner {
    cursor: pointer;
    color:#fff;
}
.userinfo-inner img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
}
.logo {
    display: inline-block;
    float: left;
    width: 58px;
    height: 28px;
    background-image: url(http://dianliaotools.oss-cn-shenzhen.aliyuncs.com/common/dianliao-logo.png) ;
    background-size: cover;
    margin:15px 10px 0 50px;
}
.nav-view {
    /*height: 100%;*/
    width: 100%;
    min-width: 1080px;
}
.nav-head {
    min-width: 1080px;
}
.container　{
    min-width: 1080px;
    min-height: 660px;
}
@media screen and (min-height: 660px) {
    .left_active {
        width: 13%;
        min-width: 150px;
        min-height: 660px;
        height: 100% ;
        background-color: #eef1f6;
        float: left;
    }
}
.left_active {
    width: 13%;
    min-width: 150px;
    min-height: 920px;
    height: 100% ;
    background-color: #324157;
    float: left;
}
.content-all-wrapper {
    /*margin-top: 2px;*/
    height: 100%;
    min-width: 1200px;
}
.content-container {
    display: inline-block;
    overflow-y: scroll;
    padding: 20px;
}
.content-wrapper {
    width: 87% !important;
    height: 100%;

    float: left;
}
</style>
