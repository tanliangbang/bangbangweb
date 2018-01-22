<template>
  <div id="app">
   <Header></Header>
    <div class="pageContent">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
 html,body{
   margin:0px;
   width:100%;
   min-height:100%;
   background:linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
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
