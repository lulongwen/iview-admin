<template functional>
  <Breadcrumb :class="$style.main">
    <template v-for="item of props.data">
      <BreadcrumbItem :to="item.path" :key="item.name">
        <Icon :type="item.meta.icon || 'leaf'" />
        {{ item.meta.title  }}
      </BreadcrumbItem>
    </template>
  </Breadcrumb>
</template>

<script>
// if (typeof item.title === 'object')  this.$t(item.title.i18n)
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
  .main {
    position: absolute;
    left: 50px;
    top: 0;
    padding: 17px 15px
  }
</style>
