<template>
  <div class="form">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <div class="input">
      <el-form ref="form" :model="form"  size="small" label-position="right">
        <el-form-item label="文件名">
          <el-input v-model="form.file" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="文件夹">
          <el-select v-model="form.dir" placeholder="请选择工程负责人">
            <el-option label="彩画病害图纸" value="1"></el-option>
            <el-option label="彩画存档级三维模型" value="2"></el-option>
            <el-option label="彩画精细三维扫描" value="3"></el-option>
            <el-option label="彩画展开图" value="4"></el-option>
            <el-option label="彩画展示级三维模型" value="5"></el-option>
            <el-option label="彩画正射影像" value="6"></el-option>
            <el-option label="场景扫描" value="7"></el-option>
            <el-option label="原始影像" value="8"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采集时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date"
                          style="max-width: 300px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="数据类型">
          <el-select v-model="form.dataType" placeholder="请选择工程负责人">
            <el-option label="三维点云" value="z3"></el-option>
            <el-option label="影像数据" value="l4"></el-option>
            <el-option label="存档级三维模型" value="z5"></el-option>
            <el-option label="展示级三维模型" value="z5"></el-option>
            <el-option label="彩画正射影像" value="z5"></el-option>
            <el-option label="彩画展开图" value="z5"></el-option>
            <el-option label="彩画病害图纸" value="z5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属建筑">
          <el-select v-model="form.location" placeholder="请选择工程地点">
            <el-option label="建筑1" value="z3"></el-option>
            <el-option label="建筑2" value="ls"></el-option>
            <el-option label="建筑3" value="z5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数据描述" >
          <el-input type="textarea" v-model="form.desc" style="max-width: 300px;"></el-input>
        </el-form-item>
      </el-form>
        </div>
        </el-col>
    </el-row>
    <div style="text-align: center;width: 100%">
      <el-button>上传数据</el-button><el-button>确认</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "DataUp",
  data() {
    return {
      form: {
        file: '',
        dir: '',
        date: '',
        dataType: '',
        location: '',
        desc:''
      }
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
