<template>
  <div class="header">
    <div class="container">
      <p class="my-logo">bangbang</p>
      <ul class="nav">
        <li v-for="(item) in navList" :key="item.id"><router-link to="/resContentList"> {{item.cname}}</router-link></li>
        <li><router-link to="/resContentList"> 项目案例</router-link></li>
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
  line-height:60px;
  background: #333;
  color:#fff;
  z-index: 999;
  transition: all 1s ease;
  opacity: 1;
  .my-logo{
    float:left;
    font-family: 'Open Sans',sans-serif;
    text-shadow: -2px 2px 4px rgba(255,255,255,1);
    font-style: italic;
    font-size: 2em;
    display: inline-block;
    color:@mainColor;
    position: relative;
  }
  ul{
    margin-left:40px;
    float:left;
    li{
      float:left;
      margin:0px 30px;
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
