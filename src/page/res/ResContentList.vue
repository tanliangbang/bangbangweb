<template>
  <div class="resContentList" v-if="resContentList!==null">
    <div class="container">
      <div class="main">
        <List v-if="resContentList!==null" v-bind:resContentList="resContentList" v-bind:type="type"></List>
      </div>
      <div class="right">
        <RightList  v-bind:rightList="readyRank" v-bind:type="type" v-bind:title="'阅读排行'"/>
        <RightList  v-bind:rightList="recommend" v-bind:type="type" v-bind:title="'推荐排行'"/>
      </div>
    </div>
  </div>
</template>

<script>
import {getReadyRank, getRecommend, getResContentList} from '../../service/getData'
import Tool from '../../utils/Tool'
import List from '../../components/res/List'
import RightList from '../../components/res/RightList'

export default {
  name: 'ResContentList',
  components: {
    List,
    RightList
  },
  data () {
    return {
      readyRank: null,
      recommend: null,
      resContentList: null,
      type: null
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      this.type = this.$route.query.type
      let obj = await getResContentList(this.type, 0, 10)
      this.resContentList = obj.content
      this.readyRank = await getReadyRank(this.type, 5)
      this.recommend = await getRecommend(this.type, 5)
    },
    formatDate (date) {
      return Tool.formatDate1(date)
    },
    fetchData () {
      this.initData()
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
      right:0px;
      background:#fff;
      width:340px;
    }
  }
  .mainList{
     background:#fff;
     margin-top:20px;
    padding-top:20px;
  }
</style>
