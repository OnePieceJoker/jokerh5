import { createStore } from 'vuex';
import counter from './models/Counter';
import product from './models/Product';
import cart from './models/Cart';

// createStore 等同于 new Vuex.Store
export default createStore({
  modules: {
    counter,
    product,
    cart
  }
})
