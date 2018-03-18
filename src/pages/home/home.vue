<template>
  <div class="app" v-if="homepage.menus">
    <div class="E_head">
      <div class="title">
        <div class="address">
          <span class="E_type">狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <i></i>
        </div>
        <div class="search">
          <p>
            <input type="text" placeholder="搜索商品和品牌">
            <i class="iconfont icon-sousuo"></i>
          </p>
        </div>
        <div class="info"  @click="$router.push('/user')">
          <a href="javascript:">
            <img src="./images/mydope.png" alt="">
          </a>
        </div>
      </div>
      <div class="nav" ref="wrapper1">
        <ul class="nav_content">
          <li v-for="(item,index) in homepage.menus" :key="index"
          :class="{active:crindex===index}" @click="goto(index)"
          >{{item.menu_name}}</li>
        </ul>
      </div>
    </div>
    <div class="Bscroll_test" ref="wrapper2">
    <div class="container">
      <div class="swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(i,index) in homepage.dog_banner">
              <img :src="i" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="bg">
        <img :src="homepage.dog_img" alt="">
      </div>
      <div class="columnnavdiv">
        <ul class="clearfix">
          <li v-for="(i,index) in homepage.menu_list" :key="index">
            <img :src="i" alt="">
          </li>
        </ul>
      </div>
      <div class="bg">
        <img :src="homepage.miaosha" alt="">
      </div>
      <div class="surprise">
        <div class="surprise_up">
          <img class="img1" src="./images/meirifengqiang.png" alt="">
          <div class="right">
            <span>本场结束</span>
            <span>
              <span class="time_1">12</span>
              <span>:</span>
              <span class="time_2">00</span>
            </span>
            <img class="img2" src="./images/更多.png" alt="">
          </div>
        </div>
        <!--<div class="surprise_down">
          <ul>
            <li>
              <img src="./images/miaosha/food_1.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </li>
            <li>
              <img src="./images/miaosha/food_5.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </li>
          </ul>
        </div>-->

        <div class="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javaScript:">
              <img src="./images/miaosha/food_1.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
              </a>
            </div>
            <div class="swiper-slide">
              <img src="./images/miaosha/food_5.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </div>
            <div class="swiper-slide">
              <img src="./images/miaosha/food_2.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </div>
            <div class="swiper-slide">
              <img src="./images/miaosha/food_6.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </div>
            <div class="swiper-slide">
              <img src="./images/miaosha/food_5.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </div>
            <div class="swiper-slide">
              <img src="./images/miaosha/food_3.jpg" alt="">
              <div>
                <span>￥7.60</span>
              </div>
              <p>省68.4</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg">
        <img :src="homepage.brand_power" alt="">
      </div>
      <div class="bg">
        <img :src="homepage.gif" alt="">
      </div>
      <div class="bg">
        <img :src="homepage.vip" alt="">
      </div>
      <div class="div_img">
        <div v-for="(item,index) in homepage.vip_services" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="bg">
        <img :src="homepage.dapaituan" alt="">
      </div>
      <div class="tuangou">
        <div class="swiper-container3">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homepage.dapaituan_list">
              <img :src="item" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination3"></div>
        </div>
      </div>
      <div class="bg">
        <img :src="homepage.haohuo" alt="">
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in homepage.haohuo_list">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
     <!-- <div class="list">
        <ul>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>
          <li>
            <img src="./images/list/2.jpg" alt="">
          </li>

        </ul>
      </div>-->
      <div class="bg">
        <img :src="homepage.zuican" alt="">
      </div>
      <div class="bg" name="zuicanjiang">
        <img :src="homepage.zuican_content" alt="">
      </div>
      <div class="bg">
        <img :src="homepage.special" alt="">
      </div>
      <div class="chaopin">
        <div>
          <img :src="homepage.special_list[0]" alt="">
        </div>
        <div class="2to">
          <img :src="homepage.special_list[1]" alt="">
          <img :src="homepage.special_list[2]" alt="">
        </div>
      </div>
      <div class="bg">
        <img :src="homepage.lanmu" alt="">
      </div>
      <div class="currency-adcon">
        <ul>
          <li v-for="i in homepage.lanmu_list">
            <img :src="i" alt="">
          </li>
        </ul>
      </div>
      <div class="E_foot">
        <div class="E_foot_container">
          <span>触屏版 </span>
          <span>手机客户端 </span>
          <span>关于我们</span>
          <span>联系我们</span>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>
    </div>
    </div>
    <div class="gougou" ref="gou">
    </div>
  </div>
</template>

