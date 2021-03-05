<template id="dialog" style="z-index: 999999">
  <div class="dialog" v-if="isShow" style="z-index: 999999">
    <div class="dialog_mask"></div>
    <div class="dialog_container">
      <div class="dialog_content">
        <img :src="close_path" alt="" style="position: absolute;right: 35px;top: 15px" @click="closeDialog">
        <div class="dialog-img">
          <img :src="path" alt="" style="width: 850px">
        </div>
        <div class="dialog_btn">
          <el-button @click="next">下一页</el-button>
          <el-button @click="upPage">上一页</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import p1 from '../../assets/course/p1.png'
import p2 from '../../assets/course/p2.png'
import p3 from '../../assets/course/p3.png'
import p4 from '../../assets/course/p4.png'
import p5 from '../../assets/course/p5.png'
import p6 from '../../assets/course/p6.png'
import p7 from '../../assets/course/p7.png'
import p8 from '../../assets/course/p8.png'
import close from '../../assets/course/close.png'

export default {
  name: "TestDialog",
  components: {
    p1, p2, p3, p4, p5, p6, p7, p8,close
  },
  props: ['isShow'],
  data() {
    return {
      num: 0,
      img:[p1, p2, p3, p4, p5, p6, p7, p8],
      path: p1,
      close_path: close,
      show: this.isShow,
    }
  },
  methods: {
    next() {
      if (this.num < 7) {
        this.num ++;
        this.path = this.img[this.num]
      }
    },
    upPage() {
      if (this.num > 0) {
        this.num --;
        this.path = this.img[this.num]
      }
    },

    closeDialog() {
      this.$emit("update:isShow", false);
      console.log(this.isShow);
    }
  },
  mounted() {
    this.show = this.isShow;
  }
}
</script>

<style scoped>
.dialog {
}

.dialog_mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.dialog_container {
  background: url("../../assets/course/back.png") transparent;
  background-size: 100% 100%;
  width: 900px;
  height: 430px;
  position: relative;
  /*border-radius: 10px;*/
  border: none;
  top: 300px;
  margin: 0 auto;
}

.dialog_content {
  width: 900px;
  height: 430px;
  /*flex 布局*/
  display: flex;
  /*实现垂直居中*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;

  text-align: justify;
}

.dialog_btn {
  position: absolute;
  bottom: 8px;
  left: 300px;
}

.el-button {
  background: url("../../assets/course/next.png");
  background-size: cover;
  color: black;
  text-decoration: none;
  width: 163px;
  display: inline-block;
  text-align: center;
  border: none;
}

.dialog-img {
  position: absolute;
  /*bottom: 80px;*/
  /*left: 120px;*/
}

</style>
