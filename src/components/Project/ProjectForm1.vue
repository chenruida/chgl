<template>
  <div>
    <div class="input">
      <el-form ref="form" :model="form" label-width="80px" size="small" label-position="right">
        <el-form-item label="彩画名称">
          <el-input v-model="form.name" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="彩画编号">
          <el-input v-model="form.name1" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="彩画序号">
          <el-input v-model="form.name2" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="彩画范围">
          <el-input v-model="form.range_" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="彩画大小">
          <el-input v-model="form.size" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="彩画位置">
          <el-input v-model="form.blocation" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="所属建筑">
          <el-select v-model="form.region" placeholder="请选择所属建筑">
            <el-option label="建筑一" value="shanghai"></el-option>
            <el-option label="建筑二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="彩画类型">
          <el-select v-model="form.ptype" placeholder="请选择彩画类型">
            <el-option label="和玺彩画" value="shanghai"></el-option>
            <el-option label="旋子彩画" value="beijing"></el-option>
            <el-option label="苏式彩画" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="勘察时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                          style="max-width: 300px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="绘制内容">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="人物" name="type"></el-checkbox>
            <el-checkbox label="花卉" name="type"></el-checkbox>
            <el-checkbox label="动物" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="年代">
          <el-radio-group v-model="form.resource">
            <el-radio label="80年代"></el-radio>
            <el-radio label="民国"></el-radio>
            <el-radio label="清"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="历史沿革">
          <el-input type="textarea" v-model="form.hdesc" style="max-width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="修缮管理">
          <el-input type="textarea" v-model="form.xdesc" style="max-width: 300px;"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectForm1",
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
.form{
  border: 1px black solid;
}
.input{
  margin-left: 30%;
  width: 80%;

}
</style>
