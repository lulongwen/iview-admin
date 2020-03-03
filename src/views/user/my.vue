<template>
  <Row>
    <Col span="6">
      <aside :class="$style.main">
        <header :class="$style.header">
          <Avatar
            :size="80"
            shape="square"
            src="/static/assets/images/avatar.png"/>
          <h4>前端开发工程师</h4>
          <p>写的了代码，做的了设计的前端</p>
        </header>
        <CellGroup>
          <template v-for="({ name, title, icon }) of desc">
            <Cell
              :key="name"
              :name="name"
              :title="title">
              <Icon :type="icon" slot="icon"/>
            </Cell>
          </template>
        </CellGroup>
      </aside>
    </Col>
    <Col span="18">
    </Col>
  </Row>
</template>

<script>
import { desc } from './data/my'

export default {
  data () {
    return {
      active: 'unread'
    }
  },
  computed: {
    desc () {
      return desc
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
  .header {
    line-height: 2;
    text-align: center
  }
</style>
