<template>
  <div class="body">
    <div>
      <Title style="position: fixed;width: 100%;z-index:999"></Title>
    </div>
    <div class="left">
      <div class="search">

        <div class="search-input">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <el-button icon="el-icon-s-fold" class="search-btn" @click="show" plain>筛选</el-button>
        <div class="tree" v-if="showSearch">
          <el-tree
            :data="data"
            :props="defaultProps"
            icon-class="el-icon-plus"
            accordion
            @node-click="handleNodeClick"
            style="background: transparent;font-size: 25px">
          </el-tree>
        </div>
      </div>
    </div>
    <!--    <el-page-header @back="goBack" style="color: #e2d9b0;position: relative;top: 80px;left: 330px" ></el-page-header>-->
    <div class="right">
      <div id="page1" v-if="isDown ===1">
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path13)" class="mask">
              <el-image :src="picture13" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>山水图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">山水图</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path14)" class="mask">
              <el-image :src="picture14" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>孔雀图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">孔雀的寓意及象征是十分美好的，作为禽类之首，孔
                    雀有着吉祥如意、白头偕老和前程似锦三种寓意，可
                    以给人们带来好运，使夫妻白头偕老，并会使人们前
                    程似锦。同时孔雀还是权利、美好爱情...</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">孔雀图</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path15)" class="mask">
              <el-image :src="picture15" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>竹虎图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    虎象征压倒一切、所向无敌的威力；虎象征着权力、
                    热情和大胆。 中国人自古就喜欢虎，虎是强壮、威
                    武的象征，也是代表吉祥与平安的瑞兽；同时,虎又
                    是兽中之王，代表威严，权利，荣耀。竹子...</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">竹虎图</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path16)" class="mask">
              <el-image :src="picture16" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>近水楼台</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    意思是靠近水边的楼台能先见到月亮。
                    比喻由于地处近便而获得优先的机会。</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">近水楼台</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path17)" class="mask">
              <el-image :src="picture17" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>宝鸭穿莲</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    宝鸭穿莲中的鸭字旁有甲字，与科甲的甲字同音，
                    而甲字自古以来即有考中之意，而且甲字属木，特
                    别适合一些缺木的人佩带，是代表清廉、清纯和连
                    续的意思，所以宝鸭穿莲刻一只鸭子或一...</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">宝鸭穿莲</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path18)" class="mask">
              <el-image :src="picture18" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>喜上眉梢</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    喜上眉梢是中国传统吉祥纹样之一。古人以喜鹊作为
                    喜的象征。《开元天宝遗事》：“时人之家，闻鹊声
                    皆以为喜兆，故谓喜鹊报喜。”《禽经》：“灵鹊兆
                    喜”。可见早在唐宋时代即有此风俗。当时...</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">喜上眉梢</p>
          </el-col>
        </el-row>

      </div>
      <div id="page2" v-if="isDown ===2">
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path7)" class="mask">
              <el-image :src="picture7" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>金鱼松针</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    金鱼寓意年年有余，松针寓意长寿。金鱼穿梭游离
                    于茂密的松针之间，寓意健康长寿，四季有余，对
                    生活的美好盼望与祝愿。</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">金鱼松针</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path8)" class="mask">
              <el-image :src="picture8" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>埋儿奉母</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    汉郭巨，家贫。有子三岁，母尝减食与之。巨谓妻
                    曰：“贫乏不能供母，子又分母之食，盍埋此子？
                    儿可再有，母不可复得。”妻不敢违。巨遂掘坑三
                    尺余，忽见黄金一釜，上云：“天赐孝子郭...</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">埋儿奉母</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path9)" class="mask">
              <el-image :src="picture9" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>人物山水</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    画面上高山峻拔，溪流绕岸，松林苍翠。一隐士漫
                    步于溪岸，仰望远山，陶醉于林泉山色中。画家自
                    题：“松色洒衣碧，微风寄遐想。山中有楼居，仙
                    人自来往。”更抒发了隐逸之趣。</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">人物山水</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path10)" class="mask">
              <el-image :src="picture10" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>飞黄腾达</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    黄鹂与紫藤寓意“飞黄腾达”</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">飞黄腾达</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path11)" class="mask">
              <el-image :src="picture11" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>彩画</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">彩画</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path12)" class="mask">
              <el-image :src="picture12" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>山水图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px"></p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">山水图</p>
          </el-col>
        </el-row>
      </div>
      <div id="page3" v-if="isDown ===3">
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path1)" class="mask">
              <el-image :src="picture1" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>彩画</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px"></p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">彩画</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path2)" class="mask">
              <el-image :src="picture2" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>彩画</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px"></p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">彩画</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path3)" class="mask">
              <el-image :src="picture3" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>童子牧牛</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    “草满池塘水满陂，山衔落日浸寒漪。牧童归去横
                    牛背，短笛无腔信口吹。” 在水边桥上留下老牛的
                    足迹，辽天的鼻孔，冲天的气势之中，却不失清净
                    的心体。童子造型可爱，坐在牛背上，反映...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">童子牧牛</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path4)" class="mask">
              <el-image :src="picture4" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>彩画</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px"></p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">彩画</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path5)" class="mask">
              <el-image :src="picture5" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>骏马图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    图中两只马奔腾前进，互相对望，神采俊逸。马在中
                    华民族文化中地位极高，它是黄河的精灵，是炎黄子
                    孙的化身，代表了华夏民族的主体精神和最高道德。
                    在祖先们的世界观里，马代表着刚健、明...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">骏马图</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path6)" class="mask">
              <el-image :src="picture6" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>湖心亭</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    湖心亭的来历:因为这个湖位于西湖的中心,所以叫
                    做湖心亭。 浙江杭州西湖湖心亭:在西湖中央,是“
                    中国四大名亭”之一。小于三潭印月。大于阮公墩
                    ,合称“湖中三岛”——湖心亭为“蓬莱”...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">湖心亭</p>
          </el-col>
        </el-row>
      </div>
      <div id="page4" v-if="isDown ===4">
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path19)" class="mask">
              <el-image :src="picture19" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>白蛇传</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    一说源于唐代洛阳巨蛇事件。据两唐书记载，唐玄宗
                    天宝年间，洛阳邙山出现一条巨蛇，高3米多，长度
                    为31.209米。该数据比5800万年前就已灭绝的已知
                    最大的蛇类泰坦巨蟒（长约1...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">白蛇传</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path24)" class="mask">
              <el-image :src="picture24" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>五德之禽</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    农历正月初一是中国传统节日之一。中国古代特别
                    重视鸡，称它为“五德之禽”，《韩诗外传》说，
                    它头上有冠，是文德；足后有距能斗，是武德；敌
                    前敢拼，是勇德；有食物招呼同类，是...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">五德之禽</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path20)" class="mask">
              <el-image :src="picture20" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>人物图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">人物图</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path21)" class="mask">
              <el-image :src="picture21" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>山水图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">山水图</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path22)" class="mask">
              <el-image :src="picture22" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>举家欢乐</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    黄雀，亦叫芦花黄雀。鸣声清脆，可饲养作观赏
                    鸟。黄与“欢”谐音。“举家欢乐”，亦叫“全
                    家福”，寓意家庭和美幸福。
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">举家欢乐</p>
          </el-col>
          <el-col :span="8">
            <vue-hover-mask @click="handleClick(path23)" class="mask">
              <el-image :src="picture23" style="width: 385px;height: 330px;" fit="contain" alt=""></el-image>
              <template v-slot:action>
                <div class="cont">
                  <h1>松鹰图</h1>
                  <p>位置：沁秋亭顶部</p>
                  <p>年代：八十年代</p>
                  <p style="font-size: 20px">
                    鹰，崇高而尊贵，寓意着大展宏图，鹏程万里。作
                    为我们中华民族的图腾之一，更是象征着人们在事
                    业和学业等方面，奋力前进、敢于拼搏，勇于开拓
                    ，迈向远大未来的精神。雄鹰展翅飞...
                  </p>
                  <el-button class="el-button-more">查看更多</el-button>
                </div>
              </template>
            </vue-hover-mask>
            <p style="text-align: center">松鹰图</p>
          </el-col>
        </el-row>

      </div>
      <div style="position: relative;left: 44%;top: 33px;bottom: 30px">
        <el-button @click="down()" style="background: transparent;border: none">
          <img :src="icon" alt="" width="35%" height="35%">
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Show/Title";
import p1 from "../assets/more/1-01-I-E-J-A-001/p.png"
import i1 from "../assets/more/1-01-I-E-J-A-001/i.png"

