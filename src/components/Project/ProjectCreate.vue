<template>

<div class="form">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="20">
  <el-steps :active="active" finish-status="success" style="max-width: 50%;margin-left: 20%">
    <el-step title="基本信息" class="step"></el-step>
    <el-step title="选择工程内容" class="step"></el-step>
    <el-step title="提交审核" class="step"></el-step>
  </el-steps>
  <component :is='currentCom' ></component>
  <el-button  @click="onSubmit"  v-show="showRentPrise" class="info-btn">下一步</el-button>
    </el-col>
  </el-row>
  </div>

</template>

<script>
import ProjectForm from "./ProjectForm";
import ProjectForm1 from "./ProjectForm1";
import ProjectForm2 from "./ProjectForm2";
export default {
  name: "ProjectCreate",
  components:{
    ProjectForm,
    ProjectForm1,
    ProjectForm2
  },
  data() {
    return {
      currentCom:'ProjectForm',
      active:0,
      showRentPrise:true,
    }
  },
  methods: {
    onSubmit() {
      this.active++;
      if(this.active ===1){
        this.currentCom='ProjectForm1'
      }
      if(this.active >=2){
        this.currentCom='ProjectForm2';
        this.showRentPrise=false;
      }
    }
  }
}
</script>

<style scoped>
.form{
  border: 1px black solid;
}
.step{
  color: whitesmoke;
}
.info-btn {
  background-color: #612a2b;
  color: #f1ece8;
  position: relative;
  left: 48%;
}
</style>
