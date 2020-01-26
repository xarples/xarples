<script lang="ts">
import Vue from 'vue'

import FeaturedProduct from '@/features/featured/components/FeaturedProduct.vue'

export default Vue.extend({
  name: 'FeaturedSection',
  components: {
    FeaturedProduct
  }
})
</script>

<template>
  <featured-product />
</template>