import i2 from "../assets/more/1-01-I-E-J-B-001/i.png"
import p2 from "../assets/more/1-01-I-E-J-B-001/p.png"

import i3 from "../assets/more/1-01-I-E-L-A-001/i.png"
import p3 from "../assets/more/1-01-I-E-L-A-001/p.png"

import i4 from "../assets/more/1-01-I-E-L-B-001/i.png"
import p4 from "../assets/more/1-01-I-E-L-B-001/p.png"

import i5 from "../assets/more/1-01-I-E-L-C-001/i.png"
import p5 from "../assets/more/1-01-I-E-L-C-001/p.png"

import i6 from "../assets/more/1-01-I-E-Y-A-001/i.png"
import p6 from "../assets/more/1-01-I-E-Y-A-001/p.png"

import i7 from "../assets/more/1-01-I-EN-Y-A-001/i.png"
import p7 from "../assets/more/1-01-I-EN-Y-A-001/p.png"

import i8 from "../assets/more/1-01-I-N-Y-A-001/i.png"
import p8 from "../assets/more/1-01-I-N-Y-A-001/p.png"

import i9 from "../assets/more/1-01-I-S-Y-A-001/i.png"
import p9 from "../assets/more/1-01-I-S-Y-A-001/p.png"

import i10 from "../assets/more/1-01-I-W-L-A-001/i.png"
import p10 from "../assets/more/1-01-I-W-L-A-001/p.png"

