<template>
  <div class="leftcontent">
    <div class="left">
      <ul>
        <li v-for="item in 13">为您推荐</li>
      </ul>
    </div>
    <div class="right">
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
            <li v-for="item in 10">
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
</template>

<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  img
    display block
  .leftcontent
    width 100%
    height 100%
    overflow hidden
    display flex
    margin-top 40px
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
                  border 1px solid crimson
                p
                  text-align center
                  font-size 12px



</style>
