<template>
  <header :class="$style.main">
    <Indent v-bind="bindIndent"/>
    <Navigation :data="route"/>

    <div :class="$style.addon">
      <HeaderSearch :search="fnSearch"/>
      <FullScreen :value="fullScreen" :full="fnFull"/>
      <LockScreen :lock="fnLock"/>
      <Notice v-bind="bindNotice"/>
      <Theme />
      <UserCenter :user="user" :click="fnDropdown"/>
    </div>
  </header>
</template>

<script>
import Indent from './Indent'
import Navigation from './Navigation'
import FullScreen from './FullScreen'
import LockScreen from './LockScreen'
import HeaderSearch from './HeaderSearch'
import Notice from './Notice'
import Theme from './Theme'
import UserCenter from './UserCenter'
import { FullScreen as handlerFull } from 'utils/navigator'
import { lockSize } from 'utils/index'
import debounce from 'lodash/debounce'
import {home} from 'config/settings'

export default {
  components: {
    Indent,
    Navigation,
    UserCenter,
    FullScreen,
    HeaderSearch,
    LockScreen,
    Notice,
    Theme
  },
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      fullScreen: false
    }
  },
  computed: {
    user () {
      return 'longwen'
    },
    bindIndent () {
      let { iconClass, fnFlex } = this
      return {
        'icon-class': iconClass,
        click: fnFlex
      }
    },
    bindNotice () {
      const { count, fnLink } = this
      const content = count ? `${count} 条未读消息` : '暂无消息'
      return {
        count,
        content,
        link: fnLink
      }
    },
    route () {
      const { matched } = this.$route // 当前面包屑数组
      const index = Object.assign({}, home, {meta: {title: '首页', icon: 'home'}})
      return matched.find(item => item.name === 'home') ? [index] : [index, ...matched]
    }
  },
  methods: {
    fnFlex () { // 伸缩按钮点击
      this.$emit('update:flex', !this.flex)
    },
    fnFull () { // 全屏
      handlerFull(this.fullScreen)
      this.fullScreen = !this.fullScreen
    },
    fnLink () { // 跳转消息页
      this.$router.push({ name: 'notice' })
    },
    fnSearch (value) {
      console.log('search value=', value)
    },

    // 用户下拉菜单
    fnDropdown (name) {
      console.log('name', name)
      if (name === 'my') {
        return this.$router.push({name})
      }
      // 退出登录，清除存储信息
      // this.$store.commit('logout', this)
      // this.$store.commit('clearOpenedSubmenu')
      this.$router.push({name: 'login'})
    },

    // 锁屏
    fnLock () {
      let el = document.getElementById('locking')
      el.style.zIndex = 2000 // 大于 tooltip
      el.style.boxShadow = `0 0 0 ${this.lockSize}px #667aa6 inset`

      setTimeout(() => {
        // 锁屏保存当前路由
        localStorage.setItem('locking', this.$route.name)
        this.$router.push({ name: 'lock' })
      }, 500)
    },

    // 初始化创建锁屏 div元素
    init: debounce(function () {
      this.lockSize = lockSize()
      let el = document.getElementById('locking')
      if (!el) {
        el = document.createElement('div')
        el.id = el.className = 'locking'
        document.body.appendChild(el)
      }
      el.style.zIndex = -1
      el.style.boxShadow = `0 0 0 0 #667aa6 inset`
      el.style.width = el.style.height = `${this.lockSize}px`
    }, 500)
  },
  mounted () {
    console.log('header.vue api', process.env.API)
    this.init()
    // 缩放窗口重新计算
    window.addEventListener('resize', this.init)
  },
  beforeDestroy () {
    // 移除监听，不能使用匿名函数, 最后一个参数为 true 销毁无效
    // 离开时候需要销毁监听, 否则监听会一直存在: 因为这是单页面应用, 页面并未关闭
    window.removeEventListener('resize', this.init)
  }
}
</script>

<style module lang="scss">
  .main{
    position: relative;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(100,100,100,.1);
    z-index: 11
  }
  .addon {
    float: right;
    padding: 0 10px
  }
</style>
