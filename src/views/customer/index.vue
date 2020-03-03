<template>
  <el-card class="box-card">
    <h1 slot="header">
      {{ title }}
      <el-button
        plain
        type="primary"
        class="create"
        size="mini"
      >新建客户</el-button>
    </h1>
    <Search
      v-bind="{ data: search }"
    />

    <Table
      v-bind="{ thead: thead, tbody: tbody }"
      @click="fnClick"
      @edit="fnEdit"
      @delete="fnDelete"
    >
      <!--<template #action="{item}">
        <el-table-column v-bind="item">
          <el-button slot-scope="scope" type="primary">{{ scope.column }}</el-button>
        </el-table-column>
      </template>-->
    </Table>
  </el-card>
</template>

<script>
import Table from 'components/Table/Table'
import Search from 'components/Form/Search'
import { search, thead, tbody } from './data'

export default {
  name: 'Customer',
  components: { Table, Search },
  data () {
    return {
      tbody: null,
      search
    }
  },
  computed: {
    title () {
      const { title } = this.$route.meta
      return title
    },
    thead () {
      return thead
    }
  },
  mounted () {
    this.tbody = tbody
  },
  methods: {
    fnClick (row) {
      console.log('click', row)
    },
    fnEdit (row) {
      console.log('edit', row)
    },
    fnDelete (row) {
      console.log('delete', row)
    },
    indexMethod (index) {
      // (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1
      const { currentPage, pageSize } = this.page
      return (currentPage - 1) * pageSize + index + 1
    }
  }
}
</script>

<style scoped>

</style>
