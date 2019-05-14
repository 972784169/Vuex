import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {
  resturantName: '飞歌餐馆' // 默认值
  // id: xxx  如果还有全局状态也可以在这里添加
  // name:xxx
}


const getters = {
  resturantName :function (state) {
   return state.resturantName
  }

}

const mutations = {
  modifyAName :function (state,name) {
     state.resturantName = name
  },
  modifyBName :function (state,name) {
    state.resturantName = name
  }
}


const actions = {
  modifyName:function (context,name) {
   return context.commit('modifyAName',name)
  },
  modifyName:function (context,name) {
    return context.commit('modifyBName',name)
  }
}


// 注册上面引入的各大模块
const store = new Vuex.Store({
  state,    // 共同维护的一个状态，state里面可以是很多个全局状态
  getters,  // 获取数据并渲染
  actions,  // 数据的异步操作
  mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})


export  default store
