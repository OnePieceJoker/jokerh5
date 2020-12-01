import Vuex from 'vuex';
import counter from './models/Counter';
import product from './models/Product';
import cart from './models/Cart';

export default new Vuex.Store({
  modules: {
    counter,
    product,
    cart
  }
})
