import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    checked: false,
    goods: [
      {
        name: '小米手机',
        price: 999,
        count: 1,
        state: false,
        itemTotal: 999
      },
      {
        name: '华为手机',
        price: 199,
        count: 1,
        state: false,
        itemTotal:199
      },
      {
        name: '苹果手机',
        price: 99,
        count: 1,
        state: false,
        itemTotal: 99
      },
      {
        name: '魅族手机',
        price: 9,
        count: 1,
        state: false,
        itemTotal: 9
      }
    ]
  },
  mutations: {
    selectAll(state){
      state.checked = !state.checked
      state.goods.forEach(item=>{
        item.state = state.checked
      })
    },
    add(state,payload){
      state.goods[payload].count += 1
    },
    less(state,payload){
      if(state.goods[payload].count > 1){
        state.goods[payload].count -= 1 
      }
    },
    del(state,payload){
      state.goods.splice(payload,1)
    },
    choose(state,payload){
      state.goods[payload].state = !state.goods[payload].state
    },
    calculate(state){
      state.total = 0
      state.goods.forEach(item=>{
        if(item.state){
          state.total += item.itemTotal
        }
      })
    },
    returned(state,payload){
      state.goods[payload].itemTotal = state.goods[payload].count * state.goods[payload].price
    },
    unselected(state,payload){
      state.total -= state.goods[payload].itemTotal
    },
    checkSelectAll(state){
      let boolean = state.goods.every(item=>{
        return item.state
      })
      if(boolean && state.goods.length){
        state.checked = true
      }else{
        state.checked = false
      }
    }
  },
  actions: {
    totalCalculate(context,payload){
      context.commit('choose',payload)
      context.commit('checkSelectAll')
      // context.commit('returned',payload)
      if(context.state.goods[payload].state){
        context.commit('calculate')
      }else{
        context.commit('unselected',payload)
      }
    },
    add(context,payload){
      context.commit('add',payload)
      context.commit('returned',payload)
      if(context.state.goods[payload].state){
        context.commit('calculate')
      }
    },
    less(context,payload){
      context.commit('less',payload)
      context.commit('returned',payload)
      if(context.state.goods[payload].state){
        context.commit('calculate')
      }
    },
    selectAll(context){
      context.commit('selectAll')
      context.commit('calculate')
    },
    del(context,payload){
      if(context.state.goods[payload].state){
        context.commit('unselected',payload)
      }
      context.commit('del',payload)
      context.commit('checkSelectAll')
    }
  },
  modules: {
  }
})
