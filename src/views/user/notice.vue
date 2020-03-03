<template>
  <Row>
    <Col span="6">
      <aside :class="$style.main">
        <CellGroup @on-click="fnClick">
          <template v-for="({ title, name, icon, count }) of tabs">
            <Cell
              :key="name"
              :title="title"
              :name="name"
              :selected="active === name">
              <Icon :type="icon" slot="icon"/>
              <Badge :count="count" slot="extra" />
            </Cell>
          </template>
        </CellGroup>
      </aside>
    </Col>
    <Col span="18">
      <Table v-bind="bindTable"/>
    </Col>
  </Row>
</template>

<script>
import { tabs, tbody, thead } from './data/notice'

export default {
  data () {
    return {
      active: 'unread'
    }
  },
  computed: {
    tabs () {
      return tabs
    },
    bindTable () {
      return {
        columns: thead,
        data: tbody,
        'no-data-text': '暂无未读消息'
      }
    }
  },
  methods: {
    fnClick (name) {
      this.active = name
    }
  }
}
</script>

<style lang="scss" module>
  .main {
    margin-right: 20px;
  }
</style>
