<template>
  <div>
    <el-row type="flex" class="row-bg hidden-xs-only" justify="center">
      <el-col :xs="12" :sm="12" :md="12" :lg="9">
        <div id="pie1" :style="{width: '400px',height:'300px',border:'1px block solid'}"></div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="9">
        <div id="pie2" :style="{width: '400px',height:'300px',border:'1px block solid'}"></div>
      </el-col>
    </el-row>
    <el-row class="row-bg hidden-xs-only" type="flex" justify="center" >
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div id="bar" :style="{width: '1000px',height:'300px',border:'1px block solid'}"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import common from "../common";

export default {
  name: "DiseaseCharts",
  data() {
    return {
      build_type: [],
      build_data: [],
      type_type: ['旋子彩画', '和玺彩画', '苏式彩画'],
      type_data: [
        {value: 464, name: '旋子彩画'},
        {value: 735, name: '和玺彩画'},
        {value: 548, name: '苏式彩画'}],
      year_type: ['80年代', '清', '民国'],
      year_data: [
        {value: 234, name: '80年代'},
        {value: 135, name: '清'},
        {value: 1548, name: '民国'}
      ]
    }
  },
  methods: {
    drawChart() {
      let url = common.httpUrl + 'disease/staticDisease';
      this.class_data = this.axios.get(url, {
        params: {
          attrs: 'disease_class',
        }
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.build_data.push(res.data[i][1]);
          this.build_type.push(res.data[i][0]);
        }
        let bar = this.$echarts.init(document.getElementById("bar"),'vintage');
        //建筑类型
        let bar_option = {
          backgroundColor:'',
          title: {
            text: "病害类型"
          },
          tooltip: {},
          legend: {
            data: ["病害个数"]
          },
          xAxis: {
            data: this.build_type,
            axisLabel :{
              interval:0,
            },
            textStyle: {
              color: '#fff',
              fontSize:'8'
            }
          },
          yAxis: {},
          series: [
            {
              name: "病害个数",
              type: "bar",
              data: this.build_data,
              barWidth: 30,
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        bar.setOption(bar_option);
      });
    },
    drawPie1() {
      let url = common.httpUrl + 'paintedInfo/staticPainted';
      this.class_data = this.axios.get(url, {
        params: {
          attrs: 'painted_history',
        }
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.year_data[i].value = res.data[i][1];
          this.year_data[i].name = res.data[i][0];
          this.year_type[i] = res.data[i][0];
        }
        let pie1 = this.$echarts.init(document.getElementById("pie1"),'vintage');
        let pie1_option = {
          backgroundColor: '',
          title: {
            text: "彩画年代"
          },
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 0,
            top: 30,
            data: this.year_type
          },
          series: [
            {
              name: '彩画年代',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.year_data
            }
          ]
        };
        pie1.setOption(pie1_option);
      });
    },
    drawPie2() {
      let url = common.httpUrl + 'paintedInfo/staticPainted';
      this.class_data = this.axios.get(url, {
        params: {
          attrs: 'painted_class',
        }
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.type_data[i].value = res.data[i][1];
          this.type_data[i].name = res.data[i][0];
          this.type_type[i] = res.data[i][0];
        }
        let pie2 = this.$echarts.init(document.getElementById("pie2"),'vintage');
        let pie2_option = {
          backgroundColor:'',
          title: {
            text: "彩画类型"
          },
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 0,
            top: 30,
            data: this.type_type
          },
          series: [
            {
              name: '彩画类型',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.type_data
            }
          ]
        };
        pie2.setOption(pie2_option);
      });
    }
  },
  mounted() {
    this.drawChart();
    this.drawPie1();
    this.drawPie2();
  },
}
</script>

<style scoped>
#bar{
  margin-right: 10%;
}
</style>
