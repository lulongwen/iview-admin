<template functional>
  <span class="toggle" @click="props.click">
    <Icon
      :class="props.iconClass"
      type="indent"
      :size="24"/>
  </span>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: Array,
      default: () => []
    },
    click: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
  .toggle {
    display: inline-block;
    padding: 13px;
    color: #222
  }
</style>
