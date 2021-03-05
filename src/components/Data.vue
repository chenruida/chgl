<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('DataStatic')">数据统计</el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('DataSearch')">综合查询</el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('DataUp')">数据上传</el-button>
      </el-col>
    </el-row>
    <component :is='currentCom'></component>
  </div>
</template>

<script>
import DataSearch from "./Data/DataSearch";
import DataStatic from "./Data/DataStatic";
import eventBus from "./eventBus";
import DataUp from "./Data/DataUp";
export default {
  name: "Data",
  components:{
    DataSearch,
    DataStatic,
    DataUp
  },
  data(){
    return{
      currentCom:'DataStatic',
    }
  },
  methods:{
    loadComponent(name){
      this.currentCom=name;
    }
  },
  created() {

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
