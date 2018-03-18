<template>
  <div class="allkind">
    <TypeHead/>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TypeHead from '../../components/TypeHead.vue'
  export default {
    mounted(){
      this.$store.dispatch('getTypeLeft')
      this.$store.dispatch('getTypeRight')
    },
    components:{
      TypeHead
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/style/mixin.styl"
.allkind
  width 100%
  height 100%
</style>
