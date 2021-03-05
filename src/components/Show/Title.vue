<template>
  <div>
    <div class="head">
      <el-row :gutter="20" type="flex" class="row-bg" justify="space-between">
        <el-col :span="4">
          <img src="@/assets/index/icon.gif" style="height: 50px;margin-left: 20px;margin-top: 5px">
        </el-col>
        <el-col :span="16">
          <el-row type="flex" justify="center" id="bts">
            <el-col :span="3">
              <img src="@/assets/index/icon1.gif" class="btn">
              <el-button type="text" class="btn-text" @click="toHome">首页</el-button>
            </el-col>
            <el-col :span="3">
              <img src="@/assets/index/icon2.png" class="btn">
              <el-button type="text" class="btn-text">导览</el-button>
            </el-col>
            <el-col :span="3">
              <img src="@/assets/index/icon3.gif" class="btn">
              <el-button type="text" class="btn-text">文物</el-button>
            </el-col>
            <el-col :span="3">
              <img src="@/assets/index/icon4.gif" class="btn">
              <el-button type="text" class="btn-text">文创</el-button>
            </el-col>
            <el-col :span="3">
              <img src="@/assets/index/icon5.gif" class="btn">
              <el-button type="text" class="btn-text">研究</el-button>
            </el-col>
            <el-col :span="3">
              <img src="@/assets/index/icon6.gif" class="btn">
              <el-button type="text" class="btn-text">关于</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-button type="text" class="btn-login">注册</el-button>
<!--          <el-divider direction="vertical"></el-divider>-->
          <el-button type="text" class="btn-login" @click="dialogFormVisible ">登陆</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="painted-class" >
      <img src="../../assets/painted/class.png" alt="" id="painted-class" @mouseover="move(40)"
           @mouseout="move(-150)" @click="showClass">
    </div>
    <TestDialog :isShow.sync="showDialog"></TestDialog>
  </div>
</template>

<script>
import TestDialog from "./TestDialog";
export default {
  name: "Title",
  components:{
    TestDialog
  },
  data() {
    return {
      timer: 0,
      showDialog: false
    }
  },
  methods: {
    dialogFormVisible() {
      this.$router.push('../login');
    },
    closeDialog(){
      this.showDialog = false;
    },
    toHome() {
      this.$router.push('../home');
    },
    move(iTarget) {
      var oDiv = document.getElementById('painted-class');
      clearInterval(this.timer);
      this.timer = setInterval(function () {
        var speed = 10;
        if (oDiv.offsetTop < iTarget) {
          speed = 10;
        } else {
          speed = -10;
        }

        if (oDiv.offsetTop === iTarget) {
          clearInterval(this.timer);
        } else {
          oDiv.style.top = oDiv.offsetTop + speed + 'px';
        }

      }, 30);
    },
    showClass(){
      this.showDialog = true;
      console.log(this.showDialog);
    }
  },
  mounted() {

  }

}
</script>

<style scoped>

.el-button {
  color: #e2d9b0;
}

.btn-text {
  font-size: 27px;
  font-family: "Microsoft YaHei";
  font-weight: lighter;
  font-style: normal;
}

.btn {
  height: 20px;
  width: 27px;
  margin-top: 15px;
}

.btn-login {
  margin-top: 8px;
  font-size: 15px;
}

#bts {
  margin-top: 3px;
}

#login_title > img {
  text-align: left;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
}

.head {
  position: fixed;
  width: 100%;
  background: url("../../assets/index/backup_02.gif");
  z-index: 999;
}

.painted-class > img {
  left: 100px;
  height: 300px;
  position: absolute;
  top: -150px;
  z-index: 998;
}


</style>
