<template>
  <div class="resContent" v-if="resContent!==null">

    <div class="container">
      <div class="main">
        <div>
          <div>
            <img src="../../assets/img/top.png"/>
          </div>
          <div class="mainList">
            <div class="list-model1">
              <div>
                <p>{{resContent.content.title}}</p>
                <div>
                  <span>来源:&nbsp;{{resContent.username!==null?resContent.username:resContent.content.from}}</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;{{formatDate(resContent.createTime)}}</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;{{resContent.readyNum}}</span>
                </div>
              </div>
              <div class="content"  v-html="resContent.content.content"></div>
            </div>
            <Comment v-bind:topicId="resContent.id" v-bind:type="type" v-on:commentSuccess="commentSuccess"/>
            <CommentList v-bind:topicId="resContent.id" ref="commentList" v-bind:type="type"/>
          </div>
        </div>
      </div>

      <div class="right">
       <RightList v-if="type!==null" v-bind:rightList="readyRank"  v-bind:title="'阅读排行'" v-bind:type="type"/>
       <RightList v-if="type!==null"  v-bind:rightList="recommend"   v-bind:title="'推荐排行'" v-bind:type="type"/>
      </div>
    </div>
  </div>
</template>

<script>
import {getReadyRank, getRecommend, getResContentById} from '../../service/getData'
import Tool from '../../utils/Tool'
import RightList from '../../components/res/RightList'
import Comment from '../../components/comment/Comment'
import CommentList from '../../components/comment/CommentList'
export default {
  name: 'ResContent',
  components: {
    RightList,
    Comment,
    CommentList
  },
  data () {
    return {
      readyRank: null,
      recommend: null,
      resContent: null,
      type: null
    }
  },
  created () {
    window.scrollTo(0, 0)
    this.$loading()
    this.initData()
  },
  methods: {
    commentSuccess () {
      this.$refs.commentList.initData()
    },
    async initData () {
      this.type = this.$route.query.type
      let obj = await getResContentById(this.$route.query.id, this.type)
      this.resContent = obj[0]
      this.$loading.hide()
      this.readyRank = await getReadyRank(this.type, 5)
      this.recommend = await getRecommend(this.type, 5)
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
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
  .resContent{
    width:100%;
      .main{
        width:100%;
        position: relative;
        float: left;
        padding-bottom:20px;
        >div{
          background:#fff;
          margin-right:360px;
          >div:nth-child(1){
            padding:5px 20px;
            img{
              width:100%;
              max-height:100px;
            }
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
    .content{
      overflow-x:hidden;
      img{
        width:100% !important;
      }
    }
  }
</style>
