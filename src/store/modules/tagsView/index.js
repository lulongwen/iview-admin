import {session} from 'utils/storage'
import throttle from 'lodash/throttle'
import {home, tagsMax} from 'config/settings'
import {ADD_ROUTE, REMOVE_ROUTE, CLOSE_TAG, CLOSE_ALL,
  REMOVE_ALL, REMOVE_LEFT, REMOVE_RIGHT, REMOVE_OTHER } from 'store/mutation-types'

// 定时保存到 localStorage, 1分钟保存一次
const LOCAL_SAVE = throttle(function (data) {
  session.set('openPage', data)
}, 60000)

// tags-view主要维护了两个数据：打开的页面 和 缓存的页面
const state = {
  // 打开的页面
  openPage: session.get('openPage') || [home],
  // 缓存的 tags
  cachePage: []
}

const mutations = {
  [ADD_ROUTE] (state, route) {
    let { name, path, params, query, meta: {title} } = route
    let index = state.openPage.findIndex(item => item.name === name)
    let obj = { name, path, title, params, query }

    // 如果有当前 name，就把params 和 query 参数替换掉
    if (index >= 0) { // 已存在就替换
      state.openPage.splice(index, 1, obj)
    } else {
      if (this.getters.tagsLength >= tagsMax) {
        // 超出长度截取
        state.openPage.splice(1, 1)
      }
      state.openPage = [...state.openPage, obj]
    }
    LOCAL_SAVE(state.openPage)
  },

  [REMOVE_ROUTE] (state, name) {
    state.openPage = state.openPage.filter(item => item.name !== name)
    LOCAL_SAVE(state.openPage)
  },

  // 关闭所有回到首页
  [REMOVE_ALL] (state) {
    state.openPage = [home]
    LOCAL_SAVE(state.openPage)
  },

  // 关闭左侧
  [REMOVE_LEFT] (state, index) {
    let filter = state.openPage.filter((key, id) => id >= index)
    state.openPage = [home, ...filter]
    LOCAL_SAVE(state.openPage)
  },

  // 关闭右侧
  [REMOVE_RIGHT] (state, index) {
    state.openPage = state.openPage.filter((key, id) => id <= index)
    LOCAL_SAVE(state.openPage)
  },

  // 关闭其他
  [REMOVE_OTHER] (state, index) {
    let filter = state.openPage.filter((key, id) => id === index)
    state.openPage = [home, ...filter]
    LOCAL_SAVE(state.openPage)
  }
}

const actions = {
  // 关闭一个
  [CLOSE_TAG] ({ commit, state: {openPage} }, { currentName, closeName }) {
    return new Promise(resolve => {
      let link = null
      // 要关闭的和打开的是不是同一个
      if (currentName === closeName) {
        let last = openPage.length - 1
        let index = openPage.findIndex(item => item.name === closeName)

        if (index < last) { // 当前后面还有
          link = openPage[index + 1]
        } else { // 关闭最后一个跳转到上一个
          link = openPage[index - 1]
        }
        // link = openPage[index + (index < last) ? 1 : (-1)]
      }

      // link 关闭当前标签后，跳转到其他页面, null 不跳转
      resolve(link)
      commit(REMOVE_ROUTE, closeName)
    })
  },

  // 关闭全部
  [CLOSE_ALL] ({commit}) {
    return new Promise(resolve => {
      resolve('home')
      commit(REMOVE_ALL)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
