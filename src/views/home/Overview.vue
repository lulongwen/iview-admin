<template>
  <Card class="mb-20" v-bind="bindCard">
    <h2 slot="title">
      <Icon type="speedometer" /> 实时统计
      <small class="small">更新时间：2020-12-06 10:53:55</small>
    </h2>

    <Row>
      <Col :span="12" class="first-child">
        <template v-for="(item, i) of order">
          <div :key="`order_${i}`" class="overview">
            <h3 class="name">{{ item.label }}</h3>
            <div class="amount">
              <span class="amount-today">{{ item.value }}</span>
              <Icon type="arrow-round-down" class="success"/>
            </div>
            <div class="amount-yesterday">
              昨日：<span>{{ item.yesterday }}</span>
            </div>
          </div>
        </template>
      </Col>

      <Col :span="12" class="last-child">
        <template v-for="(item, i) of cost">
          <section :key="`cost_${i}`" class="overview">
            <h3 class="name">
              {{ item.label }}
            </h3>
            <div class="amount">
              <span class="amount-today">{{ item.value }}</span>
              <Icon type="arrow-round-up" class="error"/>
            </div>
            <div class="amount-yesterday">
              昨日：<span>{{ item.yesterday }}</span>
            </div>
          </section>
        </template>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  name: 'Overview',
  props: {
    order: {
      type: Array,
      default: () => []
    },
    cost: {
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
  .first-child {
    padding-right: 50px;
    border-right: 1px solid #efefef
  }

  .last-child {
    padding-left: 50px
  }

  .success, .error {
    font-size: 20px
  }

  .small {
    color: #969799;
    margin-left: 7px;
    font-weight: 400
  }

  .overview {
    float: left;
    width: 50%;
    height: 85px;
    margin-bottom: 32px;

    .name {
      font-size: 14px;
      line-height: 14px;
      color: #969799;
      font-weight: 500
    }

    .amount {
      position: relative;
      cursor: pointer;
      display: inline-block;
      margin: 15px 0 13px;
      font-size: 16px;
      font-weight: bolder;

      &-today {
        font-size: 28px;
      }
    }

    .amount-icon {
      display: inline-block;
      margin-left: 4px;
      vertical-align: top;
      margin-top: 8px;
      font-size: 18px;
      color: #66be74;
    }

    .amount-yesterday {
      color: #666;
      font-size: 14px;
      line-height: 14px;
    }
  }
</style>
