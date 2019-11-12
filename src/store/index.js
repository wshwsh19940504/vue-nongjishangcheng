import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // istabbar:true,
    userInfo:{
      userName:'您还未登录',
      toactive:0,
    }
  },
  mutations: {
    
    changeLogin(state,userInfo){
        state.userInfo = userInfo
    },
   
    // changeIstabbar(state,params){
    //   if(params){
    //     state.istabbar=false
    //   }else{
    //     state.istabbar=true
    //   }
   
    // }
  },
  actions: {
    loginAction({commit},userInfo){
        commit('changeLogin',userInfo)
    }
  },
  modules: {

  },
  getters:{

  }
})
