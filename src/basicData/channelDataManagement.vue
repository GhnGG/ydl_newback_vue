<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<div class="block">
                      <span class="demonstration">时间</span>
                      <el-date-picker
                        v-model="time_value"
                        type="daterange"
                        range-separator=" - "
                        placeholder="选择日期范围">
                      </el-date-picker>
                    </div>
				</el-form-item>
                <el-select v-model="value" placeholder="请选择">
                   <el-option
                     v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="pageTw" border fit highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column type="index" width="70" >
				</el-table-column>
				<el-table-column prop="time" label="日期" width="110" sortable fixed="left">
				</el-table-column>
				<el-table-column prop="people" label="总人数" width="100" sortable>
				</el-table-column>
				<el-table-column prop="active" label="日活跃" width="100" sortable>
				</el-table-column>
				<el-table-column prop="device" label="新增设备数" width="130" sortable>
				</el-table-column>
				<el-table-column prop="register" label="新增注册数" min-width="180" sortable>
				</el-table-column>
                <el-table-column prop="rate" label="转化率" min-width="120" sortable>
				</el-table-column>
                <el-table-column prop="act" label="活跃度" min-width="100" sortable>
				</el-table-column>
                <el-table-column prop="ACCU" label="平均使用时长" min-width="150" sortable>
				</el-table-column>
                <el-table-column prop="old_active" label="老活跃用户" min-width="140" sortable>
				</el-table-column>
                <el-table-column prop="old_rate" label="老用户占比" min-width="140" sortable>
				</el-table-column>
                <el-table-column prop="man_num" label="男女占比" min-width="120" sortable>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
				</el-pagination>
			</el-col>
		</template>

	</section>
</template>
<script>
import { allget } from '../api/api';
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				star:"0",
				end:'20',
			    users:[],
				total: 26,
				page: 2,
				listLoading: false,
                time_value:[new Date()-7*24*60*60*1000,new Date()],
                options:[
                    {
                        value: '0',
                        label: '全部'
                    },
                    {
                        value: '1',
                        label: '苹果'
                    },{
                        value: '2',
                        label: '安卓'
                    },{
                        value: '666',
                        label: '苹果-广告'
                    }
                ],
                value:"0",
				sels: [],//列表选中列
			}
		},
		computed:{
			pageTw:function(){
				return this.users.slice(this.star,this.end)
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
            //页面的页数
			handleCurrentChange(val) {
				this.page = val;
				this.star = this.page*20-20;
				this.end = this.star+20;
			},
            // 时间格式化
            YMDdata:function(data){
                let date = new Date(data);
                let yy = date.getFullYear();
                let mm = (date.getMonth() + 1).toString();
                let dd = (date.getDate()).toString();
                // let time = date.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
                mm<10?mm="0"+mm:mm;
                dd<10?dd="0"+dd:dd;
                return yy+'-'+mm+'-'+dd
            },
			//获取用户列表
			getUser() {
                let _this = this ;
                this.listLoading = true;
                let url = '/Base/getBaseData';
                let data ={
                    date_s:this.YMDdata(this.time_value[0]),
                    date_e:this.YMDdata(this.time_value[1]),
                    channel:this.value
                }
                allget(data, url).then(data => {
                    console.log(data);
                    console.log('获取用户信息');
                    _this.users=data.data.data;
                });
                console.log(data);
                this.listLoading = false;
			},

			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		mounted() {
            this.$nextTick(function(){
                this.getUser();
            })
		}
	};

</script>

<style scoped>

</style>
