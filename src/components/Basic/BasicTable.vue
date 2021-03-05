<template>
  <div class="table">
    <el-button type="primary" @click="handleExport" style="float: right; margin-right: 5px">导出</el-button>
    <el-table
      :data="values"
      height=650
      border
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      @selection-change="handleSelectionChange"
      :header-cell-style="{background:'transparent'}"
      id="tableData"
    >
      <el-table-column
        type="selection"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        fixed
        prop="painted_serial"
        label="彩画序号"
        style="background-color:transparent;font-size: 5px">
      </el-table-column>
      <el-table-column
        fixed
        prop="painted_number"
        label="彩画编号"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="area_name"
        label="所属区域"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="area_number"
        label="区域编号"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="build_number"
        label="建筑编号"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_build"
        label="所属建筑">
      </el-table-column>
      <el-table-column
        prop="painted_unit"
        label="所属构件">
      </el-table-column>
      <el-table-column
        prop="painted_class"
        label="彩画类别"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_degree"
        label="彩画等级"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_range"
        label="彩画范围">
      </el-table-column>
      <el-table-column
        prop="painted_direction"
        label="彩画方向"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_location"
        label="彩画位置"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_size"
        label="展开尺寸（长×高 mm）"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_history"
        label="年代"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_story"
        label="绘制内容"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_craft"
        label="工艺做法"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        prop="painted_repair"
        label="历史沿革"
        style="background-color:transparent;">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="address"
        label="操作"
        style="background-color:transparent;">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" plain @click="show(scope.row.painted_number)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import eventBus from "../eventBus";

export default {
  name: "BasicTable",
  props: ['values'],
  height:0,
  data() {
    return {
      myTableData: [],
      location: []
    }
  },
  created() {
    this.myTableData = this.tableData;
    this.handleCurrentChange('map');

  },
  methods: {
    getAutoHeight() {
      let el = document.querySelector("#tableData"),
        elParent = el.parentNode,
        pt = this.getStyle(elParent, "paddingTop"),
        pb = this.getStyle(elParent, "paddingBottom");
      // 一定要使用 nextTick 来改变height 不然不会起作用
      this.$nextTick(() => {
        this.height = elParent.clientHeight - (pt + pb) + "px";
      });
    },
    // 获取样式 我们需要减掉 padding-top， padding-bottom的值
    getStyle(obj, attr) {
      // 兼容IE浏览器
      let result = obj.currentStyle
        ? obj.currentStyle[attr].replace("px", "")
        : document.defaultView
          .getComputedStyle(obj, null)[attr].replace("px", "");
      return Number(result);
    },
    handleCurrentChange(val) {
      this.location = val;
      eventBus.$emit('build', this.location);
      // eventBus.$emit('number', this.location)
    },
    //选中某条数据时
    handleSelectionChange(row) {
      this.selectList = row;     // 将选中的数据给selectList
      //   console.log(this.selectList)
    },
    handleExport() {
      if (this.selectList.length === 0) {
        this.$message({
          message: '请至少选择一条需要导出的数据',
          type: 'warning'
        });
        return;
      }
      this.$confirm('该操作将导出选中的数据，是否继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //导出
        require.ensure([], () => {
          const {export_json_to_excel} = require('@/excel/Export2Excel');   //注意这个Export2Excel路径
          const tableHeader = ['彩画序号', '彩画编号', '所属区域', '区域编号', '所属建筑', '建筑编号', '彩画类别', '彩画等级', '彩画范围', '彩画方向', "彩画位置", '展开尺寸（长×高 mm）', '年代', '绘制内容', '工艺做法', '历史沿革'];   // 设置Excel表格的表头
          const filterVal = ['painted_serial', 'painted_number', 'painted_build', 'painted_class', 'painted_degree', 'painted_range', 'painted_direction', 'painted_location', 'painted_size', 'painted_history', 'painted_story', 'painted_craft', 'painted_repair'];  // 跟表格表头对应的绑定的prop
          let list = JSON.parse(JSON.stringify(this.selectList));   // this.selectList为选中的要导出的数据，用filterTableData方法先处理一下数据格式(要进行深度拷贝，以免过滤的时候，影响页面上展示的数据)，再存到list
          let data = this.formatJson(filterVal, list);
          export_json_to_excel(tableHeader, data, '基本信息');    //最后一个是导出表格的名字
        })
      }).catch(() => {
      });
    },
    formatJson(filterVal, Data) {
      return Data.map(v => filterVal.map(j => v[j]))
    },
    //查看彩画详细内容
    show(name) {
      // let routeUrl = this.$router.resolve({
      //   path: "static/",
      //   query: {id:name}
      // });
      let routeUrl = 'static/painted/'+name+'-Image/index.html'
      window.open(routeUrl, '_blank');
    },
    autoHeight(){
      this.height = window.innerHeight - this.$refs.table.$el.offsetTop - 50;
    }
  },
  mounted() {
    // this.getAutoHeight();
    this.autoHeight();
  }

}
</script>

<style>

table {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
