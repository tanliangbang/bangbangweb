<template>
  <div class="commentList" v-if="commentList!==null">
    <p>评论列表</p>
    <div v-for="comment in commentList" :key="comment.id">
       <div >
         <div class="top">
           <span class="fl">{{comment.user.userName}}</span>
           <span class="fr">34分钟前</span>
         </div>
         <p class="content">{{comment.content}}</p>
         <div class="replayBtn">
           <a>回复</a>
         </div>
       </div>
        <div class="replay" v-if="comment.reply.list.length>0">
          <div v-for="reply in comment.reply.list" :key="reply.id">
            <div class="top">
              <span class="fl">{{reply.user.userName}}&nbsp;&nbsp;回复:&nbsp;&nbsp;{{reply.to_user.userName}}</span>
              <span class="fr">34分钟前</span>
            </div>
            <p class="content">{{reply.content}}</p>
            <div class="replayBtn">
              <a>回复</a>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import * as api from '../../service/getData'
export default {
  name: 'CommentList',
  props: ['topicId', 'type'],
  data () {
    return {
      commentList: null
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData () {
      let res = await api.getCommentList(this.topicId, this.type, 0, 5)
      this.commentList = res.list
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common";
  .commentList{
    padding:20px 30px;
    >p:nth-child(1){
      color:@mainColor;
      padding-bottom:20px;
      border-bottom:1px dashed @borderColor;
      margin:10px 0px;
    }
    >div{
      margin-top:10px;
      border-bottom:1px dashed @borderColor;
      padding-bottom:10px;
    }
    >div:last-child{
      border-bottom:none;
    }

  }
  .top{
    height:30px;
    line-height: 30px;
    >span:nth-child(1){
      color:@mainColor;
    }
    >span:nth-child(2){
      color:@gray-color;
      font-size:14px;
    }
  }
  .content{
    padding:5px 0px;
    font-size:14px;
  }
  .replayBtn{
    text-align: right;
    margin-top:5px;
    >a{
      color:@mainColor;
    }
    cursor: pointer;
  }
  .replay{
     background:#f5f7fa;
     margin:10px 40px;
    padding:10px 20px;
    border-radius:5px;
    >div{
      border-bottom:1px dashed @borderColor;
      padding-bottom:10px;
    }
    >div:last-child{
      border-bottom:none;
    }
  }

</style>
