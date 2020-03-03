<template functional>
  <div :class="$style.main">
    <template v-if="props.card">
      <Card v-bind="props.type">
        <keep-alive>
          <router-view :include="cachePage"/>
        </keep-alive>
      </Card>
    </template>
    <template v-else>
      <keep-alive>
        <router-view :include="cachePage"/>
      </keep-alive>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    type: {
      type: Object,
      default: () => {}
    },
    card: {
      type: Boolean,
      default: false
    },
    cachePage: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
  .main {
    min-height: 600px;
    height: auto;
    padding: 10px;
  }
</style>
