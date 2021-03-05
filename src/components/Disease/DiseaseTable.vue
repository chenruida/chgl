<template>
  <div>
    <el-button type="primary" @click="handleExport" style="float: right; margin-right: 5px">导出</el-button>
    <el-table
      :data="values"
      height="650"
      border
      style="width: 100%;background-color:transparent;"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="painted_serial"
        label="彩画序号">
      </el-table-column>
      <el-table-column
        prop="painted_number"
        label="彩画编号">
      </el-table-column>
      <el-table-column
        prop="disease_number"
        label="病害编号">
      </el-table-column>
      <el-table-column
        prop="disease_class"
        label="病害类型">
      </el-table-column>
      <el-table-column
        prop="disease_description"
        label="病害描述">
      </el-table-column>
      <el-table-column
        prop="painted_build"
        label="所属建筑">
      </el-table-column>
      <el-table-column
        prop="survey_date"
        label="勘察时间">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: "DiseaseTable",
  props: ['values'],
  data() {
    return {
      selectList: []
    }
  },
  methods: {
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
          const tableHeader = ['彩画序号', '彩画编号', '病害序号', '病害类别', '病害描述','所在建筑','勘察时间'];   // 设置Excel表格的表头
          const filterVal = ['painted_serial', 'painted_number', 'disease_number', 'disease_class', 'disease_description','painted_build','survey_date'];  // 跟表格表头对应的绑定的prop
          let list = JSON.parse(JSON.stringify(this.selectList));   // this.selectList为选中的要导出的数据，用filterTableData方法先处理一下数据格式(要进行深度拷贝，以免过滤的时候，影响页面上展示的数据)，再存到list
          let data = this.formatJson(filterVal, list);
          export_json_to_excel(tableHeader, data, '病害');    //最后一个是导出表格的名字
        })
      }).catch(() => {
      });
    },
    formatJson(filterVal, Data) {
      return Data.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style scoped>

</style>
