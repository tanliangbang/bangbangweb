<template>
  <div class="index">
    <div class="container">
         <div class="model1">
             <p>在 bangbang，学习技能、解决问题</p>
             <p>每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。</p>
         </div>
         <div class="model2">

           <p class="model-title">精品文章  <router-link to="/resContentList"> 更多精品文章</router-link></p>
          <div class="list-model1">
            <div v-for="(item) in goodArticle" :key="item.id" class="item">
              <p><router-link :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>
              <div>
                <span>作者:&nbsp;{{item.content.from}}</span>&nbsp;&nbsp;<span>日期&nbsp;:{{formatDate(item.createTime,'-')}}</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;{{item.readyNum}}</span>
              </div>
              <router-link :to="{ path: '/resContent',query: { id: item.id, type: type }}">立即阅读</router-link>
            </div>

          </div>

         </div>

          <div class="model4">
            <p class="model-title">我的作品  <router-link to="/resContentList"> 更多作品</router-link></p>
            <div>
                <ListItem v-for="(item) in myproduction" :key="item.id" v-bind:item = "item" />
            </div>
          </div>

          <div class="model3">
             <p class="model-title">项目案例  <router-link to="/myProduction"> 更多案例</router-link></p>
             <div>
               <div>
                 <img src="../assets/img/logo.png" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="../assets/img/react.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="../assets/img/nodejs.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
               <div>
                 <img src="../assets/img/angular.jpg" />
                 <p>vue.js的项目搭建案例</p>
               </div>
             </div>
            </div>

    </div>
  </div>
</template>

<script>
import Tool from '../utils/Tool'
import * as api from '../service/getData'
import ListItem from '../components/production/ListItem'

export default {
  name: 'Index',
  components: {
    ListItem
  },
  data () {
    return {
      goodArticle: null,
      myproduction: null,
      type: 'goodarticles'
    }
  },
  created () {
    this.$loading()
    this.initDate()
    window.scrollTo(0, 0)
  },
  methods: {
    async initDate () {
      let obj1 = await api.getResContentList(this.type, 0, 5)
      this.goodArticle = obj1.content
      this.$loading.hide()
      let obj2 = await api.getResContentList('production', 0, 10)
      this.myproduction = obj2.content
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
</style>