import i11 from "../assets/more/1-01-I-W-L-B-001/i.png"
import p11 from "../assets/more/1-01-I-W-L-B-001/p.png"

import i12 from "../assets/more/1-01-I-W-L-C-001/i.png"
import p12 from "../assets/more/1-01-I-W-L-C-001/p.png"

import i13 from "../assets/more/1-01-I-W-Y-A-001/i.png"
import p13 from "../assets/more/1-01-I-W-Y-A-001/p.png"

import i14 from "../assets/more/1-01-I-WN-Y-A-001/i.png"
import p14 from "../assets/more/1-01-I-WN-Y-A-001/p.png"

import i15 from "../assets/more/1-01-I-WS-Y-A-001/i.png"
import p15 from "../assets/more/1-01-I-WS-Y-A-001/p.png"

import i16 from "../assets/more/1-01-O-E-Y-A-001/i.png"
import p16 from "../assets/more/1-01-O-E-Y-A-001/p.png"

import i17 from "../assets/more/1-01-O-EN-Y-A-001/i.png"
import p17 from "../assets/more/1-01-O-EN-Y-A-001/p.png"

import i18 from "../assets/more/1-01-O-ES-Y-A-001/i.png"
import p18 from "../assets/more/1-01-O-ES-Y-A-001/p.png"

import i19 from "../assets/more/1-01-O-N-Y-A-001/i.png"
import p19 from "../assets/more/1-01-O-N-Y-A-001/p.png"

import i20 from "../assets/more/1-01-O-S-Y-A-001/i.png"
import p20 from "../assets/more/1-01-O-S-Y-A-001/p.png"

import i21 from "../assets/more/1-01-O-W-Y-A-001/i.png"
import p21 from "../assets/more/1-01-O-W-Y-A-001/p.png"

import i22 from "../assets/more/1-01-O-WN-Y-A-001/i.png"
import p22 from "../assets/more/1-01-O-WN-Y-A-001/p.png"

import i23 from "../assets/more/1-01-O-WS-Y-A-001/i.png"
import p23 from "../assets/more/1-01-O-WS-Y-A-001/p.png"

import i24 from "../assets/more/1-01-I-ES-Y-A-001/i.png"
import p24 from "../assets/more/1-01-I-ES-Y-A-001/p.png"


import VueHoverMask from 'vue-hover-mask'

