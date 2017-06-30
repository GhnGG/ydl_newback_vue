<template>
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
  <h3 class="title">系统登录</h3>
  <el-form-item prop="account">
    <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
  </el-form-item>
  <el-form-item prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
  </el-form-item>
  <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>

    <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining" >登录</el-button>
    <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
  </el-form-item>
</el-form>
</template>

<script>
import { mapActions } from 'vuex'
import { allget } from '../api/api'
import store from '../vuex/store';
import router from '../router';
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      rules2: {
        account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          //{ validator: validaePass }
        ],
        checkPass: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    //   handleReset2() {
    //     this.$refs.ruleForm2.resetFields();
    //   },
    handleSubmit2(ev) {
        var _this = this;
        this.logining = true;
        var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass
        };
        try {
            if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user信息
                store.dispatch('GetInfo').then(res => { // 拉取user
                  const roles = ['develop'];
                  console.log(roles);
                  store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
                    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                    // next(to.path); // hack方法 确保addRoutes已完成
                  })
                }).catch(err => {
                //   console.log(err);
                });
              }
        } catch (e) {
            console.log(e);
        } finally {

        }

        sessionStorage.setItem('user', JSON.stringify(loginParams));
        console.log(loginParams);
        this.$router.push({
          path: '/hello'
        });
    },
    ...mapActions([
      'GetInfo', // 映射 this.increment() 为 this.$store.dispatch('increment')
    ])
  }
}
</script>

<style lang="css" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
