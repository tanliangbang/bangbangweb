<template>
    <div class="list">
      <div>
        <img src="../../assets/img/top.png">
      </div>
      <div class="mainList">
        <div class="list-model1">
          <div v-for="(item) in resContentList" :key="item.id">
            <p><router-link :to="{ path: '/resContent',query: { id: item.id, type: type }}">{{item.content.title}}</router-link></p>
            <div>
              <span>来源:&nbsp;{{item.content.from}}</span>&nbsp;&nbsp;<span>日期&nbsp;:&nbsp;{{formatDate(item.createTime)}}</span>&nbsp;&nbsp;<span>&nbsp;阅读:&nbsp;{{item.readyNum}}</span>
            </div>
            <router-link to="/resContentList">立即阅读</router-link>
            <div class="list1-content">
              <img :src="item.content.titleImg">
              <p>{{item.content.breif}}</p>
            </div>
          </div>

        </div>
      </div>

    </div>

</template>

<script>
import {getResContentList} from '../../service/getData'
import Tool from '../../utils/Tool'

export default {
  name: 'List',
  components: {
  },
  data () {
    return {
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
    },
    fetchData () {
      this.initData()
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  },
  watch: {
    '$route': 'fetchData'
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
    }
    .mainList{
      background:#fff;
    }
  }
</style>
