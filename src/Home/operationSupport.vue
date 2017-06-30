<template lang="html">
    <el-row>
        <!-- 左侧的导航栏 -->
        <div class="left_active">
            <el-menu  class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>综合概况</template>
                    <el-menu-item-group>
                        <!-- <router-link to="/hello"><el-menu-item index="1-1">首页</el-menu-item></router-link>
                        <router-link to="/dataSynthesis"><el-menu-item index="1-2">图形数据</el-menu-item></router-link> -->
                        <router-link to="/user"><el-menu-item index="1-3">用户</el-menu-item></router-link>
                        <!-- <el-menu-item index="1-2"><router-link to="/user">用户</router-link></el-menu-item> -->
                        <!-- <router-link to="/401"><el-menu-item index="1-4">用户3</el-menu-item></router-link> -->
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-message"></i>激活与注册</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">激活数据</el-menu-item>
                        <el-menu-item index="2-2">注册数据</el-menu-item>
                        <el-menu-item index="2-3">转化率</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-message"></i>留存与流失</template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">激活数据</el-menu-item>
                        <el-menu-item index="3-2">注册数据</el-menu-item>
                        <el-menu-item index="3-3">转化率</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-message"></i>活跃与在线</template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">激活数据</el-menu-item>
                        <el-menu-item index="4-2">注册数据</el-menu-item>
                        <el-menu-item index="4-3">转化率</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>


            </el-menu>
        </div>
        <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-col>
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

</style>
