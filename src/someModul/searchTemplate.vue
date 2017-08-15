<template>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters">
            <el-form-item>
                <div class="block">
                    <span class="registerTime">注册时间</span>
                    <el-date-picker v-model="time_register" type="daterange" range-separator=" - " placeholder="选择日期范围">
                    </el-date-picker>
                </div>
            </el-form-item>
            <el-form-item>
                <div class="block">
                    <span class="landTime">登录时间</span>
                    <el-date-picker v-model="time_land" type="daterange" range-separator=" - " placeholder="选择日期范围">
                    </el-date-picker>
                </div>
            </el-form-item>
            <el-form-item>
                <el-select v-model="value" filterable placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="请输入UID" icon="search" v-model="uid">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-on:click="page=0,getUser()">查询</el-button>
                <el-button type="primary" v-on:click="handleDownload">导出</el-button>
                {{message}}
            </el-form-item>
        </el-form>
    </el-col>
</template>
<script>
    export default {
        name:'search',
        data(){
            return {
                filters: {
                    name: ''
                },
                page: 0,
                time_register: [new Date() - 180 * 24 * 60 * 60 * 1000, new Date()],
                time_land: [new Date() - 180 * 24 * 60 * 60 * 1000, new Date()],
                options: [],
                value: "",
                uid: null, 
                getdata:null,
            }
        },
        //这个参数用来接受父组件的值是一个数组
        props:['message'],
        methods:{
            getUser(){
                //使用$emit 可以把子组件的参数传给父组件 记得要在父组件使用v-bing 或者是 $on 显示的调用Userdata
                this.$emit('Userdata',this.getdata);   
            }, 
            handleDownload(){
                //第二个参数是可以不传的
                this.$emit('handleDownload');     
            },
        },
        computed:{
            //为了不影响父组件传过来的值 可以在计算属性这里进行  改变  不会影响到父组件   
        },
    }

</script>