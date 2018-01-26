<template>
  <div :class="showLoginAndRegist?'':'hide'">
     <div class="mask"></div>
    <div class="loginAndRegist">
      <div class="login">
         <button class="close" v-on:click="closeFrame">X</button>
        <div class="title">
          <span v-on:click="loginOrRegist('loginAndregist')" :class="isLogin?'active':''">登入</span>
          <span v-on:click="loginOrRegist('regist')" :class="isLogin?'':'active'">注册</span>
        </div>
        <div class="nomalInput">
           <input type="text" placeholder="请输入登入名" /><br/>
           <input type="text" placeholder="请输入密码，区分大小写" />
          <div>
            <input type="checkbox" />记住密码    <a>忘记密码</a>
          </div>
          <button>登&nbsp;&nbsp;入</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'LoginAndRegist',
  data () {
    return {
      showLoginAndRegist: true,
      isLogin: true
    }
  },
  methods: {
    showLogin () {
      this.showLoginAndRegist = true
      this.loginOrRegist('loginAndregist')
    },
    showRegist () {
      this.showLoginAndRegist = true
      this.loginOrRegist('regist')
    },
    closeFrame () {
      this.showLoginAndRegist = false
    },
    loginOrRegist (type) {
      if (type === 'loginAndregist') {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
 .mask{
   width:100%;
   height:100%;
   position:fixed;
   top:0px;
   z-index:9998;
   background:#000;
   opacity:0.7;
 }
  .loginAndRegist{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:9999;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
  }
  .login{
    background:#fff;
    position:relative;
    padding:20px;
    border-radius:5px;
    .close{
      background:#fff;
      border:2px solid @borderColor;
      border-radius:50%;
      color:@borderColor;
      position:absolute;
      width: 25px;
      height: 25px;
      right: 15px;
      padding-left:7px;
      top: 10px;
      cursor: pointer;
    }
    .close:hover{
      color:@mainColor;
      border:2px solid @mainColor;
    }
    .title{
       border-bottom:1px solid @borderColor;
       >span{
         display:inline-block;
         width:80px;
         height:50px;
         font-size:18px;
         line-height:50px;
         text-align: center;
         cursor: pointer;
       }
    }
    .active{
      border-bottom:2px solid @mainColor;
      color:@mainColor;
    }
    .nomalInput{
      padding:30px 30px;
      >input{
        width: 279px;
        padding: 13px;
        background-color: #fff;
        border: 1px solid @borderColor;
        box-shadow: 2px 0px 5px 0px #fff;
        border-radius:5px;
        margin-bottom:20px;
      }
      >div{
        font-size:14px;
        color:@gray-color;
        >input:nth-child(1){
          vertical-align: -2px;
        }
        >a{
          float:right;
          color:@mainColor;
        }
      }
      >button{
        width:100%;
        height:40px;
        text-align: center;
        line-height: 40px;
        background:@mainColor;
        border:none;
        color:#fff;
        font-size:16px;
        margin-top:20px;
      }
    }
  }
</style>
