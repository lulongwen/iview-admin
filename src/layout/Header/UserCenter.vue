<template functional>
  <Dropdown
    @on-click="props.click"
    trigger="click"
    placement="top-end">
    <a>
      {{ props.user }}
      <Icon type="arrow-down" />
    </a>
    <DropdownMenu slot="list">
      <DropdownItem name="my">
        <Icon type="person" :size="16"/>个人中心
      </DropdownItem>
      <DropdownItem name="logout" divided>
        <Icon type="log-out" :size="16"/>退出登录
      </DropdownItem>
    </DropdownMenu>
    <Avatar shape="square" :src="props.avatar"/>
  </Dropdown>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: '/static/assets/images/avatar.png'
    },
    click: {
      type: Function,
      default: () => function () {}
    }
  }
}
</script>
