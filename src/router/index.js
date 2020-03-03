import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

// Navigating to current location Error -> 重写路由的push方法
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const createRouter = () => new Router({
  routes,
  mode: 'hash', // require service support history | hash
  scrollBehavior: () => ({ y: 0 })
})

const router = createRouter()

// Error: Loading chunk 6 failed.
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    // 路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环
    // router.replace(targetPath)
    // location.reload 方法，相当于触发F5刷新页面，用户体验上会有刷新加载效果，但不会导致页面卡死及死循环
    location.reload()
    console.log('targetPath', targetPath)
  }
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
