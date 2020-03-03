<template>
  <section>
    <Badge :count="63">
      <Icon type="ios-notifications" :size="24"/>
    </Badge>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    bindCard () {
      return { bordered: false, 'dis-hover': true, title: '', icon: '' }
    }
  },
  methods: {
    onSubmit () {
      this.$message('submit!')
    },
    onCancel () {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
