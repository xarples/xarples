<template></template>

<template>
  <w-grid-row>
    <w-grid-column>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h3">
            <strong>
              Zero config
            </strong>
          </w-text>
          <w-text variant="lead">
            All our products are available in the console, activate those you
            need and optimize your workflow.
          </w-text>
          <w-button variant="outlined">Learn more</w-button>
        </w-grid-column>
      </w-grid-row>
    </w-grid-column>
    <w-grid-column>
      <img src="https://via.placeholder.com/400" alt />
    </w-grid-column>
  </w-grid-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Product',
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
