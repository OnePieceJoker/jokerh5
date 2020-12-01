import { Counter } from '../state';
import { INCREMENT, DECREMENT } from '../mutaction-types';

const state: Counter = {
  count: 0,
  history: []
}

const mutations = {
  // mutations下的函数必须是同步的
  // 改变state的状态的方式是调用mutations,然后提交它：store.commit(increment)
  [INCREMENT] (state: any) {
    // 状态变更
    state.count++;
    state.history.push('increment');
  },

  [DECREMENT] (state: any) {
    state.count--;
    state.history.push('decrement');
  }
}

const actions = {
  // actions可以执行任意的异步操作
  // actions提交的是mutations，而不是直接变更状态
  // actions通过store.dispatch方法触发
  // 使用es2015的参数解构
  increment ({ commit }: any) {
    // context对象与store实例具有相同方法和属性
    commit(INCREMENT);
  },

  decrement ({ commit }: any) {
    commit(DECREMENT);
  },

  incrementIfOdd ({ commit }: any) {
    if ((state.count + 1) % 2 === 0) {
      commit(INCREMENT);
    }
  },

  // 在actions中执行异步操作
  incrementAsync ({ commit }: any) {
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000);
  }
}

const getters = {
  recentHistory: (state: any) => {
    return state.history.slice(-5).join(', ');
  },
  count: (state: any) => {
    return state.count;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
