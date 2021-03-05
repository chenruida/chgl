<template>
  <div :style="'height:'+fullHeight+'px;'">
    <el-container>
      <el-header class="header" style="margin-top: 10px">
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/title.png" style="max-width: 100%"></el-col>
          <el-row :gutter="20" type="flex" justify="end">
            <el-col :span="4">
              <el-button class="manager-btn" @click="changeComponent('Basic')">基本管理</el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="manager-btn" @click="changeComponent('Disease')">病害管理</el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="manager-btn" @click="changeComponent('Project')">项目管理</el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="manager-btn" @click="changeComponent('Data')">数据管理</el-button>
            </el-col>
            <el-col :span="4">
              <el-button class="manager-btn" @click="changeComponent('System')">系统管理</el-button>
            </el-col>
          </el-row>
        </el-row>
      </el-header>
      <el-container>
        <el-aside
          width="30%">
          <div id="btn">
            <el-button round @click="changeMap('two')">二维</el-button>
            <el-button round @click="changeMap('three')">三维</el-button>
          </div>
          <div class="map" id="map-container">
            <img src="../assets/map/map.jpg"
                 style="position:relative;bottom:10px;max-height: 100%;max-width: 100%;"
                 id="map" v-if="showImg" alt="">
            <div id="unity"
                 style="position:relative;bottom:10px;max-height: 100%;max-width: 100%;"
                 v-if="!showImg">
              <Unity src="static/unityManager/Build/Main_Scene02_Pro.json"
                     unityLoader="static/unityManager/Build/UnityLoader.js"
                     ref="unityVue"
                     class="main-unity"
                     :width='width_'
                     :height='height_'
              >
              </Unity>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <component :is='currentCom'
                       style="position:relative;bottom:10px;max-height: 100%;max-width: 100%;"
            ></component>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Unity from "vue-unity-webgl";
import bus from './eventBus.js'
import Basic from "./Basic";
import Disease from "./Disease";
import Project from "./Project";
import System from "./System";
import Data from "./Data";
import qinqiuting from '../assets/map/1.jpg'
import futing from '../assets/map/2.jpg'
import ledaotang from '../assets/map/3.jpg'
import anshantang from '../assets/map/4.jpg'
import duofuxuan from '../assets/map/5.jpg'
import map from '../assets/map/map.jpg'


export default {
  name: "Manager",
  components: {
    Unity,
    Basic,
    Disease,
    Project,
    System,
    Data,
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
      currentCom: 'Basic',
      location: '',
      showImg: true,
      showUnity: false,
      width_:500,
      height_:700
    }
  },
  watch: {
    fullHeight(val) {//监控浏览器高度变化
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  },
  methods: {
    get_bodyHeight() {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    changeComponent(name) {
      this.currentCom = name;
    },
    changeMap(val) {
      if (val === 'two') {
        this.showImg = true;
        this.showUnity = false;
      } else if (val === 'three') {
        this.showImg = false;
        this.showUnity = true;
      }
    },
    mapChange2() {
      if (this.showImg) {
        bus.$on("build", (build) => {
          if (build.painted_build === '沁秋亭') {
            $("#map").attr('src', qinqiuting);
          } else if (build.painted_build === '多福轩') {
            $("#map").attr('src', duofuxuan)
            // this.showBtn = false;
          } else if (build.painted_build === '乐道堂') {
            $("#map").attr('src', ledaotang)
            // this.showBtn = false;
          } else if (build.painted_build === '蝠厅') {
            $("#map").attr('src', futing)
            // this.showBtn = false;
          } else if (build.painted_build === '安善堂') {
            $("#map").attr('src', anshantang)
            // this.showBtn = false;
          } else {
            $("#map").attr('src', map)
            // this.showBtn = false
          }
        });
      }
    },
    mapChange3() {
      bus.$on("build", (build) => {
        this.$refs.unityVue.message('SetFPSPosition', 'EnterID', build.painted_number);
      });
    }
  }
  ,
  created() {
    document.body.style.backgroundColor = '#dad0c6';
  }
  ,
  mounted() {
    let div = document.getElementById('map-container');
    this.width_ = document.documentElement.clientWidth *0.3 -20;
    this.height_ = div.clientHeight -10;
    this.mapChange2();
    this.mapChange3();

  },
}
</script>

<style scoped>

.manager-btn {
  background: url("../assets/manager-home/btn-back.jpg") no-repeat;
  background-size: cover;
  width: 10.8em;
  border: none;
  font-family: "Microsoft YaHei";
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
}

#btn {
  margin-left: 30px;
}

.map {
  position: absolute;
  top: 120px;
  bottom: 10px;
  left: 10px;
}

.head {
  top: 10px;
}

</style>
