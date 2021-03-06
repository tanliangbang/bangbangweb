import axios from 'axios'
import NProgress from 'nprogress'
import qs from 'qs'
axios.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus (response) {
  NProgress.done()
  if (response.status === 200 || response.status === 304) {
    return response
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  }
}

function checkCode (res) {
  if (res.data.statusCode !== 200) {
    return res.data
  }
  return res.data.data
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  },
  upload (url, data, config) {
    let headers = config
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: 30000,
      headers: headers
    }).then(checkStatus).then(checkCode)
  }
}
