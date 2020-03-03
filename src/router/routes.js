import WebLayout from '@/layout/index.vue'
import whiteRouter from './white-router'
import component from './component'
// import system from './system'

/**
  hidden: true   item will not show in the sidebar default false
 * alwaysShow: true               if set true, will always show the root menu
                            if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
const routes = [
  {
    path: '/',
    component: WebLayout,
    redirect: '/home',
    hidden: true,
    name: 'index',
    meta: { title: '首页', icon: 'home' },
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('views/home'),
      meta: { title: '首页', icon: 'speedometer' }
    }]
  },

  {
    path: '/example',
    component: WebLayout,
    redirect: '/example/tree',
    name: 'example',
    meta: { title: '参考案例', icon: 'globe' },
    children: [
      {
        path: 'tree',
        name: 'tree',
        component: () => import('views/tree'),
        meta: { title: '树列表', icon: 'git-merge', card: true }
      },
      {
        path: 'tree2',
        name: 'tree2',
        component: () => import('views/tree'),
        meta: { title: '树列表2', icon: 'git-merge', card: true }
      }
    ]
  },

  {
    path: '/form',
    component: WebLayout,
    name: 'form',
    redirect: '/form/form-list',
    meta: { title: '表单页面', icon: 'list-box' },
    children: [
      {
        path: 'form-list',
        name: 'form-list',
        component: () => import('views/form'),
        meta: { title: '表单', icon: 'list', card: true }
      },
      {
        path: 'form-list2',
        name: 'form-list2',
        component: () => import('views/form'),
        meta: { title: '表单2', icon: 'list', card: true }
      }
    ]
  },
  {
    path: '/table',
    component: WebLayout,
    name: 'table',
    redirect: '/table/table-list',
    meta: { title: '表格页面', icon: 'paper' },
    children: [
      {
        path: 'table-search',
        name: 'table-search',
        component: () => import('views/table/table-search'),
        meta: { title: '搜索表格', icon: 'search', card: true }
      },
      {
        path: 'table-column',
        name: 'table-column',
        component: () => import('views/table'),
        meta: { title: '自定义表格列', icon: 'flask', card: true }
      }
    ]
  },

  {
    path: '/super',
    component: WebLayout,
    name: 'super',
    redirect: '/super/super-donate',
    meta: { title: '需求定制', icon: 'service' },
    children: [
      {
        path: 'wechat',
        name: 'wechat',
        component: () => import('views/super/wechat'),
        meta: { title: '微信联系', icon: 'wechat', card: true }
      },
      {
        path: 'donate',
        name: 'donate',
        component: () => import('views/super/donate'),
        meta: { title: '开发支持', icon: 'contacts', card: true }
      }
    ]
  },
  {
    path: '/lock',
    component: () => import('views/login/lock'),
    name: 'lock',
    hidden: true,
    meta: {title: '锁屏', icon: 'lock'}
  }
]

export default [
  ...whiteRouter,
  ...component,
  ...routes,
  // ...system,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
