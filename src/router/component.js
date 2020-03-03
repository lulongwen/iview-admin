import WebLayout from '@/layout/index'

export default [
  {
    path: '/aside',
    component: () => import('views/component/aside'),
    name: 'aside',
    meta: { title: '左右布局', icon: 'layout' }
  },
  {
    path: '/component',
    component: WebLayout,
    name: 'component',
    redirect: '/component/icon',
    meta: { title: '组件库', icon: 'basket' },
    children: [
      {
        path: 'icon',
        name: 'icon',
        component: () => import('views/component/icon'),
        meta: { title: 'Icon定制', icon: 'apps', card: true }
      },
      {
        path: 'svg-icon',
        name: 'svg-icon',
        component: () => import('views/component/svg-icon'),
        meta: { title: 'SvgIcon', icon: 'apps', card: true }
      },
      {
        path: 'tags-view',
        name: 'tags-view',
        component: () => import('views/component/tags-view'),
        meta: { title: 'TagsView', icon: 'apps', card: true }
      },
      {
        path: 'countup',
        name: 'countup',
        component: () => import('views/component/countup'),
        meta: { title: '数字动画', icon: 'apps', card: true }
      },
      {
        path: 'myform',
        name: 'myform',
        component: () => import('views/component/myform'),
        meta: { title: 'Form封装', icon: 'list', card: true }
      },
      {
        path: 'mytable',
        name: 'mytable',
        component: () => import('views/component/mytable'),
        meta: { title: 'Table封装', icon: 'list', card: true }
      }
    ]
  },
  {
    path: '/user',
    component: WebLayout,
    name: 'user',
    redirect: '/user/notice',
    meta: { title: '用户中心', icon: 'person-add' },
    children: [
      {
        path: 'notice',
        name: 'notice',
        component: () => import('views/user/notice'),
        meta: { title: '最新消息', icon: 'notifications', card: true }
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('views/user/my'),
        meta: { title: '我的主页', icon: 'person', card: true }
      }
    ]
  }
]
