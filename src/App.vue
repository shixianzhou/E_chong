<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from './components/Footer.vue'
export default {
components:{
  Footer
},
  mounted(){
  this.$store.dispatch('getHomepage')
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
</style>
