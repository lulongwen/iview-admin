<template functional>
  <Card v-bind="props.bindCard">
    <h2 slot="title">常用功能</h2>
    <Row>
      <template v-for="(item, i) of props.data">
        <Col
          :key="`feature_${_uid}_${i}`"
          class="item"
          :span="6"
        >
        <span class="radius" :key="`icon-${_uid}_${i}`">
          <Icon :type="item.icon" />
        </span>
          {{ item.name }}
        </Col>
      </template>
    </Row>
  </Card>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    bindCard: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    color: #323233;
    line-height: 30px;
    margin-top: 24px;

    &:hover {
      cursor: pointer;
      color: rgba(50,50,51,.75);
    }

    &:nth-child(even) .radius {
      background-color: #ffc700;
    }
    &:nth-child(3) .radius {
      background-color: rgb(128, 195, 66);
    }
    &:nth-child(4) .radius {
      background-color: rgb(233, 66, 66);
    }
  }
  .radius {
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    border-radius: 4px;
    text-align: center;
    background-color: #4d90fe;
    color: #fff;
    vertical-align: middle;
  }
  .name {
    font-size: 16px;
    font-weight: 900;
    color: #323233;
  }
</style>
