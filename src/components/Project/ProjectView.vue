<template>
  <div class="back" >
    <el-row type="flex" justify="space-around">
      <el-col :span="8"><img src="../../assets/project/count.png" style="max-width: 100%"></el-col>
      <el-col :span="8"><img src="../../assets/project/search.png" style="max-width: 100%;"></el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <div class="type">
        <h1>沁秋亭数字化工程 </h1>
        <div>
          <img src="../../assets/project/test.png" class="title-img">
        </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="type">
          <h1>沁秋亭彩画数字化工程 </h1>
          <div>
            <img src="../../assets/project/test.png" class="title-img">
          </div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row :gutter="20" type="flex" class="row-bg" justify="space-around">
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <div class="type">
          <h1>沁秋亭数字化工程 </h1>
          <div>
            <img src="../../assets/project/test.png" class="title-img">
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="type">
          <h1>沁秋亭彩画数字化工程 </h1>
          <div>
            <img src="../../assets/project/test.png" class="title-img">
          </div>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data(){
    return{
      checkList:[],
      type:[]
    }
  }
}
</script>

<style scoped>
.back{
  border: 1px black solid;
  height: 750px;
}

h1{
  background:url("../../assets/project/title_project.png") no-repeat;
  background-size: cover;
  text-align: center;
  color: blanchedalmond;
}
.type{
  background: #f1ece8;
  border: 1px black solid;
  max-width: 100%;
  height: 300px;
  margin-top: 5px;
}
h1{
  max-height: 100%;
}
.title-img{
  max-height: 100%;
}
</style>
