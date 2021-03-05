<template>
  <div class="cx">
    <div class="select-btn">
      <label>建筑名称：</label>
      <el-select v-model="values.build_value" multiple placeholder="请选择">
        <el-option
          v-for="item in build_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <label>彩画类型：</label>
      <el-select v-model="values.type_value" multiple placeholder="请选择">
        <el-option
          v-for="item in type_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <label>构件位置：</label>
      <el-select v-model="values.unit" multiple placeholder="请选择">
        <el-option
          v-for="item in unit_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <label>彩画年代：</label>
      <el-select v-model="values.year_value" multiple placeholder="请选择">
        <el-option
          v-for="item in year_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button icon="el-icon-search" v-on:click="search()">搜索</el-button>
    </div>
    <component :is='currentCom' :values="tableData"></component>
  </div>
</template>

<script>
import BasicCharts from "./BasicCharts";
import BasicTable from "./BasicTable";
import common from "../common";

export default {
  name: "BasicSelect",
  components: {
    BasicCharts,
    BasicTable
  },
  data() {
    return {
      currentCom: 'BasicCharts',
      unit_options: [{
        value: '瓜柱',
        label: '瓜柱'
      }, {
        value: '脊部',
        label: '脊部'
      }, {
        value: '梁',
        label: '梁'
      }, {
        value: '檐部',
        label: '檐部'
      }
      ],
      build_options: [{
        value: '银安殿',
        label: '银安殿'
      }, {
        value: '嘉乐堂',
        label: '嘉乐堂'
      }, {
        value: '葆光堂',
        label: '葆光堂'
      }, {
        value: '锡晋斋',
        label: '锡晋斋'
      }, {
        value: '多福轩',
        label: '多福轩'
      }, {
        value: '乐道堂',
        label: '乐道堂'
      }, {
        value: '后罩楼',
        label: '后罩楼'
      }, {
        value: '花园中路',
        label: '花园中路'
      }, {
        value: '箭道',
        label: '箭道'
      }, {
        value: '西洋门',
        label: '西洋门'
      }, {
        value: '独乐峰',
        label: '独乐峰'
      }, {
        value: '蝠池',
        label: '蝠池'
      }, {
        value: '安善堂',
        label: '安善堂'
      }, {
        value: '明道斋',
        label: '明道斋'
      }, {
        value: '棣华轩',
        label: '棣华轩'
      }, {
        value: '福字碑',
        label: '福字碑'
      }, {
        value: '滴翠岩',
        label: '滴翠岩'
      }, {
        value: '退一步斋与韵花簃',
        label: '退一步斋与韵花簃'
      }, {
        value: '邀月台',
        label: '邀月台'
      }, {
        value: '龙王庙',
        label: '龙王庙'
      }, {
        value: '榆关',
        label: '榆关'
      }, {
        value: '妙香亭',
        label: '妙香亭'
      }, {
        value: '山神庙',
        label: '山神庙'
      }, {
        value: '秋水山房',
        label: '秋水山房'
      }, {
        value: '益智斋',
        label: '益智斋'
      }, {
        value: '方塘水榭',
        label: '方塘水榭'
      }, {
        value: '凌倒影',
        label: '凌倒影'
      }, {
        value: '澄怀撷秀',
        label: '澄怀撷秀'
      }, {
        value: '曲径通幽',
        label: '曲径通幽'
      }, {
        value: '蓺蔬圃',
        label: '蓺蔬圃'
      }, {
        value: '沁秋亭',
        label: '沁秋亭'
      }, {
        value: '垂花门',
        label: '垂花门'
      }, {
        value: '竹子院',
        label: '竹子院'
      }, {
        value: '香雪坞',
        label: '香雪坞'
      }, {
        value: '牡丹园',
        label: '牡丹园'
      }, {
        value: '大戏楼',
        label: '大戏楼'
      }, {
        value: '听雨轩',
        label: '听雨轩'
      }],
      type_options: [{
        value: '旋子彩画',
        label: '旋子彩画',
      }, {
        value: '和玺彩画',
        label: '和玺彩画'
      }, {
        value: '苏式彩画',
        label: '苏式彩画'
      }],
      year_options: [
        {
          value: '80年代',
          label: '80年代'
        }, {
          value: '清',
          label: '清'
        }, {
          value: '民国',
          label: '民国'
        }
      ],
      values: {
        build_value: [],
        type_value: [],
        year_value: [],
        unit: [],
      },
      tableData: [],
      globalHttpUrl: common.httpUrl
    }
  },
  methods: {
    search() {
      var url = this.globalHttpUrl + 'paintedInfo/findByValues';
      this.axios.get(url, {
        params: {
          build: JSON.stringify(this.values.build_value),
          pClass: JSON.stringify(this.values.type_value),
          history: JSON.stringify(this.values.year_value),
          unit:JSON.stringify(this.values.unit),
        }
      }).then(res => {
        this.tableData = res.data;
      }, res => {
        console.log('error');
      });
      this.currentCom = 'BasicTable';

    }
  },
  created() {

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
