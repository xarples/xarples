<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">
        Explore our products
      </h1>
      <h2 class="subtitle is-h4 has-text-centered">
        All our products are available in the console, activate those you need
        and optimize your workflow.
      </h2>
      <product-list />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductList from '@/features/products/components/ProductList.vue'

export default Vue.extend({
  name: 'ProductSection',
  components: {
    ProductList
  }
})
</script>
