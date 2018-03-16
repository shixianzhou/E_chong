import {reqhome} from '../ajax'
import {RECEIVE_HOME} from './mutations-types'
export default {
 async getHomepage({commit}){
    const result = await reqhome()
    if(result.code === 0){
      commit(RECEIVE_HOME,{result:result.data})
    }
  }
}
