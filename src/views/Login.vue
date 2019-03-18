<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="c_ruleForm login-container">
    <el-form-item prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="text" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-button id="login-btn" v-on:click="login">登录</el-button>
  </el-form>


</template>


<script>
  import {requestLogin} from '../api/api';


  export default {
    name: "Login",
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };

      return {
        ruleForm: {
          username:'',
          password:''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {}
          ]
        }
      }
    },
    methods: {
      login: function () {
        var loginParams = {
          "username": this.ruleForm.username,
          "password": this.ruleForm.password
        }
        console.log(loginParams);
        var _this = this;

        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            requestLogin(loginParams).then(data => {
              console.log(data);
              if (data.code == 200) {
                _this.$router.push({path: '/home'});
              } else if (data.code === 999) {
                alert("用户名或密码不正确!");
              }
            }).catch(error => {
              alert(error);
            })
          } else {
            console.log("error submit !!");
            return false;
          }
        })

      }
    }
  };
</script>
<style scoped>

</style>
