<template functional>
  <Dropdown
    placement="right-start"
    :class="props.type"
    :trigger="props.trigger"
    @on-click="props.click">
    <header @click="props.change(props.parent.name)">
      <Icon :type="props.parent.meta.icon ||'leaf'" :size="16"/>
      <p class="title">{{props.parent.meta.title}}</p>
    </header>

    <DropdownMenu slot="list">
      <template v-for="item in props.parent.children">
        <!-- 如果有 children 递归调用，第二次没传参 type 和 trigger 用默认的 -->
        <MenuDropdown
          v-if="item.children && item.children.length"
          :key="`drop_${item.name}_${_uid}`"
          :parent="item"/>

        <DropdownItem
          v-else
          divided
          :key="`drop_${item.name}_${_uid}`"
          :name="item.name">
          <Icon
            :type="item.meta.icon ||'leaf'"
            :size="16"/>
          {{item.meta.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
// 递归组件嵌套会触发多次，不是第一级菜单提交 Event
export default {
  name: 'MenuDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    type: {
      type: Array,
      default: () => ['first']
    },
    click: {
      type: Function,
      default: () => function () {}
    },
    change: {
      type: Function,
      default: () => function () {}
    }
  }
}
</script>
