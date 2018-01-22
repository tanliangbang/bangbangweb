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
            <div >
              <p><router-link to="/resContentList">利用 SVG 和 CSS3 实现有趣的边框动画</router-link></p>
              <div>
                <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
              </div>
              <router-link to="/resContentList">立即阅读</router-link>
            </div>

            <div>
              <p><router-link to="/resContentList">使用writing-mode实现垂直排版</router-link></p>
              <div>
                <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
              </div>
              <router-link to="/resContentList">立即阅读</router-link>

            </div>

            <div >
              <p><router-link to="/resContentList">利用 SVG 和 CSS3 实现有趣的边框动画</router-link></p>
              <div>
                <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
              </div>
              <router-link to="/resContentList">立即阅读</router-link>
            </div>

            <div>
              <p><router-link to="/resContentList">利用 SVG 和 CSS3 实现有趣的边框动画</router-link></p>
              <div>
                <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
              </div>
              <router-link to="/resContentList">立即阅读</router-link>

            </div>
          </div>

         </div>

          <div class="model3">
             <p class="model-title">项目案例  <router-link to="/resContentList"> 更多案例</router-link></p>
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

        <div class="model4">
          <p class="model-title">我的作品  <router-link to="/resContentList"> 更多作品</router-link></p>
          <div>
            <div>
              <img src="http://118.89.161.150:3000/public/files/20170504170840.jpg"/>
            </div>
            <div>
              <img src="http://118.89.161.150:3000/public/files/20170504170840.jpg"/>
            </div>
            <div>
              <img src="http://118.89.161.150:3000/public/files/20170504170840.jpg"/>
            </div>
            <div>
              <img src="http://118.89.161.150:3000/public/files/20170504170840.jpg"/>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '消息'
    }
  },
  mounted () {
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../style/common.less";

  .index{
    height:100%;
    .container{
      height:100%;
      background:#fff;
    }
  }
  .model-title{
     font-size:1.3em;
     color:#333;
     font-weight:bold;
     margin-top:20px;
     padding:10px 20px;
     border-bottom: 1px solid #ddd;

    a{
      color: @mainColor;
      background: transparent;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      font-size:0.8em;
      font-weight: normal;
      transition: color .3s ease;
      float:right;
    }
  }
  .model1{
    height:186px;
    width:100%;
    background:url(../assets/img/banner-bg.svg) no-repeat;
    background-position: right -20px;
    padding-top:30px;
    background-color:#009a61;
    padding-left:20px;
    p:nth-child(1){
      font-size:2em;
      color:#fff;
      font-family: 'Open Sans',sans-serif;
      font-style: italic;
    }
    p:nth-child(2){
      font-size:1em;
      color:#fff;
      font-family: 'Open Sans',sans-serif;
      width:700px;
      margin-top:20px;
      line-height: 30px;
    }
  }
  .model3{
    >div{
      display: flex;
      padding:0px 20px;
      >div{
        flex:1;
        height:300px;
        margin: 20px;
        text-align: center;
        padding:20px;
        width: 190px;
        border: 1px solid #d5e0dd;
        float: left;
        background: #fff;
        box-shadow: 0 0 7px #cae7df;
        >img{
          width:100%;
          height:200px;
        }
        p{
          color: rgb(119, 120, 126);
          border-top: 1px solid #e6e9e8;
          margin-top:20px;
          padding-top:10px;
        }
      }
    }
  }

  .model4{
    >div {
      display: flex;
      > div {
        flex: 1;
        height: 300px;
        margin: 20px;
        text-align: center;
        padding: 20px;
        width: 190px;
        border: 1px solid #d5e0dd;
        float: left;
        background: #fff;
        box-shadow: 0 0 7px #cae7df;
        >img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
