import {type} from 'utils'

class Store {
  constructor (store) {
    this.store = store
  }

  get (key) {
    let value = this.store.getItem(key)
    if (!value) return null

    try {
      // 第一个字符是否包含 { [
      const find = ['{', '['].includes(value.substr(0, 1))
      return find ? JSON.parse(value) : value
    } catch (e) { throw new Error(`${this.store} 解析失败`) }
  }

  set (key, value) {
    const data = type(value)
    if (data === 'Object' || data === 'Array') {
      value = JSON.stringify(value)
    }
    this.store.setItem(key, value)
    return value
  }

  remove (key) {
    return this.store.removeItem(key)
  }

  clear () {
    return this.store.clear()
  }

  keys () {
    return Object.keys(this.store)
  }
}

// localStorage
export const storage = new Store(window.localStorage)

// sessionStorage
export const session = new Store(window.sessionStorage)
