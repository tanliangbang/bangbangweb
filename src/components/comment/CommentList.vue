<template>
  <div class="commentList">
    <p>评论列表</p>
    <div>
       <div>
         <div class="top">
           <span class="fl">tanliangbang</span>
           <span class="fr">34分钟前</span>
         </div>
         <p class="content">水电费斯蒂芬斯蒂芬水电费斯蒂芬斯蒂芬</p>
         <div class="replayBtn">
           <a>回复</a>
         </div>
       </div>
        <div class="replay">
             <div>
               <div class="top">
                 <span class="fl">tanliangbang</span>
                 <span class="fr">34分钟前</span>
               </div>
               <p class="content">水电费斯蒂芬斯蒂芬水电费斯蒂芬斯蒂芬</p>
               <div class="replayBtn">
                 <a>回复</a>
               </div>
             </div>
            <div>
              <div class="top">
                <span class="fl">tanliangbang</span>
                <span class="fr">34分钟前</span>
              </div>
              <p class="content">水电费斯蒂芬斯蒂芬水电费斯蒂芬斯蒂芬</p>
              <div class="replayBtn">
                <a>回复</a>
              </div>
            </div>
          <div>
            <div class="top">
              <span class="fl">tanliangbang</span>
              <span class="fr">34分钟前</span>
            </div>
            <p class="content">水电费斯蒂芬斯蒂芬水电费斯蒂芬斯蒂芬</p>
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
    }
  },
  methods: {
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
  }

</style>
