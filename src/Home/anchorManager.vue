<template lang="html">
    <el-row>
        <!-- 左侧的导航栏 -->
        <div class="left_active">
            <el-menu   class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" theme="dark">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>财务统计</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">激活数据</el-menu-item>
                        <el-menu-item index="1-2">注册数据</el-menu-item>
                        <el-menu-item index="1-3">转化率</el-menu-item>
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
