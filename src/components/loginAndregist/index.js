import LoginAndRegist from './LoginAndRegist.vue'
import Tool from './../../utils/Tool'

export default {
  /**
   * 每个插件都有的install方法，用于安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install (Vue, pluginOptions = {}) {
    // 创建"子类"方便挂载
    const VueLoginAndRegist = Vue.extend(LoginAndRegist)
    let loginOrregist = null
    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    function $showLoginOrRegist (str) {
      return new Promise((resolve) => {
        // 第一次调用
        if (!loginOrregist) {
          loginOrregist = new VueLoginAndRegist()
          // 手动创建一个未挂载的实例
          loginOrregist.$mount()
          // 挂载
          document.querySelector(pluginOptions.container || 'body').appendChild(loginOrregist.$el)
        }
        // 显示loading
        if (str === 'login') {
          loginOrregist.showLogin()
        } else {
          loginOrregist.showRegist()
        }
        resolve()
      })
    }
    Vue.showLoginOrRegist = Vue.prototype.$showLoginOrRegist = $showLoginOrRegist
  }
}
