<template>
  <div>
    <product />
    <product :inverted="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Product from '@/features/products/components/Product.vue'

export default Vue.extend({
  name: 'ProductList',
  components: {
    Product
  }
})
</script>
