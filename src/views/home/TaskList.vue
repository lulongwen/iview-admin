<template>
  <Row class="mb-20 bg-white">
    <Col :span="5" class="first-child">
      <Card v-bind="bindCard">
        <h2 slot="title">
          <Icon type="md-speedometer" /> 智能助手
        </h2>
        <div class="inner-progress">
          <i-circle
            dashboard
            :stroke-width="10"
            :percent="35"
          >
            <p class="progress-text">
              <span>12</span>
              项待处理
            </p>
          </i-circle>
        </div>
      </Card>
    </Col>

    <Col :span="19">
      <Tabs @tab-click="fnClick">
        <template v-for="(item, i) of tabs">
          <TabPane
            :key="`tab_${_uid}_${i}`"
            :label="item.label"
            :name="`name${i+1}`"
            :icon="item.icon"
          />
        </template>
      </Tabs>
      <Row class="gray">
        <Col
          v-for="(item, i) of content"
          :key="`content_${i}`"
          class="content"
          :span="8"
        >
          <span class="label">{{ item.label }}</span>
          <b class="bold">{{ item.value }}</b>
        </Col>
      </Row>
      <Row class="gutter20">
        <Col :span="24" class="info">
          <p>未创建客户分群
            <small>通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</small>
            <Button size="small" type="text" class="create">立即创建</Button>
          </p>
          <p>未创建客户分群
            <small>通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</small>
            <Button size="small" type="text" class="create">立即创建</Button>
          </p>
          <p>未创建客户分群
            <small>通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</small>
            <Button size="small" type="text" class="create">立即创建</Button>
          </p>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import { content } from './data'

export default {
  name: 'TaskList',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      content
    }
  },
  computed: {
    bindCard () {
      return { bordered: false, 'dis-hover': true }
    }
  },
  methods: {
    fnClick (item) {
      console.log('click', item)
    }
  }
}
</script>

<style scoped lang="scss">
  .gray {
    padding-top: 16px;
    background-color: #f7f8fa;
  }
  .first-child {
    padding-right: 32px
  }

  .inner-progress {
    position: relative;
    padding: 16px;
    font-size: 12px;
    text-align: center;

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -13px);
      color: #969799;

      span {
        color: #df4545;
        font-size: 40px;
      }
    }
  }

  .content {
    margin-bottom: 20px;

    .label {
      margin-right: 10px;
      display: inline-block;
      min-width: 120px;
      width: 50%;
      text-align: right;
      font-size: 14px;
      color: #323233;
    }
    .bold {
      font-size: 18px;
      font-weight: 700;
      color: #df4545;
    }
  }

  .info {
    padding-right: 20px;
    line-height: 18px;
    font-size: 14px;
    background-color: #fff;

    p {
      position: relative;
      margin-bottom: 10px;
    }

    .create {
      position: absolute;
      top: 0;
      right: 0;
    }
    small {
      color: #969799;
      padding-left: 10px;
    }
  }
</style>
