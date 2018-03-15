<template>
  <div class="allkind_head">
    <router-link to="/type/left" class="left head">
      <span class="on">分类</span>
    </router-link>
    <router-link to="/type/right" class="right head">
      <span>品牌</span>
    </router-link>
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .allkind_head
    position fixed
    top 0
    left 0
    right 0
    height 40px
    display flex
    justify-content center
    align-items center
    bottom-border-1px(#e5e5e5)
    background-color  #fff
    border-bottom 1px solid #e5e5e5
    .head
      width 50%
      height 40px
      line-height 40px
      font-size 13px
      padding 0 5%
      &.router-link-active
        color crimson
        span
          border-bottom 2px solid crimson
          padding-bottom  10px
      span
        font-weight  700
    .left
      text-align right
    .iconfont
      position absolute
      right 5%
</style>
