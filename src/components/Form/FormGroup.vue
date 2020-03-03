<template>
  <Form
    ref="form"
    v-if="dataLength"
    @submit.native.prevent
    :model="form"
    :rules="rules"
    :label-width="labelWidth"
    :label-position="labelPosition">
    <Row>
      <Col
        :span="colWidth"
        v-for="item of data"
        :key="item.name">
        <FormItem
          :label="item.label"
          :prop="item.name"
          :error="error[item.name]"
          @click.native="fnFocus(item.name, $event)">
          <!-- iview表单元素，属性封装  -->
          <component
            :is="item.component"
            :type="item.type"
            :range="item.range"
            :placeholder="item.placeholder"
            :search="item.search"
            :autosize="item.autosize"
            :prefix="item.prefix"
            :suffix="item.suffix"

            :percent="item.percent"
            :vertical="item.vertical"
            :stroke-width="item.strokeWidth"
            :format="item.format"
            :multiple="item.multiple"

            :placement="item.placement"
            :options="item.options"
            :data="item.data"
            :size="item.size"
            :password="item.password"

            :value="form[item.name]"
            @on-change="fnChange(item.name, $event)"

            :style="item.style"
            :status="item.status"
            :hide-info="item.hideInfo"
            :alpha="item.alpha"
            :allow-half="item.allowHalf"
            :readonly="item.readonly"

            :step="item.step"
            :show-stops="item.showStops"
            :show-input="item.showInput"
            :disabled="item.disabled"
            :max="item.max"
            :min="item.min"
            :gutter="item.gutter"
            :searchable="item.searchable"
          >
            <template v-if="item.slot === 'prepend'">
              <span slot="prepend">
                <Icon
                  v-if="item.sloticon"
                  :size="16"
                  :type="item.sloticon"/>
              </span>
            </template>

            <!-- 渲染二级菜单 -->
            <template v-if="item.children">
              <component
                v-for="(child, index) of item.children.data"
                :key="`child_${_uid}_${i}_${index}`"
                :is="item.children.type"
                :label="child.label"
                :value="child.value"
                :slot="child.slot"
                :disabled="child.disabled"
              >{{child.title}}</component>
            </template>
          </component>
        </FormItem>
      </Col>
    </Row>
    <slot />

    <FormItem v-if="showButtonGroup">
      <ButtonGroup>
        <Button
          type="warning"
          @click="fnReset">取消</Button>
        <Button
          :loading="loading"
          type="primary"
          @click="fnSubmit">提交</Button>
      </ButtonGroup>
    </FormItem>
    <Button
      :loading="loading"
      type="primary"
      long
      size="large"
      @click="fnSubmit">{{oneButtonText}}</Button>
  </Form>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import debounce from 'lodash/debounce'

export default {
  name: 'FormGroup',
  props: {
    data: {
      type: Array,
      required: true
    },
    labelWidth: { // label文字的宽度
      type: Number,
      default: 100
    },
    labelPosition: { // label的位置
      type: String,
      default: 'right'
    },
    colWidth: { // 列宽
      type: Number,
      default: 12
    },
    showButtonGroup: { // 是否显示确认取消按钮
      type: Boolean,
      default: true
    },
    oneButtonText: {
      type: String,
      default: '确认'
    },
    edit: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    list () { this.init() },
    edit (val) {
      if (!Object.keys(val).length) return
      this.form = val
    }
  },
  data () {
    return {
      initData: null,
      form: {},
      rules: {},
      error: {},
      loading: false
    }
  },
  computed: {
    dataLength () {
      return !!Object.keys(this.data).length
    }
  },
  methods: {
    fnSubmit () {
      this.$refs.form.validate(valid => {
        console.log('submit', valid, this.form)
        if (!valid) return this.$Notice.error({title: '表单验证失败'})

        this.loading = true
        this.$emit('submit', this.form)

        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
    },
    fnReset () {
      // 一定要深拷贝，不然会出现值的引用
      // this.form = JSON.parse(JSON.stringify(this.initData))
      this.form = cloneDeep(this.initData)
      this.$emit('on-reset', this.form)
      console.log(this.error)
    },
    // 表单获取焦点清除 错误提示
    fnFocus (name, ev) {
      if (this.error[name]) this.error[name] = ''

      // 给表单设置 readonly 防止填充，获得焦点，移除 readonly属性
      ev.target && ev.target.removeAttribute('readonly')
    },
    fnChange: debounce(function (name, ev) {
      this.form[name] = ev.target.value
      // console.log('change', name, value, ev)
    }, 300),

    // 初始化表单数据，不要修改传递的父级数据
    init () {
      let form = {} // 表单提交的数据
      let rules = {} // 验证规则
      let error = {} // 错误提示
      this.data.forEach(item => {
        let {name, rule = [], value = ''} = item
        rules[name] = rule
        form[name] = value
        error[name] = ''
      })

      this.form = form
      this.initData = form
      this.rules = rules
      this.error = error
      // console.log('init', form, rules, error)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
