<template>
  <div :class="$style.main">
    <Overview v-bind="bindOverview" />
    <TaskList :tabs="tabs" />
    <Feature v-bind="{'bind-card': bindCard, data: common }"/>
  </div>
</template>

<script>
import Overview from './Overview'
import TaskList from './TaskList'
import Feature from './Feature'

// import { mapGetters } from 'vuex'
import { order, cost, tabs, common } from './data'

// 根组件向子组件传递数据
export default {
  name: 'Dashboard',
  components: {
    Overview, TaskList, Feature
  },
  data () {
    return {
      order, cost, tabs, common
    }
  },
  computed: {
    bindOverview () {
      return { order, cost, 'bind-card': this.bindCard }
    },
    bindCard () {
      return { bordered: false, 'dis-hover': true }
    }
    // ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" module>
  .main {
    min-height: 600px;
  }
</style>
