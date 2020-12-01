<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script lang="ts">
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    ProductList, ShoppingCart
  }
})
export default class About extends Vue {}
</script>
