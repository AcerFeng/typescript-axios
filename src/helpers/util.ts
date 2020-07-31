const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }
// isObject 对于 FormData、ArrayBuffer这些类型，isObject判断也为true，但是这些类型的数据我们是不需要做处理的，而 isPlainObject的判断方式，只有我们定义的普通JSON对象才能满足
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
