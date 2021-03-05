<template>
  <div class="cx">
    <div class="select-btn">
      <label>病害类型：</label>
      <el-select v-model="disease_type" multiple placeholder="请选择" size="medium" style="width:40%">
        <el-option
          v-for="item in build_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <label>彩画序号：</label>
      <el-input v-model="input" placeholder="请输入彩画序号" size="medium" style="max-width: 200px"></el-input>
      <el-button icon="el-icon-search" v-on:click="search()">搜索</el-button>
    </div>
    <component :is='currentCom' :values='values'></component>
  </div>
</template>

<script>
import common from "../common";
import DiseaseCharts from "./DiseaseCharts";
import DiseaseTable from "./DiseaseTable";

export default {
  name: "DiseaseSelect",
  components: {
    DiseaseCharts,
    DiseaseTable
  },
  data() {
    return {
      currentCom: 'DiseaseCharts',
      disease_type: [],
      values: [],
      input: '',
      build_options: [{
        value: '裂隙',
        label: '裂隙'
      }, {
        value: '龟裂',
        label: '龟裂'
      }, {
        value: '起翘',
        label: '起翘'
      }, {
        value: '酥解',
        label: '酥解'
      }, {
        value: '空鼓',
        label: '空鼓'
      }, {
        value: '剥离',
        label: '剥离'
      }, {
        value: '地仗脱落',
        label: '地仗脱落'
      }, {
        value: '颜料剥落',
        label: '颜料剥落'
      }, {
        value: '金层剥落',
        label: '金层剥落'
      }, {
        value: '粉化',
        label: '粉化'
      }, {
        value: '变色',
        label: '变色'
      }, {
        value: '积尘',
        label: '积尘'
      }, {
        value: '结垢',
        label: '结垢'
      }, {
        value: '水渍',
        label: '水渍'
      }, {
        value: '油烟污损',
        label: '油烟污损'
      }, {
        value: '动物损害',
        label: '动物损害'
      }, {
        value: '微生物损害',
        label: '微生物损害'
      }, {
        value: '其他污染',
        label: '其他污染'
      }, {
        value: '人为损害',
        label: '人为损害'
      }]
    }
  },
  methods: {
    search() {
      const url = common.httpUrl + 'disease/findByClass';
      this.axios.get(url, {
        params: {
          disease_class: JSON.stringify(this.disease_type),
          name:JSON.stringify(this.input),
        }
      }).then(res => {
        this.values = res.data;
      }, res => {
        console.log('error');
      });
      this.currentCom = 'DiseaseTable'
    },
  }
}
</script>

<style scoped>
.cx {
  border: 1px black solid;
  text-align: center;
}

.select-btn {
  border: 1px black solid;
}
</style>
