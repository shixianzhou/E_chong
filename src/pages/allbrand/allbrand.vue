<template>
  <div class="brand_container" ref="brand">
  <div class="brand">
    <div class="brand_head">
      <i class="iconfont icon-return" @click="$router.back()"></i>
      <h2>全部品牌</h2>
      <i class="iconfont icon-viewgallery"  @click="isShop"></i>
    </div>
    <transition name="fade">
      <div class="E_footer" v-show="isShow">
        <div class="E_footer_tab" @click="$router.replace('/home')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
          <span>首页</span>
        </div>
        <div class="E_footer_tab" @click="$router.replace('/type/left')">
      <span>
        <i class="iconfont icon-202"></i>
      </span>
          <span>分类</span>
        </div>
        <div class="E_footer_tab" @click="$router.replace('/shop')">
      <span>
        <i class="iconfont icon-icon22fuzhi"></i>
      </span>
          <span>购物车</span>
        </div>
        <div class="E_footer_tab" @click="$router.replace('/user')">
      <span>
        <i class="iconfont icon-chongwu"></i>
      </span>
          <span>我的E宠</span>
        </div>
      </div>
    </transition>
    <div class="brand_content">
      <ul>
        <li v-for="item in brand">
          <h2>{{item.order}}</h2>
          <ul class="brand_list">
            <li v-for="item in item.list">
              <img :src="item.logo" alt="">
              <div class="msg">
                <p >{{item.name}}</p>
                <p class="address">{{item.address}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false
      }
    },
    mounted(){
      this.$store.dispatch('getAllBrand')
    },
    computed:{
      ...mapState(['brand'])
    },
    watch:{
      brand(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.brand,{
            click:true
          })
        })
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
.brand_container
  width 100%
  height 100%
.brand
  .brand_head
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 50px
    padding  0 10px
    font-size 18px
    background-color: #fff;
    box-sizing border-box
    border-bottom 1px solid #d7d7d7
    i
      font-size 20px
      color #7e8c8d
  .brand_content
    h2
      font-size 12px
      text-indent: 15px;
      line-height: 24px;
      color #999
    .brand_list
      background-color #fff
      li
        display flex
        align-items center
        height 80px
        background-color: #fff;
        padding 10px
        box-sizing border-box
        margin-right 20px
        border-bottom: 1px solid #f3f4f5;
        img
          padding  5px
          border 1px solid #e2e2e2
          width 90px
          height 40px
        .msg
          margin 5px 20px
          p
            font-size 14px
            padding 4px
          .address
            font-size 12px
            color #999
</style>
