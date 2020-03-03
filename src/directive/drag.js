// import { isFullScreen } from 'utils/navigator'

export const drag = {
  inserted (el, binding, vnode) {
    el.handler = ev => {
      console.log('123')
      // isFullScreen()
    }

    document.addEventListener('click', el.handler)
  },
  // 指令卸载的时候，执行
  unbind (el) {
    document.removeEventListener('click', el.handler)
    delete el.handler
  }
}
