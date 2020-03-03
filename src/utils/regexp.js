// Created by 2020年2月12日22:04:55 www.lulongwen.com

export const isExternal = path => /^(https?:|mailto:|tel:)/.test(path)

const validMap = ['admin', 'editor']
export const validUsername = str => validMap.indexOf(str.trim()) >= 0

// 手机号码
export const isPhone = s => /^1[0-9]{10}$/.test(s)

// 电话号码
export const isTelephone = s => /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)

// 邮箱
export const isEmail = s => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)

// url
export const isUrl = s => /^http[s]?:\/\/.*/.test(s)
