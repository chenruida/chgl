<template>
  <div>
    <div class="view">
      <el-tabs tab-position=" top " @tab-click="first" v-model="activeTab">
        <el-tab-pane label="本月" name="first">
          <div id="month" :style="{width: '960px',height:'300px'}"></div>
        </el-tab-pane>
        <el-tab-pane label="本季度" name="second">
          <div id="jidu" :style="{width: '960px',height:'300px'}"></div>
        </el-tab-pane>
        <el-tab-pane label="全年" name="third">
          <div id="year" :style="{width: '960px',height:'300px'}"></div>
        </el-tab-pane>
        <el-tab-pane label="历史累计" name="fourth">
          <div id="history" :style="{width: '960px',height:'300px'}"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="view">
      <div id="all" :style="{width: '960px',height:'300px',border:'1px block solid'}"></div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: "ProjectStatic",
  data() {
    return {
      activeTab: 'first'
    }

  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let month = this.$echarts.init(document.getElementById("month"),'vintage');
      let jidu = this.$echarts.init(document.getElementById("jidu"),'vintage');
      let year = this.$echarts.init(document.getElementById("year"),'vintage');
      let history = this.$echarts.init(document.getElementById("history"),'vintage');
      let all = this.$echarts.init(document.getElementById("all"),'vintage');
      // 年代
      let option1 = {
        backgroundColor:'',
        title: {
          text: '工程进度统计',
          subtext: '进度',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['按期完成', '超期完成', '按期进行中', '超期进行中']
        },
        series: [
          {
            name: '工程数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 35, name: '按期完成'},
              {value: 10, name: '超期完成'},
              {value: 34, name: '按期进行中'},
              {value: 35, name: '超期进行中'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option2 = {
        backgroundColor:'',
        title: {
          text: '工程进度统计',
          subtext: '进度',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['按期完成', '超期完成', '按期进行中', '超期进行中']
        },
        series: [
          {
            name: '工程数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 135, name: '按期完成'},
              {value: 110, name: '超期完成'},
              {value: 34, name: '按期进行中'},
              {value: 35, name: '超期进行中'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option3 = {
        backgroundColor:'',
        title: {
          text: '工程进度统计',
          subtext: '进度',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['按期完成', '超期完成', '按期进行中', '超期进行中']
        },
        series: [
          {
            name: '工程数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 235, name: '按期完成'},
              {value: 210, name: '超期完成'},
              {value: 134, name: '按期进行中'},
              {value: 135, name: '超期进行中'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option4 = {
        backgroundColor:'',
        title: {
          text: '工程进度统计',
          subtext: '进度',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['按期完成', '超期完成', '按期进行中', '超期进行中']
        },
        series: [
          {
            name: '工程数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '按期完成'},
              {value: 310, name: '超期完成'},
              {value: 234, name: '按期进行中'},
              {value: 135, name: '超期进行中'},
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option = {
        backgroundColor:'',
        title: {
          text: '项目立项、结项统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['立项数', '结项数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '结项数',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 150, 232, 201, 154, 190]
          },
          {
            name: '立项数',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 320, 332, 301, 334, 390]
          },
        ]
      };

      month.setOption(option1);
      jidu.setOption(option2);
      year.setOption(option3);
      history.setOption(option4);
      all.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
  },
}
</script>

<style scoped>
.view {
  border: 1px solid black;
}

.tabs {
  float: right;
}
#all{
  margin-right: 10%;
}
</style>
