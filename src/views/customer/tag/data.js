import { pickerOptions } from '../form'

export const form = {
  phone: '',
  region: '',
  start: '',
  end: '',
  delivery: false,
  select: [],
  daterange: [],
  resource: '',
  desc: ''
}

export const search = [
  {
    name: 'phone', // key值
    component: 'el-input', // 渲染成什么组件
    value: '', // 默认选中的值
    label: '手机号', // label 的文字
    colWidth: 8, // 列宽
    placeholder: '请输入手机号',
    prefixIcon: 'el-icon-mobile-phone'
  },
  {
    name: 'start',
    type: 'date',
    valueFormat: 'yyyy-MM-dd',
    component: 'el-date-picker',
    value: '',
    label: '活动时间',
    placeholder: '请选择活动时间'
  },
  {
    name: 'daterange',
    type: 'daterange',
    component: 'el-date-picker',
    value: '',
    label: '活动时间',
    valueFormat: 'yyyy-MM-dd',
    unlinkPanels: true,
    startPlaceholder: '开始日期',
    endPlaceholder: '结束日期',
    pickerOptions
  },
  {
    name: 'region',
    component: 'el-select',
    value: '',
    label: '活动区域',
    placeholder: '请选择活动区域',
    children: {
      component: 'el-option',
      data: [
        { label: '上海市', value: 'shanghai' },
        { label: '北京市', value: 'beijing' }
      ]
    }
  },
  {
    name: 'select',
    component: 'el-checkbox-group',
    value: [1, 2],
    label: '即时配送',
    colWidth: 12,
    children: {
      component: 'el-checkbox',
      data: [
        { label: 1, title: '美食/餐厅线上活动', name: 'type' },
        { label: 2, title: '地推活动', name: 'type' },
        { label: 3, title: '线下主题活动', name: 'type' }
      ]
    }
  },
  {
    name: 'delivery',
    component: 'el-switch',
    value: '',
    label: '是否收费',
    colWidth: 4
  },
  {
    name: 'desc',
    type: 'textarea',
    component: 'el-input', // 渲染成什么组件
    value: 'haah', // 默认选中的值
    label: '活动形式', // label 的文字
    placeholder: '请输入活动形式'
  },
  {
    name: 'sex',
    component: 'el-radio-group',
    value: 1,
    label: '性别',
    children: {
      component: 'el-radio',
      data: [
        { title: '男', label: 1 },
        { title: '女', label: 0 }
      ]
    }
  }
]

export const thead = [
  {
    label: '#',
    prop: 'rid',
    width: 50,
    fixed: true
  },
  {
    label: '标签名称',
    prop: 'date',
    width: 150,
    fixed: true
  },
  {
    label: '微信粉丝',
    prop: 'name',
    width: 120
  },
  {
    label: '客户',
    prop: 'province',
    width: 130
  },
  {
    label: '标签类型',
    prop: 'city',
    width: 300
  },
  {
    label: '达标条件',
    prop: 'address',
    'min-width': 300
  },
  {
    label: '操作',
    prop: 'action',
    width: 130,
    fixed: 'right'
  }
]

export const tbody = [
  {
    date: '玩家',
    name: 3900,
    province: 9568,
    city: '手动标签',
    address: '消费金额',
    rid: 1
  },
  {
    date: '游客',
    name: 8900,
    province: 568,
    city: '默认标签',
    address: '消费金额',
    rid: 2
  },
  {
    date: '玩家',
    name: 3900,
    province: 9568,
    city: '手动标签',
    address: '消费金额',
    rid: 3
  },
  {
    date: '游客',
    name: 8900,
    province: 568,
    city: '默认标签',
    address: '消费金额',
    rid: 4
  },
  {
    date: '玩家',
    name: 3900,
    province: 9568,
    city: '手动标签',
    address: '消费金额',
    rid: 5
  },
  {
    date: '游客',
    name: 8900,
    province: 568,
    city: '默认标签',
    address: '消费金额',
    rid: 6
  }
]
