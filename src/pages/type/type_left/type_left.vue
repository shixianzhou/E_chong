<template>
  <div class="leftcontent">
    <div class="container">
      <div class="left" ref="left">
      <ul >
        <li v-for="item in 16">为您推荐</li>
      </ul>
    </div>
      <div class="right">
        <div class="right-container" ref="right">
          <div>
            <div class="sort-recom" >
              <div class="sort-recom_top">
                <p>狗狗主粮</p>
                <img src="./images/cate_right_img.png" alt="">
              </div>
              <div class="sort-recom_bottom">
                <ul>
                  <li v-for="item in 4">
                    <img src="./images/1.jpg" alt="">
                    <p>进口狗粮</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sort-recom" >
              <div class="sort-recom_top">
                <p>热门品牌</p>
              </div>
              <div class="sort-recom_bottom2">
                <ul>
                  <li v-for="item in 15">
                    <div>
                      <img src="./images/品牌.jpg" alt="">
                      <p>进口狗粮</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll(this.$refs.left, {
        click:true
      })
      new BScroll(this.$refs.right, {
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  img
    display block
  .container
    width 100%
    height 100%
    display flex
  .right-container
    height 100%
    div
      background-color: #fff;
  .leftcontent
    width 100%
    height 100%
    display flex
    padding-top 40px
    padding-bottom 55px
    box-sizing border-box
    .left
      background-color: #fff;
      width 20%
      ul
        width 100%
        li
          border-bottom 1px solid #f3f4f5;
          height 50px
          font-size 12px
          text-align center
          padding 20px 0
          box-sizing border-box
    .right
      width 80%
      height 100%
      margin-top 5px
      margin-left 5px
      background-color #fff
      .sort-recom
        box-sizing border-box
        width 100%
        padding 5px
        overflow hidden
        .sort-recom_top
          width 100%
          display flex
          justify-content space-between
          margin-top 10px
          margin-left 5px
          color #999
          p
            font-size 12px
          img
            width 46px
            height 10px
            margin-right 5px
        .sort-recom_bottom
          ul
            display flex
            flex-wrap wrap
            li
              margin 10px 5px 0 5px
              width 29%
              img
                width 100%
              p
                font-size 12px
                text-align center
                margin-top 10px
                color #333
        .sort-recom_bottom2
          width 100%
          ul
            display flex
            flex-wrap wrap
            width 100%
            li
              margin 10px 5px 0 5px
              width 45%
              div
                box-sizing border-box
                img
                  width 80%
                  margin 5px auto
                  border 1px solid #e2e2e2
                p
                  text-align center
                  font-size 12px
</style>
