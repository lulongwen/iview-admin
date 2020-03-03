<template functional>
  <Tooltip
    class="gutter"
    placement="bottom"
    :content="props.value ? '退出全屏': '全屏'">
    <Icon
      @click="props.full"
      :type="props.value ? 'contract' : 'expand'"
      :size="20"/>
  </Tooltip>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    full: {
      type: Function,
      default: () => function () {}
    }
  }
  // methods: {
  //   fnFull () {
  //     this.$emit('update:value', !this.value)
  //     isFullScreen(this.value)
  //   }
  // }
}
</script>
