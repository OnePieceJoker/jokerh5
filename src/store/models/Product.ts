import { IProduct, Products } from '../state';
import { SET_PRODUCTS, DECREMENT_PRODUCT_INVENTORY } from '../mutaction-types';
import shop from '@/api/shop';

const state: Products = {
  all: []
}

const getters = {
  products: (state: any) => {
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
