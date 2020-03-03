export default {
  functional: true,
  props: {
    title: {
      type: String,
      default: '错误提示'
    }
  },
  render: (h, ctx) => {
    console.log('错误提示', h, ctx)
  }
}
