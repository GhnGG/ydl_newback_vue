<template lang="html">
    <el-row>
        <!-- 左侧的导航栏 -->
        <div class="left_active">
            <el-menu  class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" theme="dark" router>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>基础数据</template>
                    <el-menu-item-group>
                        <el-menu-item index="channelDataManagement">总渠道基础数据</el-menu-item>
                        <el-menu-item index="dataSynthesis">图形数据</el-menu-item>
                        <el-menu-item index="subChannel">分渠道数据</el-menu-item>
                        <el-menu-item index="heldOutData">留存数据</el-menu-item>
                        <el-menu-item index="liveOnlineDetails">实时在线详情</el-menu-item>
                        <el-menu-item index="realTimeMatching">实时匹配详情</el-menu-item>
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
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-message"></i>运营数据统计</template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1">激活数据</el-menu-item>
                        <el-menu-item index="5-2">注册数据</el-menu-item>
                        <el-menu-item index="5-3">转化率</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-message"></i>财务统计</template>
                    <el-menu-item-group>
                        <el-menu-item index="6-1">激活数据</el-menu-item>
                        <el-menu-item index="6-2">注册数据</el-menu-item>
                        <el-menu-item index="6-3">转化率</el-menu-item>
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
