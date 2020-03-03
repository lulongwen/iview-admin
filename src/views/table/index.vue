<template>
  <div>
    <h1>自定义表格列</h1>
  </div>
</template>

<script>

export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      list: null,
      listLoading: true
    }
  },
  methods: {

  }
}
</script>
