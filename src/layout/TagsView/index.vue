<template>
  <div :class="$style.main">
    <div
      @DOMMouseScroll.prevent="mouseWheel"
      @mousewheel.prevent="mouseWheel"
      ref="content"
      :class="$style.content">
      <div
        ref="list"
        v-drag="this"
        :class="$style.list"
        :style="{ left: offsetLeft}">
        <template v-for="item of data">
          <Tag
            ref="tag"
            :key="`${item.name}_${_uid}`"
            type="dot"
            :closable="item.name !== 'home'"
            :name="item.name"
            size="medium"
            :color="(current === item.name) ? 'success': 'default'"
            @on-close="fnClose"
            @click.native="fnClick(item.name)"
          >{{item.title}}
          </Tag>
        </template>
      </div>
    </div>

    <Dropdown
      @on-click="fnDropdown"
      trigger="click"
      :class="$style.more">
      <Button type="success" :class="$style.inner">
        选项 <Icon type="arrow-down"/>
      </Button>
      <DropdownMenu slot="list">
        <template v-for="({ name, icon }) of menu">
          <DropdownItem :name="icon" :key="icon">
            <Icon :type="icon" />
            {{name}}
          </DropdownItem>
        </template>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'TagsView',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    current: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      offset: 0
    }
  },
  computed: {
    menu () {
      return [
        { name: '关闭所有', icon: 'close-circle' },
        { name: '关闭其他', icon: 'close' },
        { name: '关闭左侧', icon: 'arrow-back' },
        { name: '关闭右侧', icon: 'arrow-forward' }
      ]
    },
    offsetLeft () {
      // 缓存一下优化性能：防止值为0，又设置为0
      return `${this.offset}px`
    },
    index () {
      let { data, current } = this
      return data.findIndex(item => item.name === current)
    },
    dataLength () {
      return this.data.length - 1
    }
  },
  watch: {
    '$route' (to) {
      this.init()
    }
  },
  methods: {
    ...mapActions(['tagsView/CLOSE_TAG', 'tagsView/CLOSE_ALL']),
    ...mapMutations(['tagsView/REMOVE_LEFT', 'tagsView/REMOVE_RIGHT', 'tagsView/REMOVE_OTHER']),
    fnClose (ev, name) {
      ev.stopPropagation()
      // 传入当前的路由和要关闭 route.name
      let obj = { currentName: this.current, closeName: name }

      this['tagsView/CLOSE_TAG'](obj).then(res => {
        if (!res) return
        this.$router.push({ name: res.name })
      })
    },
    fnClick (name) {
      if (name === this.current) return
      this.$router.push({ name })
    },

    fnDropdown (name) {
      let { index, dataLength, $router } = this
      switch (name) {
        case 'close': // 关闭其他
          if (index === dataLength) return
          this['tagsView/REMOVE_OTHER'](index)
          break
        case 'arrow-back': // 关闭左侧
          if (index <= 1) return
          this['tagsView/REMOVE_LEFT'](index)
          break
        case 'arrow-forward': // 关闭右侧
          if (index === dataLength) return
          this['tagsView/REMOVE_RIGHT'](index)
          break
        default: // 关闭所有
          this['tagsView/CLOSE_ALL']().then(name => {
            if (name !== 'home') return
            $router.push({ name })
          })
      }
    },

    mouseWheel: debounce(function (ev) {
      this.$nextTick(() => {
        let delta = 0
        let { type, wheelDelta, detail = 0 } = ev
        // lodash event.type = wheel
        let wheel = ['DOMMouseScroll', 'mousewheel', 'wheel'].includes(type)
        let { content: {offsetWidth}, list } = this.$refs
        let width = list.offsetWidth
        let offset = width - offsetWidth

        if (wheel) {
          delta = wheelDelta || -detail * 40
        }

        // eslint-disable-next-line no-return-assign
        if (width <= offsetWidth) return this.offset = 0
        if (delta > 0) { // 向上滚动
          this.offset = (offset - Math.abs(this.offset) > 5) ? -offset : this.offset
        } else {
          this.offset = Math.min(0, offset - delta)
        }

        list.style.transition = 'left 500ms linear'
      })
    }, 300),

    tagMove (el) {
      if (!el) return
      let { offsetLeft: current, offsetWidth } = el
      let offset = Math.abs(this.offset)
      let mainWidth = this.$refs.content.offsetWidth

      // 3 标签在可视区域内
      this.offset = 0

      // 1 标签在可视区域左侧
      if (current < offset) {
        this.offset = -current
      } else if (current + offsetWidth >= mainWidth) {
        // 2 标签在可视区域右侧
        this.offset = -(current - (mainWidth - offsetWidth))
      }
    },
    init () {
      this.$nextTick(() => {
        let { tags, current, tagMove } = this
        const find = tags.find(item => item.name === current)
        let el = find && find.$el
        tagMove(el)
        // for (let item of this.tags) {
        //   if (item.name === this.$route.name) {
        //     this.tagMove(item.$el)
        //     break
        //   }
        // }
      })
    }
  },
  mounted () {
    this.tags = this.$refs.tag // tag组件的数组
    this.init()
  },
  directives: {
    drag: {
      inserted (el, binding) {
        let self = binding.value // this
        el.onmousedown = function (ev) {
          ev.preventDefault()
          let disX = ev.pageX - el.offsetLeft
          let { parentNode: {offsetWidth}, offsetWidth: width } = el
          // offset>0 是超出宽度，小于0在可视区内，不做处理
          let offset = width - offsetWidth

          document.onmousemove = debounce(function (ev) {
            let offsetX = ev.pageX - disX

            if (offset <= 0 || offsetX >= 0) offsetX = 0
            // 父级的 offsetWidth 移动的范围
            else if (offsetX <= self.offset) {
              offsetX = (offset - Math.abs(self.offset) >= 5) ? -offset : self.offset
            }

            self.offset = offsetX
            el.style.transition = 'left 500ms linear'
            el.style.left = self.offsetLeft
          }, 100)

          document.onmouseup = function () {
            document.onmouseup = document.onmousemove = null
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" module>
  .main {
    position: relative;
    height: 40px;
    padding: 5px 10px;
    background-color: #fff;
  }
  .content {
    position: relative;
    height: 100%;
    margin-right: 53px;
    overflow: hidden
  }

  .list {
    position: absolute;
    top: 0;
    white-space: nowrap; // 不换行显示
    transition: left .3s linear
  }

  .more {
    position: absolute;
    top: 7px;
    right: 10px;

    .inner {
      height: 28px;
      padding: 0 5px;
      font-size: 12px;
    }
  }
</style>
