<template>
  <Layout>
    <Sider
      v-model="flex"
      :width="180"
      :hide-trigger="false"
      collapsible>
      <mark>左侧布局</mark>
    </Sider>
    <Content>
      <Header>
        <Icon
          @click="fnFlex"
          :class="iconClass"
          type="indent"
          :size="24"/>
        <mark>内容区域头部</mark>
      </Header>
      <main class="main">
        <Card v-bind="bindCard">
          <mark>把 layout组件作为父组件，让每个一级路由都是 layout.vue</mark>
          <router-view />
        </Card>
      </main>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      flex: false
    }
  },
  computed: {
    bindCard () {
      return {
        bordered: false,
        'dis-hover': true,
        title: 'Layout 组件',
        icon: 'layout'
      }
    },
    iconClass () {
      return ['rotate-icon', this.flex ? 'rotate' : '']
    }
  },
  methods: {
    fnFlex () {
      this.flex = !this.flex
    }
  }
}
</script>

<style scoped>
  .main {
    padding: 10px
  }
  /deep/ .ivu-card-body {
    height: calc(100vh - 117px)
  }
</style>
