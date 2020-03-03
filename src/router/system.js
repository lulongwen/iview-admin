import WebLayout from '@/layout/index'

export default [
  {
    path: '/customer',
    component: WebLayout,
    redirect: '/customer/client',
    name: 'customer',
    meta: { title: '客户管理', icon: 'users' },
    children: [
      {
        path: 'client',
        name: 'client',
        component: () => import('views/customer'),
        meta: { title: '客户查询', icon: 'user' }
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import('views/customer/tag'),
        meta: { title: '标签管理', icon: 'tag' }
      }
    ]
  },
  {
    path: '/system',
    component: WebLayout,
    redirect: '/system/user',
    name: 'system',
    meta: {
      title: '系统设置',
      icon: 'settings'
    },
    children: [
      {
        path: 'user',
        component: () => import('views/system/user'),
        name: 'user',
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'department',
        component: () => import('views/system/department'),
        meta: { title: '部门管理', icon: 'department' }
      },
      {
        path: 'role',
        component: () => import('views/system/role'),
        meta: { title: '角色管理', icon: 'eye-open' }
      },
      {
        path: 'menu',
        component: () => import('views/system/menu'),
        meta: { title: '菜单设置', icon: 'nested' }
      }
    ]
  }
]
