<template>
  <div class="login">
    <div id="log">
      <h1> 恭王府彩画管理系统</h1>
      <div id="check"></div>
      <span v-if="error.name" class="err-msg" style="color: red">{{ error.name }} 密码错误</span>
      <div>
        <el-input placeholder="请输入用户名" v-model="data.username" clearable class="input_style_"></el-input>
        <!--      <span v-if="error.name" class="err-msg">{{error.name}}</span>-->
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="data.password" show-password class="input_style_"></el-input>
        <!--      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>-->
      </div>
      <div>
        <el-button type="primary" @click="login" class="login_style">登录</el-button>
      </div>
    </div>
  </div>
</template>


<script>
import common from "./common";

export default {
  name: "Login",
  data() {
    return {
      data: {
        username: '',
        password: '',
      },
      error: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    login() {
      var url = common.httpUrl + 'user/login';
      let postData = this.$qs.stringify({
        username: this.data.username,
        password: this.data.password,
      });
      // this.axios.post(url,postData).then(res => {
      //   if (res.flag) {
      //     this.$router.push('../manager');
      //   } else {
      //     this.error = this.data;
      //   }
      // }, res => {
      // });
      this.axios({
        method: 'post',
        url: url,
        data: postData
      }).then((res) => {
        console.log(res);
        if (res.data.flag) {
          this.$router.push('../manager');
        } else {
          this.error = this.data;
        }
      });
      this.currentCom = 'BasicTable';
    },
    checkUsername() {
      //1.获取用户名值
      var username = $("#username").val();
      //2.定义正则
      var reg_username = /^\w{3,20}$/;

      //3.判断，给出提示信息
      var flag = reg_username.test(username);
      if (flag) {
        //用户名合法
        $("#username").css("border", "");
      } else {
        //用户名非法,加一个红色边框
        $("#username").css("border", "1px solid red");
      }

      return flag;
    },
    checkPassword() {
      //1.获取密码值
      var password = $("#password").val();
      //2.定义正则
      var reg_password = /^\w{4,20}$/;

      //3.判断，给出提示信息
      var flag = reg_password.test(password);
      if (flag) {
        //密码合法
        $("#password").css("border", "");
      } else {
        //密码非法,加一个红色边框
        $("#password").css("border", "1px solid red");
      }

      return flag;
    },
  },
  created() {
    $("#username").blur(this.checkUsername);
    $("#password").blur(this.checkPassword);
    $("#painted-class").css("visibility", "hidden");
  }
}
</script>

<style>
.login {
  background-image: url("../assets/Content/back.png");
  background-size: cover;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}

.input_style_ {
  width: 200px;
  margin-bottom: 10px;
}

.login_style {
  width: 200px;
}

#log {
  position: relative;
  top: 20%;
  left: 40%;
  width: 400px;
  height: 300px;
  /*border: #612a2b 1px solid;*/
  text-align: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

h1 {
  color: #e2d9b0;
}
</style>
