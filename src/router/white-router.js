export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login'),
    hidden: true,
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/400',
    name: '400',
    component: () => import('views/error/400'),
    hidden: true,
    meta: {
      title: '404页面',
      subtitle: '404页面-网页不存在'
    }
  },
  {
    path: '/401',
    name: '401',
    component: () => import('views/error/401'),
    hidden: true,
    meta: {
      title: '401未授权',
      subtitle: '401-未授权的验证' // token
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('views/error/403'),
    hidden: true,
    meta: {
      title: '403页面',
      subtitle: '403-站点拒绝访问'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('views/error/500'),
    hidden: true,
    meta: {
      title: '500错误',
      subtitle: '500-服务器错误'
    }
  },

  {
    path: '/404',
    name: '404',
    component: () => import('views/error/404'),
    hidden: true,
    meta: {
      title: '404页面',
      subtitle: '404页面-网页不存在'
    }
  }
]
