<template>
  <div >
    <div class="header" v-if="!$store.state.common.isMobile">
      <div class="container">
        <p class="my-logo"><router-link to="/home">bangbang</router-link></p>
        <ul class="nav">
          <li><router-link to="/home" > 首页 </router-link></li>
          <li><router-link to="/resContentList">技术文章</router-link></li>
          <li><router-link to="/myProduction"> 作品展示</router-link></li>
          <li><router-link to="/community"> 程序员社区</router-link></li>
        </ul>
        <div class="loginOrRegist" v-if="this.$store.state.common.userInfo === null">
          <a v-on:click="showLoginOrRegsit('login')">登入</a>/<a v-on:click="showLoginOrRegsit('regist')">注册</a>
        </div>
        <div class="loginOrRegist" v-if="this.$store.state.common.userInfo!==null">
          <router-link to="/userCenter">{{this.$store.state.common.userInfo.username}}</router-link>/<a v-on:click="loginOut" class="loginOut">退出</a>
        </div>
      </div>
    </div>

    <div class="mheader" v-if="$store.state.common.isMobile">
      <p class="my-logo"><router-link to="/home">bangbang</router-link></p>
      <img class="moreModel" v-on:click="show = !show" src="../../../static/img/Viewlist.png">
      <transition name="fade">
        <ul v-if="show" class="nav">
          <li><a v-on:click="toUrl('home')"  > 首页 </a></li>
          <li><a v-on:click="toUrl('resContentList')">技术文章</a></li>
          <li><a v-on:click="toUrl('myProduction')"> 作品展示</a></li>
          <li><a v-on:click="toUrl('community')" > 程序员社区</a></li>
          <li v-if="this.$store.state.common.userInfo === null"><a v-on:click="showLoginOrRegsit('login')" > 登入</a></li>
          <li v-if="this.$store.state.common.userInfo === null"><a v-on:click="showLoginOrRegsit('regist')" > 注册 </a></li>
          <li v-if="this.$store.state.common.userInfo !== null"><a v-on:click="toUrl('userCenter')" > {{this.$store.state.common.userInfo.username}}</a></li>
          <li v-if="this.$store.state.common.userInfo !== null"><a v-on:click="loginOut" > 退出</a></li>

          <br class="clear" />
        </ul>
      </transition>
    </div>
  </div>

</template>

<script>
import * as api from '../../service/getData'
import {mapActions} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      show: false
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    showLoginOrRegsit (str) {
      this.show = !this.show
      if (str === 'login') {
        this.$loginOrRegist.showLogin()
      } else {
        this.$loginOrRegist.showRegist()
      }
    },
    toUrl (url) {
      this.show = !this.show
      this.$router.push('/' + url)
    },
    async loginOut () {
      await api.loginOut()
      this.setUserInfo(null)
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
    z-index: 3000;
    transition: all 1s ease;
    .router-link-active{
      color:@mainColor;
    }
    .loginOrRegist{
      float:right;
      margin-top:18px;
      a{
        color:#fff;
        cursor: pointer;
      }
      a:hover{
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

  .mheader{
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background: #333;
    color:#fff;
    z-index: 3000;
    transition: all 1s ease;
    .my-logo{
      margin-left:10px;
    }
    .moreModel{
      width:30px;
      height:30px;
      float:right;
      margin-top:15px;
      margin-right:10px;
    }
    .nav{
      margin-top:60px;
      background: #333;
      width:100%;
      border-top:1px solid @mainColor;
      padding-bottom:20px;
      li{
        text-align: center;
        padding-top:20px;
        float:left;
        width:50%;
        >a{
          color:#fff;
        }
      }
    }
    .clear{
      clear:both;
    }

  }

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

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
