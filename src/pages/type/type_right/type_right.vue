<template>
  <div class="rightcontent">
    <div class="rightcontent_wrap" ref="pinpai">
      <ul>
        <li class="brand-list" v-for="item in right">
            <div class="wrap">
              <p class="title">—— {{item.title}} ——</p>
              <ul class="pinpai">
                <li v-for="(item,index) in item.list">
                  <div>
                    <img :src="item.logo" alt="">
                  </div>
                  <p class="name">{{item.name}}</p>
                  <p class="address">{{item.address}}</p>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
    <div class="all" @click="$router.push('/all')">全部</div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      new BScroll(this.$refs.pinpai, {
        click:true
      })
    },
    computed:{
      ...mapState(['right'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.all
  width 40px
  height 40px
  border-radius 50%
  font-size 13px
  text-align center
  box-sizing border-box
  padding-top  13px
  position absolute
  right  0
  bottom 20%
  color #fff
  background-color: rgba(0,0,0,0.5)
.rightcontent_wrap
  height 100%
.rightcontent
  position relative
  height 100%
  margin-top 45px
  div
    ul
      padding-bottom 60px
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
