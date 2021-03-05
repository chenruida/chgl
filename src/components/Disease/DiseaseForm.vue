<template>
  <div class="form">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <div class="input">
          <el-form ref="form" :model="form" size="small" label-position="right">
            <el-form-item label="彩画名称">
              <el-input v-model="form.name" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画编号">
              <el-input v-model="form.name1" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画序号">
              <el-input v-model="form.name2" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="病害编号">
              <el-input v-model="form.range_" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="所属建筑">
              <el-select v-model="form.region" placeholder="请选择所属建筑">
                <el-option label="建筑一" value="shanghai"></el-option>
                <el-option label="建筑二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="彩画类型">
              <el-select v-model="form.ptype" placeholder="请选择彩画类型">
                <el-option label="裂隙" value="1"></el-option>
                <el-option label="龟裂" value="2"></el-option>
                <el-option label="起翘" value="3"></el-option>
                <el-option label="酥解" value="4"></el-option>
                <el-option label="空鼓" value="5"></el-option>
                <el-option label="剥离" value="6"></el-option>
                <el-option label="地仗脱落" value="7"></el-option>
                <el-option label="颜料剥落" value="8"></el-option>
                <el-option label="金层剥落" value="9"></el-option>
                <el-option label="粉化" value="10"></el-option>
                <el-option label="变色" value="11"></el-option>
                <el-option label="积尘" value="12"></el-option>
                <el-option label="结垢" value="13"></el-option>
                <el-option label="水渍" value="14"></el-option>
                <el-option label="油烟污损" value="15"></el-option>
                <el-option label="动物损害" value="16"></el-option>
                <el-option label="微生物损害" value="17"></el-option>
                <el-option label="其他污染" value="18"></el-option>
                <el-option label="人为损害" value="19"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="勘察时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                              style="max-width: 300px;"></el-date-picker>
            </el-form-item>
            <el-form-item label="病害描述">
              <el-input type="textarea" v-model="form.xdesc" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>上传数据</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "DiseaseForm",
  data() {
    return {
      form: {
        name: '',
        name1: '',
        name2: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        ptype: '',
        range_: '',
        blocation: '',
        hdesc: '',
        xdesc: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.form {
  border: 1px black solid;
}

.input {
  margin-left: 30%;
  width: 80%;
}
</style>
