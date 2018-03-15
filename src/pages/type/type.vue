<template>
  <div class="allkind">
    <TypeHead/>
    <router-view></router-view>
  </div>
</template>

<script>
import TypeHead from '../../components/TypeHead.vue'
  export default {
    components:{
      TypeHead
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/style/mixin.styl"
.allkind
  width 100%
</style>
