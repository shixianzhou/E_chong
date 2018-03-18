import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Shop from '../pages/shop/shop.vue'
import Type from '../pages/type/type.vue'
import User from '../pages/user/user.vue'
import AllBrand from  '../pages/allbrand/allbrand.vue'
import TypeLeft from '../pages/type/type_left/type_left.vue'
import TypeRight from '../pages/type/type_right/type_right.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component: Home
    },
    {
      path:'/type',
      component: Type,
      children:[
        {
          path:'',
          component:TypeLeft
        },
        {
          path:'left',
          component:TypeLeft
        },
        {
          path:'right',
          component:TypeRight
        },
      ]
    },
    {
      path:'/shop',
      component: Shop
    },
    {
      path:'/user',
      component: User
    },
    {
      path:'/all',
      component: AllBrand
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
