import http from './http.js'

/**
 * 获取首页默认地址
 */
export const getNav = () => http.get('/api/res/getResListByType', {
  res_type: 'myArticle'
})
