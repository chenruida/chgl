<template>
<div>
  <el-row :gutter="0">
    <el-col :span="4">
      <el-button class="info-btn" v-on:click="loadComponent('ProjectStatic')">工程统计</el-button>
    </el-col>
    <el-col :span="4">
      <el-button class="info-btn" v-on:click="loadComponent('ProjectView')">工程看板</el-button>
    </el-col>
    <el-col :span="4">
      <el-button class="info-btn" v-on:click="loadComponent('ProjectCreate')">创建工程</el-button>
    </el-col>
  </el-row>
  <component :is='currentCom'></component>
</div>
</template>

<script>
import ProjectStatic from "./Project/ProjectStatic";
import ProjectView from "./Project/ProjectView";
import ProjectCreate from "./Project/ProjectCreate";
import eventBus from "./eventBus";
export default {
  name: "Project",
  components:{
    ProjectView,
    ProjectStatic,
    ProjectCreate
  },
  data(){
    return{
      currentCom:"ProjectStatic",
    }
  },
  methods:{
    loadComponent(name){
      this.currentCom = name;
    },
    handleCurrentChange(val){
      eventBus.$emit('build',this.location)
    },
  },
  created() {
    this.handleCurrentChange('map')
  }
}
</script>

<style scoped>
.info-btn {
  margin-right: 30px;
  background-color: #612a2b;
  color: #f1ece8;
  min-width: 100%;
}
</style>
