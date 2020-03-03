<template>
  <div :class="$style.main">
    <transition name="scale">
      <div :class="$style.content">
        <section
          @click="fnClick"
          :class="[$style.avatar, {[$style.active]: unlock}]">
          <Avatar src="/static/assets/images/avatar.png" :size="100"/>
          <span :class="$style.unlock">
            <Icon type="unlock" :size="18" />
            <b>解锁</b>
          </span>
        </section>

        <template v-if="unlock">
          <Input
            ref="input"
            search
            enter-button="登录"
            @on-search="fnEnter"
            type="password"
            placeholder="请输入登录密码" />
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unlock: false
    }
  },
  methods: {
    fnClick () {
      this.unlock = !this.unlock
      if (!this.unlock) return

      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    fnEnter (value) {
      if (!value) {
        return this.$Message.error('密码错误，请重新输入！如果忘了密码，清除浏览器缓存重新登录即可')
      }

      // 解锁之后跳转到锁屏之前的页面
      let name = localStorage.getItem('locking') || 'home'
      this.unlock = false
      this.$router.push({ name })
    },
    init () {
      let el = document.getElementById('locking')
      if (!el) {
        el = document.createElement('div')
        el.id = el.className = 'locking'
        document.body.appendChild(el)
      }
      el.style.zIndex = -1
      el.style.boxShadow = `0 0 0 0 #667aa6 inset`
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" module>
  @import './lock.scss';
</style>
