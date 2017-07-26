<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<div class="block">
                      <span class="registerTime">注册时间</span>
                      <el-date-picker
                        v-model="time_register"
                        type="daterange"
                        range-separator=" - "
                        placeholder="选择日期范围">	
                      </el-date-picker>
                    </div>
				</el-form-item>
				<el-form-item>
					<div class="block">
                      <span class="landTime">登录时间</span>
                      <el-date-picker
                        v-model="time_land"
                        type="daterange"
                        range-separator=" - "
                        placeholder="选择日期范围">
                      </el-date-picker>
                    </div>
				</el-form-item>
				<el-form-item>	
					<el-select v-model="value" filterable placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-input
						placeholder="请输入UID"
						icon="search"
						v-model="uid">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="page=0,getUser()">查询</el-button>
					<el-button type="primary" v-on:click="handleDownload">导出</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--用户详情的弹出框  -->
		<el-dialog title="用户详情" :visible.sync="dialogVisible" size="large">
			<el-row  v-loading="isgetuser" element-loading-text="拼命加载中" :gutter="20">
				<el-col :span="6" >头像:<div class=" bg-purple"></div>
				 <img style="width:200px;height:200px;" :src="userinfo.icon" alt=""> 
				</el-col>
				<el-col :span="6"><div class="grid-content bg-purple">用户uid：{{userinfo.uid}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">昵称：{{userinfo.nickname}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">手机号：{{userinfo.phone}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">微信号：{{userinfo.unionid}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">用户地址：{{userinfo.address}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">性别：{{userinfo.sex}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">生日：{{userinfo.birthday}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">实名认证状态：{{userinfo.realname_aut_status}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">评价分数：{{userinfo.evaluate_score}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">魅力值：{{userinfo.charm_score}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">聊票：{{userinfo.volumes}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">聊币：{{userinfo.chat_gold}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">累计充值金额：{{userinfo.money}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">渠道：{{userinfo.channel}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">通话定价：{{userinfo.price}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">个性签名：{{userinfo.signature}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">注册时间：{{userinfo.addtime}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">最后登录时间：{{userinfo.lasttime}}</div></el-col>
				<el-col :span="6" style="height:200px">录音签名<div class="grid-content "><audio :src="userinfo.voice_signature" controls="controls" preload="none"></audio>
				</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">职业：{{userinfo.occupation}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">收到的礼物数：{{userinfo.gift}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">相册：{{userinfo.photo_wall}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">累积通话时长：{{userinfo.accumulate_time}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">随机通话时间：{{userinfo.totalrandtime}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">随机通话次数：{{userinfo.totalrandcall}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">网红通话次数：{{userinfo.totalredcall}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">网红通话时间：{{userinfo.totalredtime}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">好友数：{{userinfo.friend}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">好友通话次数：{{userinfo.totalfriendcall}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">好友通话时间：{{userinfo.totalfriendtime}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">偷听次数：{{userinfo.totallistencall}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">偷听时间：{{userinfo.totallistentime}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">用户版本：{{userinfo.version_name}}</div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple">账号状态：{{userinfo.status}}</div></el-col>
			</el-row>
		</el-dialog>
		<!--列表-->
		<template>
			<el-table :data="users" border fit highlight-current-row v-loading="listLoading"  style="width: 100%;" max-height="790" >
				<el-table-column type="index" width="70" >
				</el-table-column>
				<el-table-column prop="addtime" label="注册时间" width="110" sortable >
				</el-table-column>
				<el-table-column prop="channel" label="渠道" width="100" sortable>
				</el-table-column>
				<el-table-column prop="uid" label="UID" width="80" sortable>
				</el-table-column>
				<el-table-column prop="nickname" label="昵称" width="100" sortable>
				</el-table-column>
				<el-table-column prop="phone" label="手机号" min-width="120" sortable>
				</el-table-column>
                <el-table-column  label="用户头像" min-width="120" sortable >
					 <template scope="scope">
						<el-popover trigger="hover" placement="left">
							<img :src="scope.row.icon" alt="" style="width:300px;height:300px;">
							<div slot="reference" class="name-wrapper">
								<img :src="scope.row.icon" alt="" style="width:100px;height:100px;">
							</div>
						</el-popover>
						
					</template>
				</el-table-column>
                <el-table-column prop="sex" :formatter="sex" label="性别" min-width="50" sortable>
				</el-table-column>
                <el-table-column prop="address" label="城市" min-width="70" sortable>
				</el-table-column>
                <el-table-column prop="lasttime" label="最近登陆时间" min-width="120" sortable>
				</el-table-column>
                <el-table-column prop="status" label="状态" :formatter="status" min-width="70" sortable>
				</el-table-column>
                <el-table-column label="操作" min-width="200" >
					<template scope="scope">	
						<el-row :gutter="20">
							<el-col :span="12"><el-button type="info" style="marginBottom:10px;" @click="getuserinfo(scope.row.uid)" >用户详情</el-button></el-col>
							<div v-if="scope.row.status==0">
								<el-col :span="8"><el-button type="danger" style="marginBottom:10px;" >封号</el-button></el-col>
							</div>
							<div v-else-if="scope.row.status==1">
								<el-col :span="8"><el-button type="danger" style="marginBottom:10px;" >解封</el-button></el-col>
							</div>
							<el-col :span="10"><el-button type="warning" style="marginBottom:10px;" >踢下线</el-button></el-col>
							<div v-if="scope.row.is_up_list==0">
								<el-col :span="8"><el-button type="warning" style="marginBottom:10px;" >上榜</el-button></el-col>
							</div>
							<div v-else-if="scope.row.is_up_list==1">
								<el-col :span="8"><el-button type="danger" style="marginBottom:10px;" >下榜</el-button></el-col>
							</div>
						</el-row>
					</template>
				</el-table-column>
			</el-table>
			<!--工具条-->
			<el-col :span="24" class="toolbar">
				<el-pagination layout="total,prev, pager, next,jumper" @current-change="handleCurrentChange" :page-size="20" :total="totalpage" :current-page="page+1" style="float:right; ">
				</el-pagination>
			</el-col>
		</template>

	</section>
</template>
<script>
import { allget } from '../api/api';
import store from '../vuex/store';
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				users:[],
				userinfo:[],
				chartLine: null,
				totalpage:null,
				page: 0,
				listLoading: false,
                time_register:[new Date()-180*24*60*60*1000,new Date()],
				time_land:[new Date()-180*24*60*60*1000,new Date()],
                options:[],
                value:"",
				uid:null,
				bigpic:"",
				ishow:true,
				dialogVisible: false,
				isgetuser:false,
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
            //页面的页数
			handleCurrentChange(val) {
				//服务器的第一页是0 所以 这里要 -1
				this.page = val-1;
				this.getUser();
				// console.log(val,this.page);
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
				let url = '/User/getUser';
                let data ={
					page:this.page,
                    date_s:this.YMDdata(this.time_register[0]),
                    date_e:this.YMDdata(this.time_register[1]),
                }
				this.uid==null||this.uid==""?delete data.find:delete data.date_s, delete data.date_e, data.find=this.uid;
				
				this.value==null||this.value==""?delete data.channel:data.channel=this.value;
                allget(data, url).then(data => {
                    // console.log(data);
                    // console.log('获取用户信息');
					_this.totalpage = 1000;
                    _this.users = data.data.data;
					
                }).catch(function(err){
					console.log(err);
				});
				// console.log(data);
                this.listLoading = false;
			},
			//获取单个用户的信息 
			getuserinfo(uid){
				let _this =this;
				console.log(uid);
				this.isgetuser=true;
				let url = '/User/getUserInfo';// /User/getUserInfo
                let data ={
                    uid:uid
				}
                allget(data, url).then(data => {
					if (data.data.ret) {
						this.userinfo = data.data.data[0];
						this.dialogVisible = true;
						this.isgetuser=false;
					} else {
						this.$notify.error({
                                title: '错误',
                                message: res.data.msg,
                                duration: 1000,
                                offset: 100
							}); 
						this.isgetuser=false;
					}
                }).catch(function(err){
					console.log(err);
					_this.isgetuser=false;
					_this.$notify.error({
						title: '错误',
						message: '遇到了未知的问题请联系管理员解决',
						duration: 0
					});
				});
				
			},
			// 渠道数组
            arrychannel(){
                let _this = this;
                let channelid = store.getters.channelid.split(',');
                let channelname = store.getters.channelname.split(',');
				_this.options.push({
                    value:"",
                    label:'可以输入搜索'
                })
                channelid.forEach(function(val,index){
                    _this.options.push({
                        value:channelid[index],
                        label:channelname[index]
                    })
                })
            },
			// 第二种导出方式
			handleDownload() {
	          	require.ensure([], () => {
  	            const { export_json_to_excel } = require('../vendor/Export2Excel');
  	            const tHeader = ['日期','总人数','日活跃','新增设备数','新增注册数','转化率','活跃度','平均使用时长','老活跃用户','老用户占比','男女占比'];
  	            const filterVal = ['time','people','active','device','register','rate','act','ACCU','old_active','old_rate','man_woman_rate'];
  	            const data = this.formatJson(filterVal, this.users);
  	            export_json_to_excel(tHeader, data, '总渠道数据');
  	          })
	        },
			// 导出的一部分东西
			formatJson(filterVal, jsonData) {
	          	return jsonData.map(v => filterVal.map(j => {
  	            if (j === 'timestamp') {
  	              return parseTime(v[j])
  	            } else {
  	              return v[j]
  	            }
  	          }))
		    },
			// 时间
			time:function(row, column){
				let dd = parseInt(row.ACCU / 60 / 60 / 24);
				let hh = parseInt(row.ACCU / 60 / 60 % 24);
				let mi = parseInt(row.ACCU / 60 % 60);
				let ss = parseInt(row.ACCU % 60);
				return dd + '天' + hh + '时' + mi + '分' + ss + '秒';
			},
			// 性别转换
			sex(row){
				return row.sex==1?'男':'女';
			},
			//状态的转换
			status(row){
				return row.status==0?'正常':row.status==1?'已提下线':'封号中'
			},
			// 过滤器
			rate:function(row, column){
				let rate = '1'+':'+row.man_woman_rate
				return rate
			},
		},
		mounted() {
            this.$nextTick(function(){
				this.getUser();
				this.arrychannel();
            })
		}
	};

</script>

<style >
.bg-purple {
    background: #c0d9f5;
}
.grid-content {
    border-radius: 4px;
    height: 36px;
	margin-bottom: 5px;
	line-height: 36px;
	text-align: center;
}	
</style>
