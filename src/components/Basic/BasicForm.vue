<template>
  <div class="form">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">

        <el-form ref="form" :model="form" size="small" label-position="right">
          <div class="input">
            <el-form-item label="彩画序号">
              <el-input v-model="form.number" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画编号">
              <el-input v-model="form.serial" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="所属区域">
              <el-input v-model="form.area" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="所属建筑">
              <el-input v-model="form.build" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="所属构件">
              <el-select v-model="form.unit" placeholder="请选择所属构件">
                <el-option label="瓜柱" value="瓜柱"></el-option>
                <el-option label="脊部" value="脊部"></el-option>
                <el-option label="梁" value="梁"></el-option>
                <el-option label="檐部" value="檐部"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="彩画类型">
              <el-select v-model="form.type" placeholder="请选择彩画类型">
                <el-option label="和玺彩画" value="和玺彩画"></el-option>
                <el-option label="旋子彩画" value="旋子彩画"></el-option>
                <el-option label="苏式彩画" value="苏式彩画"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="彩画等级">
              <el-input v-model="form.grade" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画范围">
              <el-input v-model="form.range" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画方向">
              <el-input v-model="form.direction" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="彩画位置">
              <el-input v-model="form.location" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="展开尺寸">
              <el-input v-model="form.size" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="绘制内容">
              <el-input v-model="form.content" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="工艺做法">
              <el-input v-model="form.craft" style="max-width: 300px;"></el-input>
            </el-form-item>
            <el-form-item label="历史沿革">
              <el-input type="textarea" v-model="form.history" style="max-width: 300px;"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-upload
              class="upload"
              ref="upload"
              :multiple="false"
              action="http://localhost/painted/paintedInfo/upFile"
              :http-request="customUpload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <el-button @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>


      </el-col>
    </el-row>

  </div>
</template>
import common from "../common";
<script>
import common from "../common";

export default {
  name: "BasicForm",
  data() {
    return {
      form: {
        number: "",
        serial: "",
        area: "",
        build: "",
        unit: "",
        type: "",
        grade: "",
        range: "",
        direction: "",
        location: "",
        size: "",
        content: "",
        craft: "",
        history: ""
      },
      fileList: []
    }
  },
  methods: {
    onSubmit() {
      if (this.fileList.length > 0)
        this.$refs.upload.submit();
      else {
        this.$alert('请上传文件', '错误', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            });
          }
        });
      }
    },
    customUpload(file) {
      // this.generatorFileMd5(file.file)
      // 自定义上传
      this.fileUpload(file).then(response => {
        console.log(response)
      })
    },
    fileUpload(fileobj) {
      let param = new FormData()
      param.append('files', fileobj.file)
      return this.axios.request({
        method: 'post',
        url: common.httpUrl + 'paintedInfo/upFile',
        headers: {'Content-Type': 'multipart/form-data'},
        data: param
      })
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
