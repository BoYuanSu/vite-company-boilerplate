import axios from 'axios'
import configuration from '@/configuration'

export const api = axios.create({
  baseURL: configuration('backendHost'),
})

api.interceptors.request.use(async (config) => {
  // config.headers.Authorization =  `Bearer ${ls.get('userToken')}`
  return config
})

const handleSuccessRes = (response) => {
  return [response.data, null]
}

const handleErrorRes = (error) => {
  return [null, error.response.data.msg || error]
  // if (error.code === 'ECONNABORTED') {
  //     return Promise.reject(`請求逾時`)
  // }
  // if (!error.response) {
  //     return Promise.reject(`系統錯誤`)
  // }
  // const { data } = error.response
  // const { type, msg, status } = data
  // console.log(`err: ${type}, ${status}, ${msg}`) // for debug
  // if (status === 403) {
  //     // ---- 權限錯誤
  //     // return Promise.reject(`${type}: ${msg}` || error.message)
  // }
  // console.log(msg)

  // return Promise.reject(`${msg}` || error.message)
}

api.interceptors.response.use(handleSuccessRes, handleErrorRes)
