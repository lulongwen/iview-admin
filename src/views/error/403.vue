<template>
  <div :class="$style.error" v-once>
    <header :class="$style.header">
      4<span :class="$style.icon403">
        <Icon type="lock" />
      </span>3
    </header>
    <p>请联系管理员维护</p>
    <h1>403 抱歉，禁止访问</h1>

    <Button @click="fnBack" type="dashed">返回上一页</Button>
    <Button @click="fnHome" type="primary">返回首页</Button>
  </div>
</template>

<script>
import error from './error-mixin'
export default {
  mixins: [error]
}
</script>

<style lang="scss" module>
  @import '~assets/scss/animation.scss';
  @import './error.scss';
</style>
