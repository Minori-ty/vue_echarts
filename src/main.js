import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './mock/index.js'
import axios from 'axios'
import './assets/css/global.css'
// import * as echarts from 'echarts'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'

Vue.prototype.$echarts = window.echarts
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
