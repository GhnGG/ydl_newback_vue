<template lang="html">
    <el-row>
        <!-- 左侧的导航栏 -->
        <div class="left_active">
            <el-menu  class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" theme="dark" router>
                <div v-for="(item,indexs) in dataView">
                    <el-submenu :index="indexs+''">
                        <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                        <template v-for="child in item.children ">
                            <el-menu-item-group >
                                <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
                                <!-- <el-menu-item index="userQuery">用户查询</el-menu-item>     -->
                            </el-menu-item-group>
                        </template>
                    </el-submenu>
                </div>
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
import store from '../vuex/store';
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      sysUserName: '',
      
    };
  },
  computed:{
    dataView(){
       let thatDdta = store.getters.addRouters;
       let data =  thatDdta.filter(data => {
           if(data.name=='运营支撑'){
               return  data
           }
       }) 
       return data[0].children
    }
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
