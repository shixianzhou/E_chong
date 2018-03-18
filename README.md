# 项目实战

>  Vue.js project

## 第一天
1.使用Vue脚手架创建项目 `npm install -g vue-cli,vue init webpack gshop`  

2.建立基本路由 `npm install vue-router --save`    

3.简单实现静态页面 
``` bash
# 使用
使用：Swiper插件 iconfont字体图标
Swiper插件功能：
     Autoplay 自动轮播
       -delay 时间
     
    var swiper = new Swiper('.swiper-container', {
      loop: true //循环
      slidesPerView: 3, //一页显示数量
      spaceBetween: 30, //两边间隙
      pagination: {
        el: '.swiper-pagination',
      },
    });
iconfont字体图标：
     字体库，用来显示图标文字
```

## 第二天

1.建立二级路由 分类/品牌  

2.分类/品牌/个人中心 实现静态页面 实现简单动态效果
``` bash
# 使用
使用：better-scroll滚动插件库 iconfont字体图标
问题：
-常规问题

1.设置元素百分比之后设置padding与margin后会导致图片溢出
2.结构分析有误，优化部分结构，优化部分css代码

-特殊问题

1.better-scroll滚动插件库
    -使用过程中必须注意原理
        -父元素必须设置高度
        -子元素需要溢出
    
解决办法：

-常规问题

    -学委
    
-特殊问题
    -better-scroll 官方文档中的一片文章
    
    当 better-scroll 遇见 Vue [链接](https://zhuanlan.zhihu.com/p/27407024)

iconfont字体图标：

     字体库，用来显示图标文字
```


## better-scroll滚动插件库 原理
官方网站：https://ustbhuangyi.github.io/better-scroll/#/
![image](https://pic7.zhimg.com/80/v2-71a1e5fbbb39fa4a99f96ecc333a1927_hd.jpg)

## 第三天

1.制作首页动态数据

2.实现首页动态获取
``` bash
# 使用
使用：Mock模拟 json 数据 
      官网：http://mockjs.com/
      
      Vuex 插件库 管理Vue状态
      官网：https://vuex.vuejs.org/
问题：
-常规问题

    动态获取数据对结构产生影响
    数据返回异步导致页面异常


解决办法：
    -问学委
    -百度
    -官网
待解决
    首次加载页面异常（不显示）
```
## 第五天
>上次遗留问题（首次加载页面异常）已解决  
  原因：默认路径中因大意多写入了一个空格
  
1.制作品牌/分类/全部品牌 动态数据

2.实现品牌/分类/全部品牌 动态获取
``` bash
# 使用
使用：Mock模拟 json 数据 
      官网：http://mockjs.com/
      
      Vuex 插件库 管理Vue状态
      官网：https://vuex.vuejs.org/
问题：
-常规问题

    动态获取数据对结构产生影响
    数据返回异步导致页面异常

解决办法：
    -问学委
    -用父级发布请求
    -百度
待解决
    -无 
```
