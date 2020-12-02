import { IProduct, Products } from '../state';
import { SET_PRODUCTS, DECREMENT_PRODUCT_INVENTORY } from '../mutaction-types';
import shop from '@/api/shop';

const state: Products = {
  all: []
}

const getters = {
  // 作为Property-Style Access的getters会作为Vue's reactivity system的一部分进行缓存
  // 如果是通过Method-Style Access的getters，只有当调用时才会执行，且结果不会进行缓存
  // e.g. products: (state: any) => { return state.all }
  products (state: any) {
    return state.all
  }
}

const actions = {
  getAllProducts ({ commit }: any) {
    shop.getProducts(products => {
      commit(SET_PRODUCTS, products)
    })
  }
}

const mutations = {
  [SET_PRODUCTS] (state: any, products: IProduct[]) {
    state.all = products
  },

  [DECREMENT_PRODUCT_INVENTORY] (state: any, { id }: IProduct) {
    const product = state.all.find((product: IProduct) => product.id === id)
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
