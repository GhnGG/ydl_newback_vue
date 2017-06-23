<template lang="html">
    <el-row class="container">
        <!-- 头部的导航栏 -->
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo nav-head" mode="horizontal" @select="handleSelect">
          <div class="logo"></div>
          <el-menu-item index="1"><router-link to="/yunyinshuju">运营数据</router-link></el-menu-item>
          <el-menu-item index="2">运营支撑</el-menu-item>
          <el-menu-item index="3">订单日志</el-menu-item>
          <el-menu-item index="4">系统管理</el-menu-item>
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
        <transition name="fade" mode="out-in">
            <router-view  class="nav-view">

            </router-view>
        </transition>

    </el-row>

</template>

<script>
export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        sysUserName: '',
        sysUserAvatar: 'http://imgtu.5011.net/uploads/content/20170410/2880121491810236.jpg',
      };
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
    background-image: url(../assets/dianliao-logo.png) ;
    background-size: cover;
    margin:15px 10px 0 50px;
}
.nav-view {
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

</style>
