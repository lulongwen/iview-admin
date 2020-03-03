export default {
  methods: {
    fnBack () {
      this.$router.go(-1)
    },
    fnHome () {
      this.$router.replace({name: 'home'})
    }
  }
}
