<template>
  <product-default v-if="!inverted"></product-default>
  <product-inverted v-else></product-inverted>
</template>

<script lang="ts">
import Vue from 'vue'

import ProductDefault from './ProductDefault.vue'
import ProductInverted from './ProductInverted.vue'

export default Vue.extend({
  name: 'Product',
  components: {
    ProductDefault,
    ProductInverted
  },
  props: {
    inverted: {
      type: Boolean as () => boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style scoped>
.is-inverted {
  flex-direction: row-reverse;
}
</style>
