/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

export const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
})

// 判断数据类型
export const type = value => Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]

// lockScreen
export const lockSize = () => {
  const { clientWidth: x, clientHeight: y } = document.body
  const sqrt = Math.sqrt(x * x + y * y)
  return parseInt(sqrt) // sqrt 平方根
}
