<template>
  <div class="myProduction">
      <div class="container">
        <div class="productionList">
                <div>
                   <div v-for="(item) in resContentList1" :key="item.id"   v-on:mouseenter="showCode($event)" v-on:mouseleave="hideCode($event)">
                     <div class="hide" >
                       <img :src="item.content.code"/>
                     </div>
                      <img :src="item.content.img"/>
                      <p>{{item.content.title}}</p>
                   </div>
                </div>
              <div>
                <div v-for="(item) in resContentList2" :key="item.id"   v-on:mouseenter="showCode($event)" v-on:mouseleave="hideCode($event)">
                  <div class="hide" >
                    <img :src="item.content.code"/>
                  </div>
                  <img :src="item.content.img"/>
                  <p>{{item.content.title}}</p>
                </div>
              </div>
              <div>
                <div v-for="(item) in resContentList3" :key="item.id"   v-on:mouseenter="showCode($event)" v-on:mouseleave="hideCode($event)">
                  <div class="hide" >
                    <img :src="item.content.code"/>
                  </div>
                  <img :src="item.content.img"/>
                  <p>{{item.content.title}}</p>
                </div>
              </div>
            <div>
              <div v-for="(item) in resContentList4" :key="item.id"   v-on:mouseenter="showCode($event)" v-on:mouseleave="hideCode($event)">
                <div class="hide" >
                  <img :src="item.content.code"/>
                </div>
                <img :src="item.content.img"/>
                <p>{{item.content.title}}</p>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {getResContentList} from '../../service/getData'
export default {
  name: 'MyProduction',
  data () {
    return {
      resContentList1: [],
      resContentList2: [],
      resContentList3: [],
      resContentList4: []
    }
  },
  created () {
    this.initDate()
  },
  methods: {
    async initDate() {
      let obj = await getResContentList('production', 0, 10)
      this.resContentList = obj.content
      for (let i = 0; i<this.resContentList.length; i++) {
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
    },
    showCode (event) {
      event.target.firstChild.style.display = 'block'
    },
    hideCode (event) {
      event.currentTarget.firstChild.style.display = 'none'
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
      >div{
        width:100%;
        height:300px;
        border: 1px solid #d5e0dd;
        background: #fff;
        box-shadow: 0 0 7px #cae7df;
        margin-bottom:20px;
        padding:20px;
        position:relative;
        >img{
          width:100%;
          height:230px;
        }
        p{
          margin-top:10px;
          color:#999;
          text-align: center;
          font-size:14px;
        }
        >div{
          position:absolute;
          background:rgba(0,0,0,0.5);
          width:100%;
          height:100%;
          top:0px;
          left:0px;
          padding:40px;
          transition: display 0.3s ease;
          >img{
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
</style>
