// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from "axios"
import * as echarts from 'echarts'
import qs from 'qs'
import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'
import store from './store'
import VideoPlayer from 'vue-video-player'
import MDialog from 'vue-m-dialog' // ro import { Dialog, Alert, Confirm } from 'vue-m-dialog'
import 'vue-m-dialog/dist/index.css'
import 'echarts/theme/vintage'
import VueDragscroll from 'vue-dragscroll'
// 引入jQuery
import $ from 'jquery'
// 引用bootstrap
import 'bootstrap'


//fullpage
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);

//Drag Scroll
Vue.use(VueDragscroll)

// 将挂载 m-dialog组件和 Vue.prototype.$alert 和 Vue.prototype.$confirm
Vue.use(MDialog)


//vue video
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.prototype.axios = Axios
Axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts;
Vue.prototype.$qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
