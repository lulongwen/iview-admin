// 将样式集中存放，解决打包后顺序错乱
import './plugins/iview/styles/iview.min.css'
import '@/assets/scss/index.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// plugins
import './plugins/iview'
import './plugins/svg-icon/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注册到根实例上，所有的组件都会有一个属性 this.$store
  render: h => h(App)
})
