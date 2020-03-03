# vue-admin 中后台 UI框架
1. iview-admin-template
2. 脚手架 `vue-cli2.9` & `webpack3.6`
3. 基础工具链
	- vue 2.6+
	- vue-router 3.1+
	- vuex 3.1+
	- view-design 4+
	- axios
	- echart
	- countup.js
	- lodash

4. vue-admin 基于 iview-amdin 开发

5. [联系卢珑文](https://lulongwen.com)

![联系卢珑文](static/assets/images/wechat.jpg)


## 首页预览

![home 首页](static/ui/home.jpg)

![login 登录页](static/ui/login.jpg)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 字体图表

1. 默认图标 860个，只选择 ios全部图标，logo部分图标
2. 其他没有的用 svg 代替
  - https://ionicons.com/v4
  - https://github.com/ionic-team/ionicons/tree/4.x/src/svg
  - https://www.toicon.com/series/feather

### SvgIcon
- `<SvgIcon icon="outdent"/>`
- https://blog.csdn.net/caseywei/article/details/89328551


## Menu 菜单
- 展开用的是 Menu组件
- 收起隐藏 Menu组件，用的 Dropdown
- 渲染的时候要判断菜单展开，还是隐藏，渲染不同的菜单


## mousewheel 事件
- FF使用DOMMouseScroll，其他浏览器都是用mousewheel
- https://developer.mozilla.org/zh-CN/docs/Web/API/Element/DOMMouseScroll_event
- https://developer.mozilla.org/zh-CN/docs/Web/Events/mousewheel
- https://blog.csdn.net/spy19881201/article/details/38704621


## 新增 loader
- sass-resources-loader 全局引入 scss


## 多环境配置
1. 本地环境 npm run dev
2. 线上环境 npm run build--prod
3. 测试环境 npm run build--test
4. 预发环境 npm run build--dev
  - https://www.cnblogs.com/1156063074hp/p/12028846.html
  - http://www.manongjc.com/detail/14-mnbotkyoymcxcnb.html


## 环境变量管理
1. cross-env


## Eslint 规范

1. `Parsing error: x-invalid-end-tag  vue/no-parsing-error`
  - https://github.com/iview/iview/issues/2828

```jsx
// .eslintrc.js 的 rules 加上
"vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]

// vscode settings
"vetur.validation.template": false
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
