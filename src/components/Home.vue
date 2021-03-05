<template>
  <div>
    <Title style="position: fixed;width: 100%;z-index:999"></Title>
    <full-page :options="options" ref="page">

      <div class="section fp-auto-height">
    <div id="map">
        <div class="my-draggable-div-parent"
             v-dragscroll="{ target: '.my-draggable-div', noback: 'true', noforward: 'true'}">
          <div class="grab-bing my-draggable-div" v-dragscroll.x="true">
            <img src="../assets/index/map_.png" alt="" class="map_img" usemap="#gwf-map" hidefocus="true" ref="map">
            <!--                <img :src="lbt" alt="" id="lbt-img">-->
            <map name="gwf-map" >
              <area shape="circle" :coords="coords" alt="流杯亭" href="#/liubei" οnfοcus="blur(this)">
            </map>
          </div>
        </div>
      </div>
    </div>
      <div class="section fp-auto-height" >
    <div id="better">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="8"></el-col>
        <el-col :span="4">
          <el-button class="borde1">大戏楼</el-button>
        </el-col>
        <el-col :span="4">
          <el-button id="qinqiuting">沁秋亭</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="borde1">银安殿</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="borde1">听雨轩</el-button>
        </el-col>
      </el-row>
      <el-row>
        <div class="detailed" style="display:flex;justify-content: center;align-items: center;">
          <div style="width: 80%;height: 80%;">
            <el-button class="left-arrow" @click="upOne"></el-button>
            <el-carousel :autoplay="false" type="card" class = "carousel" height="430px" arrow="never" ref="carousel">
              <el-carousel-item v-for="imgItem in imgList" :key="imgItem" width="80%">
                <img v-bind:src="imgItem.url" alt="" class="list-img"
                     @click="paintedTo(imgItem.name) ">
              </el-carousel-item>
            </el-carousel>
            <el-button class="right-arrow" @click="downOne"></el-button>
          </div>
        </div>
      </el-row>
      <el-button id="more" @click="more()">查看更多彩画</el-button>
    </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Title from "./Show/Title";
import backup from "../assets/index/backup.png";
import gwf from "../assets/index/gwf.png";
import qqt from "../assets/index/liubeiting.png";
import p1 from "../assets/index/1-01-O-ES-Y-A-001.png"
import p2 from "../assets/index/1-01-I-WN-Y-A-001.png"
import p3 from "../assets/index/1-01-I-WS-Y-A-001.png"
import p4 from "../assets/index/1-01-O-WS-Y-A-001.png"
import LBTTitle from "../assets/index/lbt_d.png"


export default {
  name: "Home",
  components: {
    Title,
    backup
  },
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#e2d9b0','#b1aa9f','#e2d9b0']
      },
      coords:"1970,750,100",
      lbt: LBTTitle,
      bannerHeight: 0,
      drag: true,
      txt: gwf,
      txtWidth: '50%',
      imgList: [
        {
          url: p1,
          name: '1-01-O-ES-Y-A-001'
        },
        {
          url: p2,
          name: '1-01-I-WN-Y-A-001'
        },
        {
          url: p3,
          name: '1-01-I-WS-Y-A-001'
        },
        {
          url: p4,
          name: '1-01-O-WS-Y-A-001'
        }
      ]
    }
  },
  methods: {
    showPainted() {
      $("#word").hide();
      $('#painted').show();
    },
    more() {
      this.$router.push('/more');
    },
    showQQT() {
      this.txt = qqt;
      this.txtWidth = '70%'
    },
    showGWF() {
      this.txt = gwf;
      this.txtWidth = '50%'
    },
    paintedTo(name) {
      let routeUrl = this.$router.resolve({
        path: "Content",
        query: {id: name}
      });
      window.open(routeUrl.href, '_blank');
    },
    upOne() {
      this.$refs.carousel.prev();
    },
    downOne() {
      this.$refs.carousel.next();
    },
    eventTrigged: function (name, e) {
      console.log(name);
      if (name == 'dragscrollmove') {
        console.log(e.detail)
      }
    },
    math_coords(){
      let coords_x = Math.round(this.$refs.map.offsetHeight / 1080 * 1976);
      let coords_y = Math.round(this.$refs.map.offsetHeight * 0.67);
      this.coords = coords_x + "," + coords_y + "," + "100";
    }
  },
  mounted() {
    this.math_coords();
    console.log(this.coords);
  },
  created() {}
}
</script>

<style scoped>

.el-header {
  padding: 0;
}

#map {
  background-image: url("../assets/index/backup.png");
  height: calc(100vh);
  background-size: cover;
  margin: 0;
}

#better {
  background-image: url("../assets/index/backup2.jpg");
  height: calc(100vh);
  position: relative;
  top: 40px;
  background-size: contain;
}

.borde1 {
  position: relative;
  top: 120px;
  background-image: url("../assets/index/border1.png");
  background-size: cover;
  width: 200px;
  height: 60px;
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: #e2d9b0;
}

#qinqiuting {
  position: relative;
  top: 120px;
  background-image: url("../assets/index/border2.png");
  background-size: cover;
  width: 200px;
  height: 60px;
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: #e2d9b0;
}

.detailed {
  position: relative;
  background: url("../assets/index/back3.png");
  background-size: cover;
  width: calc(68vw);
  height: calc(46vh);
  top: 180px;
  left: calc(26vw);
}

.my-draggable-div-parent {
  height: calc(100vh);
}

#more {
  position: relative;
  top: 30%;
  left: 40%;
  background-image: url("../assets/index/more.png");
  background-size: cover;
  width: calc(21vw);
  height: calc(7vh);
  color: #e2d9b0;
  font-size: 20px;
  border: transparent;
}
.left-arrow {
  position: absolute;
  top: 200px;
  left: -1px;
  border: transparent;
  color: transparent;
  background-image: url("../assets/index/left.png");
  background-size: cover;
  height: 46px;
  width: 46px;
  background-color: transparent;
}

.right-arrow {
  position: absolute;
  top: 200px;
  right: -1px;
  border: transparent;
  color: transparent;
  background-image: url("../assets/index/right.png");
  background-size: cover;
  height: 46px;
  width: 46px;
  background-color: transparent;
}

::-webkit-scrollbar {
  display: none
}

.my-draggable-div {
  height: calc(100vh);
  overflow-x: hidden;
}

.map_img {
  height: calc(100vh);
}

.grab-bing {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.grab-bing:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}
.carousel{
  height: calc(22vw);
}

.list-img{
  height: calc(22vw);
}
</style>
