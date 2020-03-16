<template>
  <w-section color="gray1">
    <w-grid-container>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h2" align="center">
            <strong>Explore our products</strong>
          </w-text>
          <w-text variant="h5" align="center">
            All our products are available in the console, activate those you
            need and optimize your workflow.
          </w-text>
        </w-grid-column>
      </w-grid-row>
      <w-spacer size="3x" />
      <product-list />
    </w-grid-container>
  </w-section>
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
