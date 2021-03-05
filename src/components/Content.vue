<template>
  <div id="logo">
    <el-container>
      <el-header>
        <Title></Title>
      </el-header>
      <el-main>
<!--        <el-page-header @back="goBack" style="color: #e2d9b0;"></el-page-header>-->
        <div height="700px" width="900px" style="background-image: url('../assets/Content/frame_back.png')">
          <div class="btn">
            <el-button @click="path2">二维</el-button>
            <el-button @click="path3">三维</el-button>
            <el-popover
              placement="bottom"
              title="基本信息"
              width="200"
              trigger="hover"
              :content="contentInfo">
              <el-button slot="reference">基本信息</el-button>
            </el-popover>
            <el-popover
              placement="bottom"
              title="彩画故事"
              width="200"
              trigger="hover"
              :content="contentStory">
              <el-button slot="reference">彩画故事</el-button>
            </el-popover>
            <el-popover
              placement="bottom"
              title="相关文献"
              width="200"
              trigger="hover"
              content="待补充...">
              <el-button slot="reference">相关文献</el-button>
            </el-popover>
          </div>

          <iframe id="frame" :src="path" height="700px" width="100%">

          </iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Title from "./Show/Title";
import common from "./common";

export default {
  name: "Content",
  data() {
    return {
      id: this.$route.params.id,
      path: '',
      contentInfo: '待补充',
      contentStory: '待补充'
    }
  },
  components: {
    Title
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    path2() {
      this.path = "static/painted/" + this.$route.query.id + '-Image/';
    },
    path3() {
      this.path = "static/painted_3D/" +this.$route.query.id +'.html';
    },
    story() {
      if (this.$route.query.id == '1-01-O-ES-Y-A-001') {
        this.contentStory = '喜上眉梢是中国传统吉祥纹样之一。古人以喜鹊作为喜的象征。《开元天宝遗事》：“时人之家，闻鹊声皆以为喜兆，故谓喜鹊报喜。' +
          '”《禽经》：“灵鹊兆喜”。可见早在唐宋时代即有此风俗。当时的铜镜、织锦、书画等，已有很多喜鹊的题材。同时，我国人民以所' +
          '喜爱的梅花谐音“眉”字，画喜鹊站在梅花枝梢，即组成了“喜上眉（梅）梢”的吉祥图案'
      } else if (this.$route.query.id == '1-01-O-WN-Y-A-001') {
        this.contentStory = '吉祥图案之一。瓷器纹饰，流行于清至民国时期。图案为黄雀飞翔在菊花丛中。“菊”与“举”谐音，“黄”与“欢”音似，表示家安宅吉、全家欢乐、和和美美。'
      } else if (this.$route.query.id == '1-01-O-EN-Y-A-001') {
        this.contentStory = '宝鸭穿莲中的鸭字旁有甲字，与科甲的甲字同音，而甲字自古以来即有考中之意，而且甲字属木，是代表清廉、清纯和连续的意思，' +
          '所以宝鸭穿莲画一只鸭子或一双鸭子配上荷叶或者莲花，都寓意状元及第和有考有中或有考必中之意，也可以旺文昌和旺文职的官职所用。'
      } else if (this.$route.query.id == '1-01-I-WN-Y-A-001') {
        this.contentStory = '孔雀的寓意及象征是十分美好的，作为禽类之首，孔雀有着吉祥如意、白头偕老和前程似锦三种寓意，可以给人们带来好运，' +
          '使夫妻白头偕老，并会使人们前程似锦。同时孔雀还是权利、美好爱情的象征，也象征着优美与才华，是一种吉祥鸟。'
      } else if (this.$route.query.id == '1-01-I-WS-Y-A-001') {
        this.contentStory = '虎象征压倒一切、所向无敌的威力；虎象征着权力、热情和大胆。 中国人自古就喜欢虎，虎是强壮、威武的象征，' +
          '也是代表吉祥与平安的瑞兽；同时,虎又是兽中之王，代表威严，权利，荣耀。竹子四季青翠、潇洒自若，古人有“玉可碎而不改其白，' +
          '竹可焚而不毁其节”之说，比喻人的气节，象征“正直虚心”“虚心向上”的精神，被誉为植物“四君子”之一，还被誉为“岁寒三友”之一，' +
          '是纯洁、友爱、正直、有气节的君子之风的代表。' +
          '竹子和老虎合在一起有谐音祝福的意思。'
      } else if (this.$route.query.id == '1-01-O-WS-Y-A-001') {
        this.contentStory = '鹰，崇高而尊贵，寓意着大展宏图，鹏程万里。作为我们中华民族的图腾之一，更是象征着人们在事业和学业等方面，' +
          '奋力前进、敢于拼搏，勇于开拓，迈向远大未来的精神。雄鹰展翅飞翔，有着鹰击长空，前程似锦之意。'
      } else if (this.$route.query.id == '1-01-O-E-Y-A-001') {
        this.contentStory = '意思是靠近水边的楼台能先见到月亮。  比喻由于地处近便而获得优先的机会。'
      } else if (this.$route.query.id == '1-01-I-W-Y-A-001') {
        this.contentStory = '山水画的各自的风水寓意：\n' +
          '一、山：山在风水中通常解读为靠山，或者人丁。\n' +
          '二、水：流水为财，水是财富的象征，流动的水源就是滚滚财富流进家庭，另外很多山水画都会在作品中间形成一个湖，这就是山水画中的聚宝盆山水画了。\n' +
          '三、松柏：一曰招财，二曰档灾。一般分布在山水作品的两边，左为招财，右为档灾。\n'
      } else if (this.$route.query.id == '1-01-O-N-Y-A-001') {
        this.contentStory = '《白蛇传》是中国四大民间爱情传说之一，源自于唐代洛阳巨蛇事件等，初步定型于明代冯梦龙《警世通言》中，' +
          '成熟盛行于清代，是中国民间集体创作的典范。'
      } else if (this.$route.query.id == '1-01-I-S-Y-A-001') {
        this.contentStory = '画面上高山峻拔，溪流绕岸，松林苍翠。一隐士漫步于溪岸，仰望远山，陶醉于林泉山色中。' +
          '画家自题：“松色洒衣碧，微风寄遐想。山中有楼居，仙人自来往。”更抒发了隐逸之趣。'
      } else if (this.$route.query.id == '1-01-I-E-Y-A-001') {
        this.contentStory = '湖心亭的来历:因为这个湖位于西湖的中心,所以叫做湖心亭。 浙江杭州西湖湖心亭:在西湖中央,是“中国四大名亭”之一。' +
          '小于三潭印月。大于阮公墩,合称“湖中三岛”——湖心亭为“蓬莱”,三潭印月是“瀛洲”。'
      } else if (this.$route.query.id == '1-01-I-N-Y-A-001') {
        this.contentStory = '郭巨，晋代隆虑人（今河南省林州市人），原本家道殷实。父亲死后，他把家产分作两份，给了两个弟弟，自己独取母亲供养，' +
          '对母极孝。后家境逐渐贫困，妻子生一男孩，郭巨的母亲非常疼爱孙子，自己总舍不得吃饭，却把仅有的食物留给孙子吃。郭巨因此深感不安，' +
          '觉得养这个孩子必然影响供养母亲，遂和妻子商议：“儿子可以再有，母亲死了不能复活，不如埋掉儿子，节省些粮食供养母亲。' +
          '”当他们挖坑时，在地下二尺处忽见一坛黄金，上面写：“天赐孝子郭巨，官不得取，民不得夺。”夫妻得到黄金，回家孝敬母亲，并得以兼养孩子。' +
          '从此，郭巨不仅过上了好日子，而且孝顺的美名传遍天下。'
      }
    },
    info() {
      let url = common.httpUrl + 'paintedInfo/findByNumber';
      this.class_data = this.axios.get(url, {
        params: {
          number: this.$route.query.id,
        }
      }).then(res => {
        this.contentInfo = "类型：" + res.data.painted_class + "\r" + "年代：" + res.data.painted_history + "\r" + "工艺：" + res.data.painted_craft
      });
    }
  },
  created() {
    this.path = "static/painted/" + this.$route.query.id + '-Image/'
    this.story();
    this.info();
  }
}
</script>

<style scoped>
.el-header {
  padding: 0;
}

#logo {
  background-image: url("../assets/Content/back.png");
  background-size: cover;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}

.el-button {
  float: right;
  background-image: url("../assets/index/border2.png");
  background-size: contain;
  width: 120px;
  margin-left: 10px;
  background-color: transparent;
  color: bisque;
  border: none;

}

.btn {
  background: #928579;
  width: 100%;
}

</style>
