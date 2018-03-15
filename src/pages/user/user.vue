<template>
  <div id="user">
    <div class="user_head">
      <div class="title">
        <i class="iconfont icon-return"></i>
        <div>
          <div>注册</div>
        </div>
      </div>
      <div class="space">
      </div>
      <ul class="login">
        <li>
          <span>普通登陆</span>
          <i></i>
        </li>
        <li>
          <span>手机动态密码登陆</span>
        </li>
      </ul>
    </div>
    <div class="user_content">
      <div class="content">
        <div  class="user_login">
          <i class="iconfont icon-mobilephone"></i>
          <input type="text" placeholder="手机号/邮箱/用户名">
        </div>
        <div  class="user_pwd">
          <i class="iconfont icon-lock"></i>
          <input type="password" placeholder="输入密码">
        </div>
        <p>忘记密码？</p>
        <button>登陆</button>
      </div>
      <div class="space"></div>
      <p>合作网站登陆</p>
      <div class="qq">
        <img src="./images/login_ico2.png" alt="">
        <img src="./images/login_ico4.png" alt="">
        <img src="./images/login_ico2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  input,button
    outline none
#user
  width 100%
  .user_head
    color #fff
    background-image: url(./images/login-bg.png);
    background-size 100% 100%
    .title
      display flex
      justify-content space-between
      padding 10px
      font-size 16px
      padding-top  20px
      .iconfont
        font-size 20px
    .space
      height 50px
      padding-top 10px
      padding-bottom 20px

    .login
      width 100%
      display flex
      justify-content space-around
      font-size 15px
      li
        width 50%
        height 44px
        background-color: rgba(255,255,255,.3);
        text-align center
        line-height 44px
        position relative
        i
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
  .user_content
    width 100%
    background-color: #fff;
    .content
      width 100%
      padding 0 10px
      box-sizing border-box
      .iconfont
        font-size 25px
        margin-left -20px
        vertical-align middle
      .user_login,.user_pwd
        padding 15px 0 15px 30px
        width 90%
        border-bottom 1px solid #e2e2e2
        font-size 15px
        color #666
      p
        text-align right
        color #898989
        padding 10px 0
      button
        display block
        width 100%
        letter-spacing: 5px;
        font-size 15px
        border-radius 5px
        padding 9px 0
        border 0
        background-color: #2ec975;
        color #fff
    .space
      width 100%
      height 100px
    p
      width 100%
      text-align center
      color #d7d7d7
    .qq
      width 100%
      display flex
      justify-content space-around
      padding 15px 0
      img
        width 60px
        height 60px
</style>
