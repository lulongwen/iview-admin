export const list = [
  {
    name: 'username', // key值
    type: 'text',
    component: 'i-input', // 渲染成什么组件
    value: '', // 默认选中的值
    // label: '用户名', // label 的文字
    // colWidth: 24, // 列宽，默认 8
    placeholder: '请输入用户名',
    // prefix: 'person',  // 表单里面的前缀
    autofocus: true,
    slot: 'prepend', // 表单外面的前缀
    sloticon: 'person',
    size: 'large',
    readonly: true,
    rule: [
      {required: true, message: '账号不能为空', trigger: 'blur'}
    ]
  },
  {
    name: 'password',
    component: 'i-input',
    type: 'password',
    password: true,
    value: '',
    // label: '密码',
    placeholder: '请输入您的密码',
    slot: 'prepend',
    sloticon: 'lock',
    size: 'large',
    readonly: true,
    rule: [
      {required: true, message: '账号不能为空', trigger: 'blur'}
    ]
  },
  {
    name: 'captcha',
    component: 'i-input',
    value: '',
    placeholder: '请输入验证码',
    autofocus: true,
    slot: 'prepend',
    sloticon: 'barcode',
    size: 'large',
    style: 'paddingRight: 127px',
    rule: [
      {required: true, message: '验证码不能为空', trigger: 'blur'}
    ]
  }
]
