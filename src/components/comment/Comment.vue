<template>
  <div class="comment">
        <textarea v-model="comment.content"  placeholder="回复:"></textarea>
        <div>
          <button v-on:click="commitComment">确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
        </div>
  </div>
</template>

<script>
import * as api from '../../service/getData'
export default {
  name: 'Comment',
  props: ['topicId', 'type'],
  data () {
    return {
      comment: {
        topic_id: this.topicId,
        to_uid: 0,
        reply_id: 0,
        type: this.type,
        content: ''
      }
    }
  },
  methods: {
    async commitComment () {
      if (this.comment.content === '') {
        return false
      } else {
        await api.comment(this.comment)
        this.$prompt.success('评论成功')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common";
  .comment{
    width:100%;
    padding:20px 20px;
    margin-top:20px;
    border-top:1px dashed @borderColor;
    textarea{
      width:100%;
      height:120px;
      font-size:16px;
      border:1px solid @borderColor;
      color:@gray-color;
      border-radius: 5px;
      padding:10px;
    }
    >div{
      text-align: right;
    }
    button{
      width:80px;
      height:35px;
      background: @mainColor;
      color:#fff;
      border:none;
      margin-top:5px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>
