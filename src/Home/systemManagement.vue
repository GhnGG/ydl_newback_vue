<template lang="html">
    <el-row>
        <!-- 左侧的导航栏 -->
        <div class="left_active">
            <el-menu default-active="1-1"  class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>运营数据统计</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">账号管理</el-menu-item>
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
.left_active {
    width: 15%;
    min-width: 150px;
    height: 100% ;
    background-color: #aab1a7;
    float: left;
}
.content-container {
    display: inline-block;
    overflow-y: scroll;
    padding: 20px;
}
.content-wrapper {
    width: 85% !important;
    min-width: 600px;
    height: 100%;

    float: left;
}
</style>
