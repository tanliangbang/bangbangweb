<template>
  <div class="resContentList">
    <div class="container">
      <div class="main">
        <div>
           <div>
             <img src="../assets/img/top.png">
           </div>
           <div class="mainList">
                <div class="list-model1">
                  <div>
                    <p><router-link to="/resContentList">利用 SVG 和 CSS3 实现有趣的边框动画</router-link></p>
                    <div>
                      <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
                    </div>
                    <router-link to="/resContentList">立即阅读</router-link>
                    <div class="list1-content">
                      <img src="http://118.89.161.150:3000/public/files/124892516.jpg">
                      <p>很多人在找工作的过程中，总是碰壁，在之前一篇文章中讲述了我的一些个人经历。我是个普通的人，而我相信很多人都跟我一样，不是那么的有才华，也不是那么的笨，所以我的经历应该更普众化。还有就是找工作是个漫长的过程，不要急、不要急、不要急</p>
                    </div>
                  </div>

                  <div>
                    <p><router-link to="/resContentList">利用 SVG 和 CSS3 实现有趣的边框动画</router-link></p>
                    <div>
                      <span>作者:&nbsp;大漠</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;2018-01-17</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;384</span>
                    </div>
                    <router-link to="/resContentList">立即阅读</router-link>
                    <div class="list1-content">
                      <img src="http://118.89.161.150:3000/public/files/124892516.jpg">
                      <p>很多人在找工作的过程中，总是碰壁，在之前一篇文章中讲述了我的一些个人经历。我是个普通的人，而我相信很多人都跟我一样，不是那么的有才华，也不是那么的笨，所以我的经历应该更普众化。还有就是找工作是个漫长的过程，不要急、不要急、不要急</p>
                    </div>
                  </div>
                </div>

        <!--      <div class="list-mode2">
                  <div>
                    <div>
                      <img src="http://118.89.161.150:3000/public/files/02111156_uQkM.png">
                      <p> 只会增删查改？你还缺个数据库管理工具！ 编辑部的故事 发表于1周前     原荐</p>
                      <p>
                        任何web软件和应用程序都需要强大的数据库管理工具，因此开发者选择一款合适的数据库管理工具尤为重要。本文列出了几款好用的数据库管理工具（有些并非开源或免费），以供开发者们参考选择：
                      </p>
                    </div>
                  </div>

                <div>
                  <div>
                    <img src="http://118.89.161.150:3000/public/files/02111156_uQkM.png">
                    <p> 只会增删查改？你还缺个数据库管理工具！ 编辑部的故事 发表于1周前     原荐</p>
                    <p>
                      任何web软件和应用程序都需要强大的数据库管理工具，因此开发者选择一款合适的数据库管理工具尤为重要。本文列出了几款好用的数据库管理工具（有些并非开源或免费），以供开发者们参考选择：
                      任何web软件和应用程序都需要强大的数据库管理工具，因此开发者选择一款合适的数据库管理工具尤为重要。本文列出了几款好用的数据库管理工具（有些并非开源或免费），以供开发者们参考选择：

                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <img src="http://118.89.161.150:3000/public/files/02111156_uQkM.png">
                    <p> 只会增删查改？你还缺个数据库管理工具！ 编辑部的故事 发表于1周前     原荐</p>
                    <p>
                      任何web软件和应用程序都需要强大的数据库管理工具，因此开发者选择一款合适的数据库管理工具尤为重要。本文列出了几款好用的数据库管理工具（有些并非开源或免费），以供开发者们参考选择：
                    </p>
                  </div>
                </div>

              </div>-->

           </div>

        </div>

      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResContentList',
  data () {
    return {
      msg: 'ResContentList'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../style/common.less";
  .resContentList{
    width:100%;
    .main{
      width:100%;
      position: relative;
      float: left;
      >div{
        margin-right:360px;
        >div:nth-child(1){
          padding:5px 20px;
          background:#fff;

        }
      }
    }

    .right{
      float:left;
      margin-left: -340px;
      height:500px;
      right:0px;
      background:red;
      width:340px;
    }
  }
  .mainList{
     background:#fff;
     margin-top:20px;
    padding-top:20px;
  }

</style>
