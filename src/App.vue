<template>
  <div id="app">
   <Header></Header>
    <div class="pageContent" v-bind:style="{ minHeight:minHeight+'px' }">
      <keep-alive exclude="rightList">
          <router-view/>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { mapGetters, mapActions } from 'vuex'
import * as api from './service/getData'
export default {
  name: 'App',
  data () {
    return {
      minHeight: '0px'
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      currWidth: 'setCurrWidth'
    })
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
    this.minHeight = document.documentElement.clientHeight - 60
    let width = document.documentElement.clientWidth
    this.$store.dispatch('setCurrWidth', width)
    window.onresize = () => {
      this.minHeight = document.documentElement.clientHeight - 60
      let width = document.documentElement.clientWidth
      this.$store.dispatch('setCurrWidth', width)
    }
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ]),
    async initData () {
      let userInfo = await api.getUserInfo()
      if (userInfo && userInfo.id) {
        this.setUserInfo(userInfo)
      }
    }
  }
}
</script>

<style lang="less">
 html,body{
   margin:0px;
   width:100%;
   min-height:100%;
/*
   background:linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
*/
   background:#ccffcc;
 }
 .pageContent{
   padding-top:60px;
 }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
}
</style>
