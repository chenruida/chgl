<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('BasicSelect')">统计查询</el-button>
      </el-col>
      <el-col :span="4">
        <el-button class="info-btn" v-on:click="loadComponent('BasicForm')">信息录入</el-button>
      </el-col>
    </el-row>
      <component :is='currentCom' ></component>
  </div>

</template>

<script>
import BasicSelect from "./Basic/BasicSelect";
import BasicForm from "./Basic/BasicForm";
export default {
  name: "Basic",
  components: {
    BasicSelect,
    BasicForm
  },
  data() {
    return {
      currentCom:'BasicSelect'
    }
  },
  methods: {
    loadComponent(name){
      this.currentCom=name;
    }
  },

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
