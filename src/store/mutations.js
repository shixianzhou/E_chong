import {RECEIVE_HOME,RECEIVE_LEFT,RECEIVE_RIGHT,RECEIVE_BRAND} from './mutations-types'

export default {
  [RECEIVE_HOME](state,{result}){
    state.homepage = result
  },
  [RECEIVE_LEFT](state,{result}){
    state.left = result
  },
  [RECEIVE_RIGHT](state,{result}){
    state.right = result
  },
  [RECEIVE_BRAND](state,{result}){
    state.brand = result
  }
}
