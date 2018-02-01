<template>
    <div class="list">
      <div>
        <img src="../../assets/img/top.png">
      </div>
      <div class="mainList">
          <div class="list-model1">
            <transition-group   v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
            <div class="item" v-for="(item, index)  in resContentList"   v-bind:data-index="index" :key="item.id" >
                  <p v-if="type!==null"><router-link :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>
                  <div>
                    <span>来源:&nbsp;{{item.content.from}}</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;{{formatDate(item.createTime)}}</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;{{item.readyNum}}</span>
                  </div>
                  <div class="list1-content">
                    <img :src="item.content.titleImg">
                    <p>{{item.content.breif}}</p>
                  </div>
              </div>
            </transition-group>

          </div>

      </div>

    </div>

</template>

<script>
import Tool from '../../utils/Tool'
export default {
  name: 'List',
  props: ['resContentList', 'type'],
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
    beforeEnter: function (el) {
        el.style.transform = 'scale(0.7)'
    },
    enter (el) {
      let delay = el.dataset.index * 150
      setTimeout(function () {
        el.style.transform = 'scale(1)'
        el.style.opcity = 1
        el.style.transition = 'all 0.2s'
      }, delay)
    },
    leave (el) {
        el.style.opacity = 0
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";
  .list{
      margin-right:360px;
      background:#fff;
    >div:nth-child(1){
      padding:5px 20px;
      >img{
        width:100%;
      }
    }
    .mainList{
      background:#fff;
    }
  }

@keyframes listAnimation
{
  from {transform: translateY(30px);opacity: 0}
  to {transform: translateY(0px);opacity:1}
}
</style>
