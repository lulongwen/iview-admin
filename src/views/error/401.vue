<template>
  <section :class="$style.error" v-once>
    <img
      src="static/assets/images/401.gif"
      width="300"
      alt="401">
    <p>你没有权限去该页面</p>
    <h1>401 未授权访问</h1>
    <Button @click="fnBack" type="dashed">返回上一页</Button>
    <Button @click="fnHome" type="primary">返回首页</Button>
  </section>
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
