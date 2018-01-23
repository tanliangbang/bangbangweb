<template>
  <div class="myProduction">
      <div class="container">
        <div class="productionList">
                <div>
                   <div  v-on:mouseenter="showCode($event)">
                     <div class="hide">
                       <img src="../../assets/img/code.png"/>
                     </div>
                      <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                      <p>这是一个佰草集宣传的H5</p>
                   </div>
                  <div>
                    <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                  </div>
                  <div>
                    <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                  </div>
                </div>
              <div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
              </div>
              <div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
                <div>
                  <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
                </div>
              </div>
            <div>
              <div>
                <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
              </div>
              <div>
                <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
              </div>
              <div>
                <img src="http://118.89.161.150:3000/public/files/2-16031Q55436222.jpg"/>
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
  },
  methods: {
    showCode (event) {
       console.log(event)
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
          >img{
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
</style>
