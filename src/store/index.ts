import { createStore } from 'vuex';
import state from './state';

export default createStore({
  state: state,
  mutations: {
    // mutations下的函数必须是同步的
    // 改变state的状态的方式是调用mutations,然后提交它：store.commit(increment)
    increment (state) {
      // 状态变更
      state.counter.count++;
      state.counter.history.push('increment');
    },

    decrement (state) {
      state.counter.count--;
      state.counter.history.push('decrement');
    }
  },
  actions: {
    // actions可以执行任意的异步操作
    // actions提交的是mutations，而不是直接变更状态
    // actions通过store.dispatch方法触发
    // 使用es2015的参数解构
    increment ({ commit }) {
      // context对象与store实例具有相同方法和属性
      commit('increment');
    },

    decrement ({ commit }) {
      commit('decrement');
    },

    incrementIfOdd ({ commit }) {
      if ((state.counter.count + 1) % 2 === 0) {
        commit('increment');
      }
    },

    // 在actions中执行异步操作
    incrementAsync ({ commit }) {
      setTimeout(() =>{
        commit('increment')
      }, 1000);
    }
  },
  getters: {
    recentHistory: state => {
      return state.counter.history.slice(-5).join(', ');
    },
    count: state => {
      return state.counter.count;
    }
  },
  modules: {
  }
})
