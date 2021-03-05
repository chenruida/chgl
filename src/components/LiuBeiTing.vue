<template>
  <div>
    <div>
      <Title style="position: fixed;width: 100%;z-index:999"></Title>
    </div>
    <video-bg :sources="['static/video/back.mp4']" img="../assets/liubei/liubei_back.jpg" style="z-index: 888">
      <div>
        <!--左侧-->
        <div class="left-col">
          <el-page-header @back="goBack" style="color: #e2d9b0;position: relative;top: 50px"></el-page-header>
          <div class="left-row-1">

            <img src="../assets/liubei/fonts.png" alt="">
          </div>
          <div class="left-row-2">
            <p>
              <a href="static/unity/index.html" target="_blank" class="left-a">建筑漫游</a>
            </p>
            <p>
              <a href="static/votur/tour.html" target="_blank" class="left-a">全景漫游</a>
            </p>
            <p>
              <a href="#/more" target="_blank" class="left-a">彩画欣赏</a>
            </p>

          </div>
        </div>
        <!--右侧-->
        <div class="right-col">
          <div class="right-row-l">
            <!--        <div class="input-group-">-->
            <!--          <input type="button" src="" alt="历史故事" id="history">-->
            <!--          <input type="button" src="" alt="彩画故事" id="painted_story">-->
            <!--          <input type="button" src="" alt="相关文献" id="literature">-->
            <!--        </div>-->
          </div>
          <div class="right-row-2">
            <div class="introduce">
              <div class="introduce-title">
                简介
              </div>
              <p style="letter-spacing:0.2em; line-height:180%">
                沁秋亭是主人在初春、盛夏、深秋时节邀文人雅士们饮酒作诗的地方，又名流杯亭，取东晋大书法家王羲之的《兰亭集序》中“曲水流觞，修禊赏乐”之意。亭后假山中老井的
                水潺潺流入小亭内的沟渠，地上水渠东西看像流水的水字 ，南北看像长寿的寿字，取水常流寿长有的寓意，也叫长寿亭。
              </p>
              <p style="letter-spacing:0.2em;line-height:180%">
                沁秋亭的看点是亭内奇趣的“曲水流觞”——亭后假山中老井的水潺潺流入小亭内蜿蜒的沟渠。想当年园主人在初春、盛夏、深秋时节邀客来此，曲水流觞，饮酒作诗，是何等的惬意。
              </p>
              <p style="letter-spacing:0.2em;line-height:180%">
                亭内彩绘有二十四孝、白蛇传等故事。
              </p>
              <img src="../assets/liubei/mp3.png" class="mp3-btn" @click="startPlayOrPause"/>
              <audio
                ref="audio"
                @pause="onPause"
                @play="onPlay"
                id="mp3"
                autoplay="autoplay">
                <source src="../../static/video/lbt.mp3" type="audio/ogg"/>
              </audio>
              <img src="../assets/liubei/more.png" alt="" class="more">
            </div>
          </div>
        </div>
        <!--下-->
        <div class="bottom-col">
          <hr class="bottom-hr" align="center">
        </div>
      </div>


    </video-bg>
  </div>
</template>

<script>
import Title from "./Show/Title";
import VideoBg from 'vue-videobg'

export default {
  name: "LiuBeiTing",
  components: {
    Title,
    VideoBg
  },
  data() {
    return {
      name: 'FloatImgBtn',
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: true
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('../home');
    },
    startPlayOrPause() {
      return this.audio.playing ? this.pause() : this.play()
    },
    // 播放音频
    play() {
      this.$refs.audio.play()
    },
    // 暂停音频
    pause() {
      this.$refs.audio.pause()
    },
    // 当音频播放
    onPlay() {
      this.audio.playing = true
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false
    }
  }
}
</script>

<style lang="less" scoped>


.left-col {
  position: absolute;
  width: 30%;
  margin: 10px;
}

.media-col {
  position: absolute;
  width: 720px;
  height: 900px;
  /*width: 30%;*/
  /*height: 900px;*/
  left: 25%;
  top: 30%;
}

.right-col {
  position: absolute;
  float: right;
  width: 20%;
}

.left-row-1 {
  position: absolute;
  top: 80px;
  left: 120px;
}

.left-row-1 > img {
  width: 350px;
}

.left-row-2 {
  position: absolute;
  left: 120px;
  top: 300px;
  bottom: 100px;
}

.left-row-2 > p {
  background-image: url("../assets/liubei/border.png");
  background-repeat: no-repeat;
  width: 160px;
  height: 100px;
  background-size: contain;
}

.left-a {
  position: relative;
  top: 15px;
  left: 20px;
  /*color: whitesmoke;*/
  color: #FFFFFF;
  font-size: 30px;
}

.right-row-l {
  position: fixed;
  right: 0;

}

.right-row-2 {
  position: fixed;
  right: 0;
}

.input-group- > input {

  background-size: contain;
  width: 200px;
  height: 40px;
  margin-right: 50px;
  margin-top: 50px;
  border: none;
  background-color: transparent;
}

.introduce {
  position: absolute;
  right: 120px;
  top: 200px;
  bottom: 100px;
}

.introduce > .introduce-title {
  background-image: url("../assets/liubei/sanwei_17.png");
  background-size: contain;
  width: 400px;
  height: 25px;
  text-align: center;
  font-size: 50px;
  line-height: 20px;
  color: whitesmoke;
  margin-bottom: 30px;
}

.introduce > p {
  top: 30px;
  position: relative;
  left: 15px;
  color: whitesmoke;
  width: 400px;
  text-indent: 2em;
}

#history {
  background-image: url("../assets/liubei/sanwei_06.png");
}

#painted_story {
  background-image: url("../assets/liubei/sanwei_08.png");
}

#literature {
  background-image: url("../assets/liubei/sanwei_03.png");
}

/deep/ .el-link.el-link--default {
  color: #FFFFFF;

}

a {
  text-decoration: none
}

.more {
  width: 100px;
  left: 250px;
  top: 20px;
  position: relative;

}

.mp3-btn {
  position: relative;
  left: 10px;
}

.bottom-col {
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
}

.bottom-hr {
  background-color: black;
  height: 1px;
  border: none;
  width: 80%;
}

</style>
