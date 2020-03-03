import Vue from 'vue'
import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
// import './styles/iview-variables.less';

// 全局配置，组件里面会覆盖全局配置
Vue.use(ViewUI, {
  transfer: true
  // size: 'large'
})
