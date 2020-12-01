<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

@Options({
  computed: mapGetters({
    products: 'products'
  }),
  methods: mapActions([
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
})

export default class ProductList extends Vue {}
</script>
