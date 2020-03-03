<template>
  <div class="side-menu">
    <slot name="logo"/>

    <!-- flex: true 收缩状态 -->
    <ul v-if="flex">
      <template v-for="item of data">
        <MenuDropdown
          v-if="item.children && item.children.length"
          :key="`drop_${item.name}_${_uid}`"
          :parent="item"
          :click="fnSelect"
          :change="fnClick"
          trigger="click"
          :type="['flex-item', {active: item.name === name}]"
        />

        <!-- 如果没有children 直接显示 Icon，有children显示 dropdown -->
        <li
          v-else
          @click="fnSelect(item.name)"
          :key="`tip-${item.name}-${_uid}`"
          class="flex-item">
          <Icon
            color="rgba(255, 255, 255, 0.7)"
            :size="16"
            :type="item.meta.icon || 'leaf'"/>
          <p class="title">{{item.meta.title}}</p>
        </li>
      </template>
    </ul>

    <!-- flex: false 展开状态 -->
    <template v-else>
      <Menu v-bind="bindMenu" @on-select="fnSelect">
        <template v-for="(item, i) of data">
          <!-- 有二级菜单，当前级别也是要显示组件的，所以传入 item -->
          <MenuChild
            v-if="item.children && item.children.length"
            :parent="item"
            :name="item.name"
            :key="`${item.name}_${_uid}`"/>

          <!-- 一级菜单，没有二级菜单 -->
          <MenuItem
            v-else
            :name="item.name"
            :key="`${item.name}_${_uid}_${i}`">
            <Icon
              :type="item.meta.icon ||'ios-leaf'"
              :key="`${item.name}_${_uid}_${i}`"/>
            {{item.meta.title}}
          </MenuItem>
        </template>
      </Menu>
    </template>
  </div>
</template>

<script>
import MenuChild from './MenuChild'
import MenuDropdown from './MenuDropdown'

export default {
  name: 'SideMenu',
  components: {
    MenuChild,
    MenuDropdown
  },
  props: {
    flex: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    openNames: {
      type: Array,
      default: () => []
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      name: ''
    }
  },

  computed: {
    bindMenu () {
      const { openNames, activeName } = this
      return {
        ref: 'menu',
        accordion: true,
        width: 'auto',
        theme: 'dark',
        'open-names': openNames,
        'active-name': activeName
      }
    }
  },
  watch: {
    // 点击标签展开隐藏的菜单, 可用 updated() {nextTick}
    openNames () {
      this.$nextTick(() => {
        const el = this.$refs.menu // 菜单收起 el = undefined
        el && el.updateOpened()
      })
    }
  },
  methods: {
    fnSelect (name) {
      this.$router.push({name})
    },
    fnClick (name) {
      this.name = name
    }
  }
}

/*
<Tooltip
  :key="`tip-${item.name}-${_uid}`"
  placement="right"
  :content="item.meta.title"
>
  <Icon
    color="rgba(255, 255, 255, 0.7)"
    :size="item.meta.size || 24"
    :type="item.meta.icon || 'leaf'"/>
</Tooltip>

.ivu-tooltip {
  width: 100%;
  margin-bottom: 1px;
  padding: 10px 0;
  text-align: center;
  transition: background-color .2s linear;

  &:hover {
    background-color: #2d8cf0;
    color: #fff
  }
}
*/
</script>
