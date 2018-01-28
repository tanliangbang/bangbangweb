<template>
  <div class="community">
      <div class="container">
          <div class="top">
            <img src="../../assets/img/hd01.jpg" />
          </div>

          <div class="navList">
            <ul >
              <li v-for="(item) in navList" v-on:click="toCommunity(item.name)" :key="item.id" :class="item.name === type?'active' : ''">{{item.cname}}</li>
              <a v-on:click="publish" class="publish-btn">我要发文</a>
            </ul>
          </div>

        <div class="main-right">
          <div class="main">
            <div class="listContent">
                <div>
                  <Item v-for="(item) in communityList" v-bind:type="type" v-bind:itemData="item" :key="item.id" />
                </div>
            </div>
          </div>
          <div class="right">
            <RightList  v-bind:rightList="readyRank" v-bind:type="type" v-bind:title="'阅读排行'"/>
            <RightList  v-bind:rightList="recommend" v-bind:type="type" v-bind:title="'推荐排行'"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
import * as api from '../../service/getData'
import RightList from '../../components/res/RightList'
import Item from '../../components/community/Item'

export default {
  name: 'community',
  components: {
    RightList,
    Item
  },
  data () {
    return {
      readyRank: null,
      recommend: null,
      navList: null,
      communityList: null,
      type: null
    }
  },
  created () {
    this.initData()
    this.$loading()
  },
  methods: {
    async initData () {
      this.navList = await api.getNav('community')
      this.type = this.$route.query.type
      if (!this.type || this.type == null) {
        this.type = this.navList[0].name
      }
      let obj = await api.getResContentList(this.type, 0, 10)
      this.communityList = obj.content
      this.$loading.hide()
      this.readyRank = await api.getReadyRank(this.type, 5)
      this.recommend = await api.getRecommend(this.type, 5)
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    },
    toCommunity (type) {
      this.$router.push('community?type=' + type)
    },
    fetchData () {
      this.initData()
    },
    publish () {
      let userInfo = this.$store.state.common.userInfo
      if (userInfo && userInfo !== null) {
        this.$router.push('publishArticle?type=' + this.type)
      } else {
        this.$loginOrRegist.showLogin()
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../style/common";
.community{
  .top{
    width:100%;
    >img{
      width:100%;
      height:200px;
    }
  }
  .navList{
    >ul{
      margin: 0px;
      width: 100%;
      height: 48px;
      background: #fff;
      border: 1px solid #f0f0f0;
      overflow: hidden;
      position: relative;
      .active{
        background:@mainColor;
        color:#fff;
      }
      >li{
        float: left;
        padding: 0 30px;
        border-right: 1px solid #f0f0f0;
        font-size: 16px;
        line-height: 48px;
        position: relative;
        cursor: pointer;
      }
    }
    .publish-btn{
      position: absolute;
      right: 20px;
      top: 9px;
      width: 80px;
      text-align: center;
      height: 30px;
      font-size:14px;
      background:@mainColor;
      color: #fff;
      line-height: 30px;
      cursor: pointer;
    }
  }
  .main-right{
    margin-top:10px;
  }
  .listContent{
    margin-right:360px;
    background:#fff;
    padding:20px;
    >div{
      >div:last-child{
        border-bottom:none;
      }
    }
  }
}

</style>