export default {
  name: "List",
  components:
    {
      Title, VueHoverMask,
      p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p12, p11,
      i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i12, i11,
      p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24,
      i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24,
    },
  data() {
    return {
      showSearch: false,
      input: "",
      isDown: 1,
      icon: require('../assets/more/down.png'),
      picture1: p1,
      picture2: p2,
      picture3: p3,
      picture4: p4,
      picture5: p5,
      picture6: p6,
      picture7: p7,
      picture8: p8,
      picture9: p9,
      picture10: p10,
      picture11: p11,
      picture12: p12,
      picture13: p13,
      picture14: p14,
      picture15: p15,
      picture16: p16,
      picture17: p17,
      picture18: p18,
      picture19: p19,
      picture20: p20,
      picture21: p21,
      picture22: p22,
      picture23: p23,
      picture24: p24,

      introduce1: i1,
      introduce2: i2,
      introduce3: i3,
      introduce4: i4,
      introduce5: i5,
      introduce6: i6,
      introduce7: i7,
      introduce8: i8,
      introduce9: i9,
      introduce10: i10,
      introduce11: i11,
      introduce12: i12,
      introduce13: i13,
      introduce14: i14,
      introduce15: i15,
      introduce16: i16,
      introduce17: i17,
      introduce18: i18,
      introduce19: i19,
      introduce20: i20,
      introduce21: i21,
      introduce22: i22,
      introduce23: i23,
      introduce24: i24,

      path1: '1-01-I-E-J-A-001',
      path2: '1-01-I-E-J-B-001',
      path3: '1-01-I-E-L-A-001',
      path4: '1-01-I-E-L-B-001',
      path5: '1-01-I-E-L-C-001',
      path6: '1-01-I-E-Y-A-001',
      path7: '1-01-I-EN-Y-A-001',
      path8: '1-01-I-N-Y-A-001',
      path9: '1-01-I-S-Y-A-001',
      path10: '1-01-I-W-L-A-001',
      path11: '1-01-I-W-L-B-001',
      path12: '1-01-I-W-L-C-001',
      path13: '1-01-I-W-Y-A-001',
      path14: '1-01-I-WN-Y-A-001',
      path15: '1-01-I-WS-Y-A-001',
      path16: '1-01-O-E-Y-A-001',
      path17: '1-01-O-EN-Y-A-001',
      path18: '1-01-O-ES-Y-A-001',
      path19: '1-01-O-N-Y-A-001',
      path20: '1-01-O-S-Y-A-001',
      path21: '1-01-O-W-Y-A-001',
      path22: '1-01-O-WN-Y-A-001',
      path23: '1-01-O-WS-Y-A-001',
      path24: '1-01-I-ES-Y-A-001',

      data: [{
        label: '年代',
        children: [
          {
            label: '80年代'
          },
          {
            label: '清朝'
          },
          {
            label: '民国'
          }]
      },
        {
          label: '位置',
          children: [
            {
              label: '大戏楼'
            },
            {
              label: '沁秋亭'
            },
            {
              label: '银安殿'
            },
            {
              label: '听雨轩'
            }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    show() {
      this.showSearch = !this.showSearch;
    },
    handleClick(path) {
      let routeUrl = this.$router.resolve({
        path: "/content",
        query: {id: path}
      });
      window.open(routeUrl.href, '_blank');
    },
    down() {
      if (this.isDown < 3) {
        this.isDown += 1;
      } else if (this.isDown === 3) {
        this.isDown += 1;
        this.icon = require('../assets/more/up.png')
      } else {
        this.isDown = 1;
        this.icon = require('../assets/more/down.png')
      }

    }
  }
}
;
</script>

<style lang="less" scoped>
.body {
  background: url("../assets/more/back.jpg");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}

.search {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 330px;
  background: rgba(146, 134, 122, 0.6);
}

.search-btn {
  background: transparent;
  border: none;
  color: black;
  font-size: 30px;
  position: relative;
  top: 100px;
  left: 20px;
}

.input-with-select {
  width: 250px;
}

.search-input {
  background: transparent;
  border: none;
  color: black;
  font-size: 30px;
  position: relative;
  top: 100px;
  left: 20px;
  margin-bottom: 50px;
}

.tree {
  font-size: 28px;
  position: relative;
  top: 110px;
  left: 30px;
  width: 80%;
}

.el-tree-node__label {
  font-size: 25px;
  color: black;
}

.el-divider {
  position: relative;
  top: 100px;
  background: black;
}

.el-tree-node__content {
  margin-top: 20px;
  border-bottom: 0.3px solid black;
}

.right {
  position: fixed;
  bottom: 100px;
  top: 100px;
  left: 385px;
  right: 50px;
}

.vue-hover-mask {
  display: flex;
  justify-content: center;
  background-color: transparent !important;
}

/deep/ .vue-hover-mask_action {
  background-color: transparent !important;
}

p {
  font-family: STHeiti;
}

.cont {
  background-color: #612a2b;
  height: 300px;
  width: 385px;
  opacity: 0.7;
  position: relative;
  left: 45px;

}

.cont > p {
  color: #d6a3a3;
  text-align: left;
  text-indent:40px;
}

.el-button-more {
  position: absolute;
  bottom: 5px;
  left: 40%;
  background: transparent url("../assets/more/back.png");
  background-size: contain;
  color: #d6a3a3;
  border: transparent;
}
</style>
