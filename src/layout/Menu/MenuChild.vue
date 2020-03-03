<template functional>
  <Submenu :name="props.parent.name">
    <template slot="title">
      <Icon :type="props.parent.meta.icon ||'leaf'"/>
      {{props.parent.meta.title}}
    </template>

    <!-- 递归组件，通过 name值调用自己，复制父级的 v-for，修改参数就行 -->
    <template v-for="item of props.parent.children">
      <MenuChild
        v-if="item.children && item.children.length"
        :parent="item"
        :name="item.name"
        :key="`child_${item.name}_${_uid}`"/>

      <!-- 一级菜单，没有二级菜单 -->
      <MenuItem
        v-else
        :name="item.name"
        :key="`child-${item.name}-${_uid}`">
        <Icon
          :key="`icon_${_uid}_${item.name}`"
          :type="item.meta.icon ||'leaf'"/>
        {{item.meta.title}}
      </MenuItem>
    </template>
  </Submenu>
</template>

<script>
// Submenu 封装为递归组件，把包含整个children 的对象，传递给递归组件
export default {
  name: 'MenuChild',
  props: {
    parent: {
      type: Object,
      default: () => ({}) // 对象要加 (), 数组不用加
    }
  }
}
</script>