<script>
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button";
  import MtSearch from "../../../node_modules/mint-ui/packages/search/src/search";
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    components: {
      MtSearch,
      MtButton},
    data(){
        return{
          search:'',
          selected:'',
          crindex:0
        }
      },
    mounted(){
      console.log(this.$route);
  },
    computed:{
      ...mapState(['homepage']),
    },
    methods:{
      goto(index){
        this.crindex = index
      }
    },
    watch:{
      homepage(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
          new Swiper('.swiper-container2', {
            autoplay: true,
            slidesPerView:3.5,
            spaceBetween:10,
            freeMode:true,
            pagination: {
              el: '.swiper-pagination2'
            }
          })
          new Swiper('.swiper-container3', {
//        loop:true,
            autoplay: true,
//        slidesPerView:3.5,
//        spaceBetween:10,
//        freeMode:true,
            pagination: {
              el: '.swiper-pagination3'
            }
          })
          new BScroll(this.$refs.wrapper1, {
            scrollX:true,
            click:true
          })
          new BScroll(this.$refs.wrapper2, {
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .swiper-container3
    position relative
    .swiper-pagination3
      position absolute
      bottom 3px
      z-index 10
      text-align center
      .swiper-pagination-bullet
        color red
      .swiper-pagination-bullet-active
          background-color: #fff;
          width 16px
          border-radius 30px

  img
    display block
  .Bscroll_test
    height 100%
  .app
    height 100%
    background-color: #fff;
    position relative
    .E_head
      position fixed
      z-index 100
      top 0
      right 0
      left 0
      .title
        width 100%
        height 50px
        background-color: #fff;
        display flex
        align-items center
        justify-content space-around
        box-sizing border-box
        .address
          position relative
          margin-right 5px
          color #898989
          .E_type
            font-size 14px
          font-size 13px
          i
            position: absolute;
            top: 5px;
            right: -11px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
        .search
          position relative
          input
            width 230px;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
          .iconfont
            position absolute
            right 5px
            top 5px
        .info
          img
            width 25px
            height 25px
      .nav
        width: 100%;
        height: 35px;
        background-color: #fff;
        overflow hidden
        .nav_content
          display flex
          justify-content space-around
          width 140%
          padding  8px 5px
          li
            font-size 14px
            color #999
            &.active
              color #459d36
              padding-bottom 12px
              border-bottom #459d36 2px solid
    .container
      padding-top 85px
      width 100%
      .swiper
        width 100%
        .swiper-container
          width 100%
          .swiper-wrapper
            width 100%
            .swiper-slide
              width 100%
              img
                width 100%
          .swiper-pagination
            .swiper-pagination-bullet
              height 5px
              width 5px
              opacity  .9
              background-color: #fff;
            .swiper-pagination-bullet-active
              background-color: #fff;
              width 16px
              border-radius 30px
      .bg
        width 100%
        img
          width 100%
      .columnnavdiv
        width 100%
        .clearfix
          width: 100%
          display flex
          flex-wrap wrap
          li
            width 20%
            img
              width 100%
      .surprise
        width 100%
        background: #fff;
        padding-bottom 10px
        overflow hidden
        .surprise_up
          width 100%
          height 34px
          display flex
          align-items center
          justify-content space-between
          padding 10px
          font-size 13px
          box-sizing border-box
          .img1
            height 19px
          .img2
            height 34px
            display inline-block
            vertical-align middle
            margin-left  -15px
          .right
            padding-top 2px
            .time_1,.time_2
              border 1px #666 solid
              padding 2px
        /*
              .surprise_down
                img
                  width 85px
                  height 85px
                ul
                  width 100%
                  display flex
                  li
                    width 25%
                    text-align center
                    line-height 16px
                    padding 10px
                    div
                      padding 5px
                      span
                        font-size 14px
                        color red
                    p
                      font-size 12px
                      text-align center
                      color #666
        */
        .swiper-container2
          margin 5px 0
          img
            width: 85px
            height: 85px
          .swiper-slide
            display flex
            flex-direction column
            align-items center
            a
              text-align center
            div
              padding 5px
              span
                font-size 14px
                color red
                text-align center
            p
              font-size 12px
              color #666
      .div_img
        display flex
        flex-wrap wrap
        div
          width 50%
          img
            width 100%
      .tuangou
        width 100%
        overflow hidden
        .swiper-container3
          width 100%
          .swiper-slide
            width 100%
            img
              width 100%
      .list
        width 100%
        background-color: #000;
        padding-bottom 20px
        ul
          width: 100%
          display flex
          flex-wrap wrap
          li
            width 50%
            img
              width 100%
      .chaopin
        width 100%
        display flex
        flex-wrap wrap
        background-color: #000;
        div
          width 50%
        img
          width: 100%
      .currency-adcon
        width 100%
        ul
          width 100%
          display flex
          flex-wrap wrap
          li
            width 50%
            background-color #000
            img
              width 100%
      .E_foot
        width 100%
        height 86px
        text-align center
        padding 20px 0
        span
          font-size 14px
          margin-left 10px
        p
          margin-top 10px
          font-size 12px
    .gougou
      position fixed
      width 40px
      height 50px
      right 0
      top 75%
      background-image url(./images/godog.png)
      background-repeat no-repeat
      background-position 0 0
      background-size 80px 50px
      z-index 10
      animation gogo 2s steps(1,end) infinite;
      @keyframes gogo {
        50%{background-position:-41px 0}
      }
</style>
