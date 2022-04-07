/*
 * @Author: tangdaoyuan
 * @Date: 2021-06-02 17:23:46
 * @LastEditTime: 2021-06-19 11:21:28
 */
/**
 * Axios Instance
 */
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { uuid } from '@/utils/uuid'

export interface Response<T = any> {
  code: number
  data: T
  message?: string
}

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // 生成uuid 附着在请求头中
  if (config.headers)
    config.headers['Request-ID'] = uuid()

  return config
})

const respOnFulfilled = function(resp: AxiosResponse) {
  return resp
}

const respOnReject = function(error: any) {
  const { response } = error
  if (response?.status === 401) {
    const { location } = response.headers
    window.location.href = `${location}`
  }
  Promise.reject(error)
}

axiosInstance.interceptors.response.use(respOnFulfilled, respOnReject)

export default axiosInstance
