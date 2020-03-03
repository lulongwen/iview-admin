module.exports = {
  title: '汽修平台',

  showLogo: true, // 是否显示 logo
  flex: false, // 菜单是否收缩

  fixedHeader: true, // 固定 header
  tagsView: true, // 是否显示标签
  tagsMax: 10, // tags 显示长度，多出从第一个删除
  home: {name: 'home', path: '/', title: '首页'}, // 默认打开的页面

  showSettings: {},

  whiteRouter: ['/login', '/404', '/403', '/500'] // no redirect whiteRouter
}
