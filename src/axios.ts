import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './helpers/defaults'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  // 让axios({...})实际上调用的是Axios 的 request 方法
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
