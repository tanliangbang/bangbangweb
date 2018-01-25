<template>
  <div class="myProduction">
      <div class="container">
        <div class="production-page">
          <img src="../../assets/img/proImg.jpg">
          <div class="productionList">
            <div>
              <ListItem v-for="(item) in resContentList1" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in resContentList2" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in resContentList3" :key="item.id" v-bind:item="item" />
            </div>
            <div>
              <ListItem v-for="(item) in resContentList4" :key="item.id" v-bind:item="item" />
            </div>
          </div>

        </div>

      </div>
  </div>
</template>

<script>
import {getResContentList} from '../../service/getData'
import ListItem from '../../components/production/ListItem'
export default {
  name: 'MyProduction',
  components: {
    ListItem
  },
  data () {
    return {
      resContentList1: [],
      resContentList2: [],
      resContentList3: [],
      resContentList4: []
    }
  },
  created () {
    this.$loading()
    this.initDate()
  },
  methods: {
    async initDate () {
      let obj = await getResContentList('production', 0, 10)
      this.$loading.hide()
      this.resContentList = obj.content
      for (let i = 0; i < this.resContentList.length; i++) {
        if (i % 4 === 0) {
          this.resContentList1.push(this.resContentList[i])
        }
        if (i % 4 === 1) {
          this.resContentList2.push(this.resContentList[i])
        }
        if (i % 4 === 2) {
          this.resContentList3.push(this.resContentList[i])
        }
        if (i % 4 === 3) {
          this.resContentList4.push(this.resContentList[i])
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .productionList{
    display: flex;
    flex-wrap:wrap;
    >div{
      flex:1;
      margin:20px;
    }
  }

  .production-page{
    background:#fff;
    >img{
      width:100%;
      height:200px;
    }
  }
</style>
