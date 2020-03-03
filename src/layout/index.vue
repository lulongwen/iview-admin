<template>
  <Layout>
    <Sider v-bind="bindSlider" v-model="flex">
      <Menu v-bind="bindMenu">
        <template v-if="showLogo">
          <header slot="logo" :class="{'logo-mini': flex}">
            <img
              v-if="flex"
              class="full"
              src="/static/assets/images/logo-mini.png"
              alt="logo">
            <img
              v-else
              class="full"
              src="/static/assets/images/logo.png"
              alt="logo">
          </header>
        </template>
      </Menu>
    </Sider>

    <Content>
      <Header v-bind="bindHead" :flex.sync="flex"/>
      <TagsView v-bind="bindView"/>
      <Main v-bind="bindMain"/>
    </Content>
  </Layout>
</template>

<script>
import Menu from './Menu'
import Header from './Header'
import TagsView from './TagsView'
import Main from './Main'

import { flex, showLogo } from 'config/settings'
import routes from 'router/routes'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'WebLayout',
  components: {
    Menu,
    Header,
    TagsView,
    Main
  },
  watch: {
    '$route' (route) {
      // 监控使用了 layout的路由变化，放在 App.vue能监控所有页面
      this['tagsView/ADD_ROUTE'](route)
    }
  },
  data () {
    return {
      flex
    }
  },

  computed: {
    ...mapState({
      // 打开的标签页
      openPage: state => state.tagsView.openPage
    }),

    bindSlider () {
      return {
        width: 180,
        'collapsed-width': 80,
        collapsible: true, // 收缩或展开的状态
        'hide-trigger': true // 隐藏折叠箭头 >
      }
    },

    bindMenu () {
      // 打开的二级菜单
      const { flex, $route: { fullPath, name } } = this
      const openNames = fullPath.split('/').filter(item => item)
      const data = routes.filter(item => !item.hidden) // 过滤路由
      return {
        data,
        flex,
        'active-name': name,
        'open-names': openNames
      }
    },
    iconClass () {
      return ['rotate-icon', this.flex ? 'rotate' : '']
    },
    bindHead () {
      return {
        'icon-class': this.iconClass,
        count: 36
      }
    },
    bindView () {
      return { data: this.openPage, current: this.$route.name }
    },
    bindMain () {
      const { meta: { title, icon, card } } = this.$route
      return {
        card,
        type: { bordered: false, 'dis-hover': true, title, icon }
      }
    },
    showLogo () {
      return showLogo
    }
  },

  methods: {
    ...mapMutations(['tagsView/ADD_ROUTE'])
  }
}
</script>
