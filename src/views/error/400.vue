<template>
  <main :class="$style.error" v-once>
    <header :class="$style.header">
      4<span :class="$style.icon403">
        <Icon type="twitter" />
      </span>4
    </header>
    <p>请检查地址栏中的URL是否正确, 请检查连接是否正确！</p>

    <Button @click="fnBack" type="dashed">返回上一页</Button>
    <Button @click="fnHome" type="primary">返回首页</Button>
  </main>
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
