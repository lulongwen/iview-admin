// fragement
export const fragment = () => document.createDocumentFragment()

// 批量设置属性，解决一次只能设置一个属性 el.setAttribute('class', 'locking')
export function setAttributes (el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
