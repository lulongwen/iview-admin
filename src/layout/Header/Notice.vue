<template functional>
  <Tooltip
    class="gutter"
    placement="bottom"
    :content="props.content">
    <Badge :count="props.count">
      <Icon
        @click="props.link"
        type="notifications-outline"
        :size="20"/>
    </Badge>
  </Tooltip>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ''
    },
    link: {
      type: Function,
      default: () => function () {}
    }
  }
}
</script>
