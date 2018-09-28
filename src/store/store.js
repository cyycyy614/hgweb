import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    'title':'sss',
    'adver':'http://img.gank.io/6e8159aa-c0ce-4879-b266-ae435800966c?imageView2/0/w/200',
    'username':'Kennnnnnnnnnnnnnnnnn',
    'menuindex':'wel',
    'isopenmenu':false,
    'type':'wel',
    'isLeft':false,
    'ismask':false
  },
  mutations:{
    updateTitle(state,title){
      state.title = title
    },
    openMenu(state,title){
      state.isopenmenu = true
      state.ismask = true
      state.isLeft = true
    },
    closeMenu(state,title){
      state.isopenmenu = false
      state.ismask = false
      state.isLeft = false
    },
    updateMenuIndex(state,index){
      state.menuindex = index;
      state.isopenmenu = false;
    },
    updateListType(state,type){
      state.type = type
    }
  },
  actions:{
    toggleMenu({commit,state}){
      if (state.isopenmenu === true) {
        commit('closeMenu')
      } else {
        commit('openMenu')
      }
    },
    updateMenuIndex({commit,state},index){
      commit('updateMenuIndex',index)
      commit('closeMenu')
    }
  }
})

export default store
