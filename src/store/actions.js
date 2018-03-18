import {reqhome,reqleft,reqright,reqbrand} from '../ajax'
import {RECEIVE_HOME,RECEIVE_LEFT,RECEIVE_RIGHT,RECEIVE_BRAND} from './mutations-types'
export default {
 async getHomepage({commit}){
    const result = await reqhome()
    if(result.code === 0){
      commit(RECEIVE_HOME,{result:result.data})
    }
  },
 async getTypeLeft({commit}){
   const result = await reqleft()
   if(result.code === 0){
     commit(RECEIVE_LEFT,{result:result.data})
   }
 },
 async getTypeRight({commit}){
   const result = await reqright()
   if(result.code === 0){
     commit(RECEIVE_RIGHT,{result:result.data})
   }
 },
 async getAllBrand({commit}){
   const result = await reqbrand()
   if(result.code === 0){
     commit(RECEIVE_BRAND,{result:result.data})
   }
 }
}
