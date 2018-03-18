import Mock from 'mockjs'
import data from './data.json'
import cate from './categorys.json'
import brand from './brand.json'

Mock.mock('/home',{code:0,data})

Mock.mock('/type/left',{code:0,data:cate.category})

Mock.mock('/type/right',{code:0,data:cate.brand})

Mock.mock('/brand',{code:0,data:brand.brand})

