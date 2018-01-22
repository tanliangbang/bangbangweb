<template>
  <div class="resContentList">
    <div class="container">
      <div class="main">
        <List></List>
      </div>
      <div class="right">
          <div class="right-list1">
              <div>阅读排行</div>
              <div v-for="(item) in readyRank" :key="item.id" class="right-list1-item">
                <img :src="item.content.titleImg">
                <p>{{item.content.title}}</p>
                <div>{{item.content.from}} 发表月:{{formatDate(item.createTime)}}</div>
              </div>
          </div>
          <div class="right-list1">
            <div>阅读排行</div>
            <div v-for="(item) in recommend" :key="item.id" class="right-list1-item">
              <img :src="item.content.titleImg">
              <p>{{item.content.title}}</p>
              <div>{{item.content.from}} 发表月:{{formatDate(item.createTime)}}</div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getReadyRank, getRecommend} from '../../service/getData'
import Tool from '../../utils/Tool'
import List from '../../components/res/List'

export default {
  name: 'ResContentList',
  components: {
    List
  },
  data () {
    return {
      readyRank: null,
      recommend: null
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      this.readyRank = await getReadyRank(this.$route.query.type, 5)
      this.recommend = await getRecommend(this.$route.query.type, 5)
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
  .right-list1{
    padding:10px;
     >div:nth-child(1){
      padding-top:10px;
      color:@mainColor;
      padding-bottom:5px;
      border-bottom:1px solid @borderColor;
     }
     .right-list1-item{
        position:relative;
        margin-top:10px;
        border-bottom:1px dashed @borderColor;
        padding-bottom:15px;
        min-height:70px;
        img{
          width:70px;
          height:60px;
          position:absolute;
        }
       >p{
         padding-left:80px;
         font-size:12px;
         color: @mainColor;
       }
       >div{
         padding-left:80px;
         margin-top:5px;
         font-size:12px;
         color:#666;
       }
     }
  }

</style>
