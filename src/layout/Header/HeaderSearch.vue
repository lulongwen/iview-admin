<template functional>
  <Input
    class="header-search"
    search
    @on-search="props.search"
    placeholder="输入关键词搜索" />
</template>

<script>
export default {
  props: {
    search: {
      type: Function,
      default: () => function () {}
    }
  }
}
</script>
