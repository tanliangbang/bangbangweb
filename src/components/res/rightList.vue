<template>
  <div class="right-list1">
    <div>{{title}}</div>
    <div v-if="rightList!==null" v-for="(item) in rightList" :key="item.id" class="right-list1-item">
      <img v-if="item.content.titleImg" :src="item.content.titleImg">
      <img v-if="!item.content.titleImg" src="../../assets/img/user.jpg">

      <p><router-link :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>
      <div>{{item.content.from}} 发表月:{{formatDate(item.createTime)}}</div>
    </div>
  </div>
</template>

<script>
import Tool from '../../utils/Tool'
export default {
  name: 'RightList',
  props: ['rightList', 'title', 'type'],
  data () {
    return {}
  },
  methods: {
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
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
        >a{
          color:@mainColor;
        }
        >a:hover{
          color:@a-hover-color;
        }
      }
      >div{
        padding-left:80px;
        margin-top:5px;
        font-size:12px;
        color:#666;
      }
    }
  }


  .right-list1{
    animation: myfirst 1s;
  }
  @keyframes myfirst
  {
    from {transform: translateX(300px);}
    to {transform: translateX(0px);}
  }
</style>
