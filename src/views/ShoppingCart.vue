<template>
 <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapState } from 'vuex'
import { IProduct } from '../store/state'

@Options({
  computed: {
    // mix this into the outer object with the object spread operator
    ...mapState({
      // 等同于 `checkoutStatue: state => state.checkoutStatue`
      checkoutStatus: 'checkoutStatus'
    }),
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products: IProduct) {
      this.$store.dispatch('checkout', products)
    }
  }
})
export default class ShoppingCart extends Vue {}
</script>
