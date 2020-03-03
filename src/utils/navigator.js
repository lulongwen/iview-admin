// 全屏代码 webkitRequestFullScreen
export const FullScreen = value => {
  const main = document.body
  // value: true 退出全屏
  if (value) {
    // 各种内核浏览器的判断
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    return
  }

  // value: false 显示全屏
  if (main.requestFullscreen) {
    main.requestFullscreen()
  } else if (main.mozRequestFullScreen) {
    main.mozRequestFullScreen()
  } else if (main.webkitRequestFullScreen) {
    main.webkitRequestFullScreen()
  } else if (main.msRequestFullscreen) {
    main.msRequestFullscreen()
  }
}

// 不是 IE浏览器
export const notIE = () => !window.navigator.userAgent.includes('MSIE')
