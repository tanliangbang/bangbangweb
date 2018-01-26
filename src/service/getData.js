import http from './http.js'

/**
 * 获取首页导航栏
 */
export const getNav = (type) => http.get('/api/res/getResListByType', {
  res_type: type
})

/**
 * 根据类型获取资源列表内容
 */
export const getResContentList = (name, start, size) => http.get('/api/res/getResContentList', {
  name: name,
  start: start,
  size: size
})

/**
 * 获取阅读排行列表
 */
export const getReadyRank = (name, size) => http.get('/api/res/readyRank', {
  name: name,
  size: size
})

/**
 * 获取推荐排行列表
 */
export const getRecommend = (name, size) => http.get('/api/res/recommend', {
  name: name,
  size: size
})

/**
 * 根据资源类型和资源内容ID获取资源详情
 */
export const getResContentById = (id, name) => http.get('/api/res/getResContentById', {
  id: id,
  name: name
})
