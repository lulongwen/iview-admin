<template>
  <div>
    <h1>theme</h1>
  </div>
</template>

<script>
export default {
  name: 'Theme',
  computed: {
    title () {
      const { title } = this.$route.meta
      return title
    }
  }
}
</script>

<style scoped>

</style>
