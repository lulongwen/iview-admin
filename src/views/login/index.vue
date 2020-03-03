<template>
  <div class="login" @keydown.enter="fnSubmit">
    <Card :bordered="false" :class="$style.card">
      <h2 slot="title">
        <Icon type="log-in" />
        管理员登录
      </h2>
      <FormGroup v-bind="bindForm" @submit="fnSubmit">
        <img :src="codeImg" alt="验证码" :class="$style.img">
      </FormGroup>
    </Card>
  </div>
</template>

<script>
import FormGroup from 'components/Form/FormGroup'
import Cookies from 'js-cookie'
import { list } from './data'
import codeImg from 'assets/images/code.png'

export default {
  components: {
    FormGroup
  },
  computed: {
    bindForm () {
      return {
        data: list,
        'col-width': 24,
        'show-button-group': false,
        'label-width': 0,
        'one-button-text': '登录'
      }
    },
    codeImg () {
      return codeImg
    }
  },
  methods: {
    fnSubmit (form) {
      const { username, password } = form

      Cookies.set('user', username)
      Cookies.set('password', password)
      // this.$store.commit('setAvator', '')

      if (form.username === 'admin') {
        Cookies.set('access', 0)
      }
      Cookies.set('access', 1)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" module>
  .card {
    float: right;
    width: 380px;
    margin-right: 100px;
    top: 21%;

    .img {
      position: absolute;
      bottom: 71px;
      right: 16px;
      z-index: 2
    }
  }
</style>
