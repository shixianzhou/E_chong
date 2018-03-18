<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-show="$route.path === '/home'||$route.path === '/type/right'||$route.path === '/type/left'"></Footer>
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
  this.$store.dispatch('getTypeLeft')
  this.$store.dispatch('getTypeRight')
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
</style>
