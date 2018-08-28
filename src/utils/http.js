import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'

axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 测试环境
const baseUrl = 'https://wxopentest.miyapay.com'
// 正式环境
// const baseUrl = 'https://wxopen.miyapay.com';

axios.defaults.baseURL = baseUrl

// http request 拦截器
axios.interceptors.request.use((config) => {
  // 如果loading为true 则开启loading加载
  if (config.loading) {
    Toast.loading({
      mask: false,
      message: '加载中...'
    })
  }
  console.log(config)
  // 使用的是默认的content-type  则对参数进行序列化
  if (config.method === 'post' && !config.contentType) {
    config.data = qs.stringify(config.data || {})
  }
  // 判断是否有无自定义content-type
  if (config.contentType) {
    config.headers['Content-type'] = config.contentType
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use(
  response => {
    // 请求成功  清楚loading
    Toast.clear()
    if (response.data.code === 200) {
      return response.data
    } else {
      Toast(response.data.message)
    }
  },
  error => {
    if (error) {
      Toast('服务器发生错误')
    }
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)

export default axios
