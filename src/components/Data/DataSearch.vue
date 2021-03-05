<template>
  <div class="cx">
    <div class="select-btn">
      <label>数据类型：</label>
      <el-select v-model="class_value" multiple placeholder="请选择">
        <el-option
          v-for="item in class_options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <label>彩画名称：</label>
      <el-input v-model="input" placeholder="请输入彩画序号" size="medium" style="max-width: 200px"></el-input>
      <el-button icon="el-icon-search" v-on:click="search">搜索</el-button>
    </div>
    <el-table
      :data="tableData"
      height="700px"
      border
      style="width: 100%">
      <el-table-column
        prop="data_id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="data_dir"
        label="文件夹名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="data_file"
        label="文件名">
      </el-table-column>
      <el-table-column
        prop="data_type"
        label="数据类型">
      </el-table-column>
      <el-table-column
        prop="data_format"
        label="数据格式">
      </el-table-column>
      <el-table-column
        prop="area_name"
        label="所属区域">
      </el-table-column>
      <el-table-column
        prop="area_number"
        label="区域编号">
      </el-table-column>
      <el-table-column
        prop="build_name"
        label="所属建筑">
      </el-table-column>
      <el-table-column
        prop="build_number"
        label="建筑编号">
      </el-table-column>
      <el-table-column
        prop="painted_numbers"
        label="所属彩画">
      </el-table-column>
      <el-table-column
        prop="data_description"
        label="数据描述">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="address"
        label="操作"
        style="background-color:transparent;">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain @click="downLoad(scope.row)">下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import common from "../common";
export default {
  name: "DataSearch",
  components:{
  },
  data() {
    return {
      input: '',
      class_value: '',
      class_options:
        [{value: '彩画展开图', label: '彩画展开图'},
          {value: '彩画正射影像', label: '彩画正射影像'},
          {value: '展示级三维模型', label: '展示级三维模型'},
          {value: '存档级三维模型', label: '存档级三维模型'},
          {value: '影像数据', label: '影像数据'},
          {value: '三维点云', label: '三维点云'}],
      tableData: [],
      downLoad(row){
        let filePath = "static/Data/test/test.zip";
        window.open(filePath);
      }
    }
  },
  methods: {
    search() {
      const url = common.httpUrl + 'data/find';
      let paintedStr = '%'+this.input+'%';
      this.axios.get(url,{
        params:{
          type:JSON.stringify(this.class_value),
          painted:JSON.stringify(paintedStr),
        }
      }).then(res => {
        this.tableData = res.data;
      },res =>{
        console.log('error');
      });
      // this.currentCom = 'BasicTable';
    },

  }
}
</script>

<style scoped>
.cx {
  border: 1px black solid;
  text-align: center;
  height: 100%;
  width: 100%;
}

.select-btn {
  border: 1px black solid;
}
</style>
