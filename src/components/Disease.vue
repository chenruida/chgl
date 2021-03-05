<template>
  <div class="back">
    <el-row :gutter="0">
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('DiseaseSelect')">统计查询</el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('DiseaseForm')">信息录入</el-button>
      </el-col>
    </el-row>
    <component :is='currentCom'></component>
  </div>
</template>

<script>
import DiseaseForm from "./Disease/DiseaseForm";
import DiseaseSelect from "./Disease/DiseaseSelect";
import eventBus from "./eventBus";
export default {
  name: "Disease",
  components: {
    DiseaseSelect,
    DiseaseForm
  },
  data() {
    return {
      currentCom:'DiseaseSelect'
    }
  },
  methods: {
    loadComponent(name){
      this.currentCom=name;
    }, handleCurrentChange(val){
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
