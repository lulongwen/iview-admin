<template>
  <el-card class="box-card">
    <h1 slot="header">
      {{ title }}
      <el-button
        plain
        type="primary"
        class="create"
        size="mini"
        @click="fnCreate"
      >新建标签</el-button>
    </h1>
    <Table
      v-bind="{ thead: thead, tbody: tbody }"
      @edit="fnEdit"
      @delete="fnDelete"
    >
      <!--<template #action="{item}">
        <el-table-column v-bind="item">
          <el-button slot-scope="scope" type="primary">{{ scope.column }}</el-button>
        </el-table-column>
      </template>-->
    </Table>

    <el-dialog
      :title="modal.title"
      :visible.sync="modal.show"
      width="30%"
      :before-close="fnClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标签名称" prop="name">
          <el-input placeholder="请输入标签名称" />
        </el-form-item>
        <el-form-item label="标签类型" prop="tag">
          <el-radio label="标签类型1" />
          <el-radio label="标签类型2" />
        </el-form-item>
      </el-form>
      <el-button-group slot="footer" class="dialog-footer">
        <el-button @click="modal.show = false">取 消</el-button>
        <el-button type="primary" @click="modal.show = false">确 定</el-button>
      </el-button-group>
    </el-dialog>
  </el-card>
</template>

<script>
import Table from 'components/Table/Table'
import { search, thead, tbody } from './data'

export default {
  name: 'Customer',
  components: { Table },
  data () {
    return {
      tbody: null,
      search,
      modal: {
        show: false,
        title: '新建标签'
      }
    }
  },
  computed: {
    title () {
      return this.$route.meta.title
    },
    thead () {
      return thead
    }
  },
  mounted () {
    this.tbody = tbody
  },
  methods: {
    fnCreate () {
      this.modal.show = true
    },
    fnClose () {

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
