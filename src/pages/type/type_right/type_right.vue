<template>
  <div class="rightcontent">
    <div>
      <ul>
        <li class="brand-list" v-for="item in 5">
            <div class="wrap">
              <p class="title">—— 推荐品牌 ——</p>
              <ul class="pinpai">
                <li v-for="item in 13">
                  <div>
                    <img src="./images/a.jpg" alt="">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.rightcontent
  margin-top 45px
  padding-bottom  60px
  div
    ul
      li
        margin-bottom 10px
        background-color: #fff;
        .wrap
          .title
            text-align center
            box-sizing border-box
            padding-top 20px
            color #999
            font-size 12px
          .pinpai
            width 100%
            display flex
            flex-wrap wrap
            li
              width 30%
              margin-top  20px
              padding 0 5px
              div
                box-sizing border-box
                padding 10px
                border: 1px solid #e2e2e2;
                text-align center
                img
                  width 100%
              .name,.address
                font-size 13px
                margin-top 5px
                text-align center
              .address
                color #999
                font-size 10px
</style>
