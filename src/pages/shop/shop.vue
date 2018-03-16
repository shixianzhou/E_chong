<template>
  <div>
    <div class="shop_head">
    <div>
      <i class="iconfont icon-return" @click="$router.back()"></i>
      <p>购物车</p>
      <i class="iconfont icon-viewgallery" @click="isShop"></i>
    </div>
  </div>
    <transition name="fade">
      <div class="E_footer" v-show="isShow">
    <div class="E_footer_tab">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="E_footer_tab">
      <span>
        <i class="iconfont icon-202"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="E_footer_tab">
      <span>
        <i class="iconfont icon-icon22fuzhi"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="E_footer_tab">
      <span>
        <i class="iconfont icon-chongwu"></i>
      </span>
      <span>我的E宠</span>
    </div>
  </div>
    </transition>
    <div class="shop_foot">
      <div class="shop_content">
        <div class="shop_content_icon">
          <i class="iconfont icon-icon22fuzhi"></i>
        </div>
        <div class="shop_content_msg">
          <span>
            购物车是空的
          </span>
        </div>
        <div class="shop_content_btn">
          <span>去逛逛</span>
          <span>我的收藏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      isShop(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/style/mixin.styl"
  i
    display block
  .E_footer
    bottom-border-1px(#e2e2e2)
    width 100%
    height 55px
    background-color: white;
    display flex
    align-items center
    justify-content center
    z-index 50
    overflow hidden
    .E_footer_tab
      display flex
      align-items center
      justify-content space-around
      flex-direction column
      width 25%
      height 100%
      >span
        font-size 12px
        margin 2px 0
        color #7e8c8d
        .iconfont
          font-size 20px
          color #7e8c8d
    &.fade-enter-active, &.fade-leave-active {
      transition: height  1s;
    }
    &.fade-enter, &.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      height: 0;
    }
  .shop_head
    background-color: #fff;
    bottom-border-1px(#e2e2e2)
    div
      box-sizing border-box
      height 50px
      width 100%
      display flex
      justify-content space-between
      padding 10px
      align-items center
      font-size 18px
      .iconfont
        font-size 20px
        color #7e8c8d
  .shop_foot
    display flex
    justify-content center
    align-items center
    .shop_content
      width 100%
      text-align center
      padding 50px
      background-color: #fff;
      .shop_content_icon
        .iconfont
          font-size 150px
          color #e2e2e2
          margin-bottom 20px
      .shop_content_msg
        span
          color #dbdbdb;
      .shop_content_btn
        width 100%
        margin-top 30px
        span
          color #999
          border-radius 5px
          border 1px solid #999
          padding 10px 20px
</style>
