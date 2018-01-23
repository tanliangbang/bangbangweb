<template>
  <div class="myProduction">
      <div class="container">
        <div class="productionList">
                <div class="box-3d">
                  <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                </div>
              </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'MyProduction',
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  @import "../../style/common.less";
  .productionList{
    display: flex;
    flex-wrap:wrap;
    height:600px;
    padding-top:200px;
    padding-left:300px;
        .box-3d{
          width: 170px;
          height: 170px;
          perspective: 1000px;
          >div{
            width: 170px;
            height: 170px;
            position: relative;
            transform-origin: 50%;
            transition: transform .5s linear;
            transform-style: preserve-3d;
            transform: translateZ(300px) rotateY(360deg) rotateX(370deg);
            >div{
              width: 100%;
              height: 100%;
              background-color: #efeff2;
              position: absolute;
              left: 0;
              top: 0;
            }
            >div:nth-child(1){
              transform: translateZ(84px);
              background:yellow;
            }
            >div:nth-child(2){
              background:blue;
              transform: rotateY(90deg) translateZ(84px);
            }
            >div:nth-child(3){
              background:green;
              transform: rotateY(-90deg) translateZ(84px);
            }
            >div:nth-child(4){
              background:red;
              transform: rotateX(-90deg) translateZ(84px);
            }
            >div:nth-child(5){
              background:#000;
              transform: rotateX(90deg) translateZ(84px);
            }
            >div:nth-child(6){
              background:gray;
              transform: translateZ(-84px);
            }
          }

        }
  }
</style>

