<template>
  <div class="header">
    <div class="container">
      <p class="my-logo"><router-link to="/">bangbang</router-link></p>
      <ul class="nav">
        <li><router-link to="/"> 首页 </router-link></li>
        <li><router-link to="/resContentList">技术文章</router-link></li>
        <li><router-link to="/myProduction"> 作品展示</router-link></li>
        <li><router-link to="/resContentList"> 程序员社区</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getNav} from '../../service/getData'
export default {
  name: 'Header',
  data () {
    return {
      navList: null
    }
  },
  mounted () {
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      this.navList = await getNav()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
 @import "../../style/common.less";
.header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: #333;
  color:#fff;
  z-index: 999;
  transition: all 1s ease;
  .my-logo{
    float:left;
    font-family: 'Open Sans',sans-serif;
    text-shadow: -2px 2px 4px rgba(255,255,255,1);
    font-style: italic;
    font-size: 2em;
    display: inline-block;
    position: relative;
    margin-top:5px;
    a{
      color:@mainColor;
    }
  }
  ul{
    line-height:60px;
    margin-left:40px;
    float:left;
    li{
      float:left;
      margin:0px 20px;
      a{
        color:#999;
      }
      a:hover{
        color:@mainColor;
      }
    }
  }
}
</style>
