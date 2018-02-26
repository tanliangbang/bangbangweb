<template>
  <div class="resContentList" v-if="resContentList!==null">
    <div class="nav">
      <div class="container">
        <ul>
          <li v-for="(item) in navList" :key="item.id" :class="item.name===type?'selectedBottom':''">
            <router-link :to="{ path: '/resContentList',query: { type: item.name }}">{{item.cname}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="main-right">
          <div class="main">
            <List v-if="resContentList!==null" v-bind:resContentList="resContentList" v-bind:type="type"></List>
            <Pagination v-bind:pagination = "pagination"/>
          </div>
          <div class="right">
            <RightList   v-bind:rightList="readyRank" v-bind:type="type" v-bind:title="'阅读排行'"/>
            <RightList   v-bind:rightList="recommend" v-bind:type="type" v-bind:title="'推荐排行'"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../../service/getData'
import Tool from '../../utils/Tool'
import List from '../../components/res/List'
import RightList from '../../components/res/RightList'
import Pagination from '../../plugins/pagination/Pagination'

export default {
  name: 'ResContentList',
  components: {
    List,
    RightList,
    Pagination
  },
  data () {
    return {
      readyRank: null,
      recommend: null,
      resContentList: null,
      type: null,
      navList: null,
      pagination: {
        current: 1,
        pageSize: 5,
        total: 0,
        totalSize: 0,
        onShowSizeChange: this.getCurrDate,
        onChange: null
      }
    }
  },
  created () {
    window.scrollTo(0, 0)
    this.$loading()
    this.initData()
  },
  methods: {
    async getCurrDate (currpage) {
      let start = (currpage - 1) * this.pagination.pageSize
      let obj = await api.getResContentList(this.type, start, this.pagination.pageSize)
      this.resContentList = obj.content
      this.pagination.current = currpage
      this.pagination.totalSize = obj.pageTotal
    },
    async initData () {
      this.type = this.$route.query.type
      if (!this.type || this.type == null) {
        this.navList = await api.getNav('myArticle')
        this.type = this.navList[0].name
      } else if (this.navList === null) {
        this.navList = await api.getNav('myArticle')
      }
      await this.getCurrDate(1)
      this.$loading.hide()
      this.readyRank = await api.getReadyRank(this.type, 5)
      this.recommend = await api.getRecommend(this.type, 5)
    },
    formatDate (date) {
      return Tool.formatDate1(date)
    },
    fetchData () {
      if (this.$route.name === 'resContentList' && this.$route.query.type && this.type !== null) {
        this.initData()
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
  @import "../../style/common.less";
  .resContentList{
    width:100%;
  }
  .mainList{
    background:#fff;
    margin-top:20px;
    padding-top:20px;
  }
  .nav{
    width:100%;
    height:50px;
    background:#fff;
    margin-bottom:10px;
    border-bottom:1px solid @borderColor;
    line-height:47px;
    ul{
      li{
        float:left;
        margin:0px 20px;
        font-size:14px;
        color:#71777c;
        a{
          cursor: pointer;
        }
      }
    }
    .selectedBottom{
      border-bottom:3px solid @mainColor;
    }
  }
</style>
