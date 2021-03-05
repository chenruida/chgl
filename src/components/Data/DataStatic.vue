<template>
  <div class="back">
    <el-row type="flex" justify="space-between">
      <el-col :span="12" class="col">
        <el-row type="flex" justify="space-between">
          <el-col :span="24">
            <img src="../../assets/Data/zhanbi.png" style="max-width: 100% ">
          </el-col>
        </el-row>
        <div id="static" style="height: 650px;max-width: 100%;"></div>
      </el-col>
      <el-col :span="12" class="col">
        <div class="new">
          <img src="../../assets/Data/new.png" style="max-width: 100%">
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="650">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="文件名">
          </el-table-column>
          <el-table-column
            prop="name"
            label="上传人"
            width="180">
          </el-table-column>

        </el-table>
      </el-col>
    </el-row>
  </div>


</template>

<script>
import common from "../common";

export default {
  name: "DataStatic",
  data() {
    return {
      tableData: [{
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭整体场景三维扫描点云'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画精细三维扫描点云'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-檐内-影像数据'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-檐外-影像数据'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-梁架-影像数据'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭及周边场景影像数据'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-梁-存档级三维模型'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-梁-存档级三维模型'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-梁-存档级三维模型'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-梁-存档级三维模型'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-脊檩-存档级三维模型'
      }, {
        date: '2020-12-02',
        name: '王小虎',
        address: '流杯亭彩画局部-檐部-存档级三维模型'
      }],
      legend_data: [],
      format_Data: [],
      type_Data: [],
    }
  },
  methods: {
    draw() {
      let url = common.httpUrl + 'data/countFormatAndType';
      this.class_data = this.axios.get(url).then(res => {
        let FormatList =  res.data[0];
        let TypeList =  res.data[1];
        for (let i = 0; i < FormatList.length; i++) {
          this.format_Data.push({"name":FormatList[i][0],"value":FormatList[i][1]});
        }
        for (let i = 0; i < TypeList.length; i++) {
          this.type_Data.push({"name":TypeList[i][0],"value":TypeList[i][1]});
          this.legend_data.push(TypeList[i][0])
        }
        let option = {
          backgroundColor:'',
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: this.legend_data
          },
          series: [
            {
              name: '数据格式',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                position: 'inner',
                show: false
              },
              labelLine: {
                show: false
              },
              data: this.format_Data
            },
            {
              name: '数据类型',
              type: 'pie',
              radius: ['40%', '55%'],
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              },
              data: this.type_Data
            }
          ]
        };
        let pie = this.$echarts.init(document.getElementById("static"),'vintage');
        pie.setOption(option);
      });
    }
  },
  mounted() {
    this.draw();
  },
}
</script>

<style scoped>
.back {
  border: 1px black solid;
}

.col {
  border: 1px black solid;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
