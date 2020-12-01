import { Cart, IProduct } from '../state';
import { PUSH_PRODUCT_TO_CART, INCREMENT_ITEM_QUANTITY, SET_CART_ITEMS, SET_CHECKOUT_STATUS, DECREMENT_PRODUCT_INVENTORY } from '../mutaction-types';
import shop from '@/api/shop';

const state: Cart = {
  items: [],
  checkoutStatus: null
}

const getters = {
  cartProducts: (state: any, getters: any, rootState: any) => {
    return state.items.map(({ id, quantity }: any) => {
      const product = rootState.product.all.find((product: IProduct) => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state: any, getters: any) => {
    return getters.cartProducts.reduce((total: any, product: IProduct) => {
      return total + product.price * product.quantity!
    }, 0)
  }
}

const mutations = {
  [PUSH_PRODUCT_TO_CART] (state: any, { id }: any) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  [INCREMENT_ITEM_QUANTITY] (state: any, { id }: any) {
    const cartItem = state.items.find((item: IProduct) => item.id === id)
    cartItem.quantity++
  },

  [SET_CART_ITEMS] (state: any, { items }: any) {
    state.items = items
  },

  [SET_CHECKOUT_STATUS] (state: any, status: any) {
    state.checkoutStatus = status
  }
}

const actions = {
  checkout ({ commit, state }: any, products: IProduct[]) {
    const savedCartItems = [...state.items]
    commit(SET_CHECKOUT_STATUS, null)
    commit(SET_CART_ITEMS, { items: [] })
    shop.butProducts(
      products,
      () => commit(SET_CHECKOUT_STATUS, 'successful'),
      () => {
        commit(SET_CHECKOUT_STATUS, 'failed')
        commit(SET_CART_ITEMS, { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }: any, product: IProduct) {
    commit(SET_CHECKOUT_STATUS, null)
    if (product.inventory > 0) {
      const cartItem = state.items.find((item: IProduct) => item.id === product.id)
      if (!cartItem) {
        commit(PUSH_PRODUCT_TO_CART, { id: product.id })
      } else {
        commit(INCREMENT_ITEM_QUANTITY, cartItem)
      }
      commit(DECREMENT_PRODUCT_INVENTORY, { id: product.id }, { root: true })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
