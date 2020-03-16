<template>
  <w-grid-row>
    <w-grid-column>
      <w-grid-row>
        <w-grid-column>
          <product />
        </w-grid-column>
      </w-grid-row>
      <w-spacer size="5x" />
      <w-grid-row>
        <w-grid-column>
          <product :inverted="true" />
        </w-grid-column>
      </w-grid-row>
    </w-grid-column>
  </w-grid-row>
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
