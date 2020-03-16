<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FeaturedProduct'
})
</script>

<template>
  <w-grid-container no-gutters fluid>
    <w-grid-row no-gutters horizontal-align="center">
      <w-grid-column auto>
        <w-badge rounded>New</w-badge>
      </w-grid-column>
    </w-grid-row>
    <w-grid-row no-gutters horizontal-align="center">
      <w-grid-column>
        <w-text variant="h2" align="center">
          <strong>Food</strong> - A new era for the restaurants
        </w-text>
        <w-text variant="h5" align="center">
          Food is the best restaurant platform that allows manage your entire
          process from order until payment. Build the future of restaurants your
          clients will be happier.
        </w-text>
      </w-grid-column>
    </w-grid-row>
    <w-spacer size="3x" />
    <w-grid-row no-gutters>
      <w-grid-column>
        <img src="/food-app.png" style="width: 100%" />
      </w-grid-column>
    </w-grid-row>
  </w-grid-container>
</template>
