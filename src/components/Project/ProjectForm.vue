<template>
  <div class="input">
    <el-form ref="form" :model="form" label-width="100px" size="small" label-position="right">
      <el-form-item label="工程名称">
        <el-input v-model="form.name" style="max-width: 300px;"></el-input>
      </el-form-item>
      <el-form-item label="计划实施时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                        style="max-width: 300px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="工程负责人">
        <el-select v-model="form.ptype" placeholder="请选择工程负责人">
          <el-option label="张三" value="z3"></el-option>
          <el-option label="李四" value="l4"></el-option>
          <el-option label="赵五" value="z5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工程审核人">
        <el-select v-model="form.range_" placeholder="请选择工程负责人">
          <el-option label="张三" value="z3"></el-option>
          <el-option label="李四" value="ls"></el-option>
          <el-option label="赵五" value="z5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工程地点">
        <el-select v-model="form.type" placeholder="请选择工程地点">
          <el-option label="建筑1" value="z3"></el-option>
          <el-option label="建筑2" value="ls"></el-option>
          <el-option label="建筑3" value="z5"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ProjectForm",
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
