<template functional>
  <Tooltip
    class="gutter"
    placement="bottom"
    content="锁屏">
    <Icon
      @click="props.lock"
      type="lock"
      :size="20"/>
  </Tooltip>
</template>

<script>
export default {
  props: {
    lock: {
      type: Function,
      default: () => function () {}
    }
  }
}
</script>
