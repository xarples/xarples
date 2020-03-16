<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Banner'
})
</script>

<template>
  <w-section color="gray1">
    <w-grid-container>
      <w-grid-row horizontal-align="center">
        <w-grid-column auto>
          <img
            style="width: 100px; margin-bottom: 1em"
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </w-grid-column>
      </w-grid-row>
      <w-grid-row horizontal-align="center">
        <w-grid-column auto>
          <w-text variant="h4" align="center">Become a Xarples client</w-text>
        </w-grid-column>
      </w-grid-row>
      <w-grid-row horizontal-align="center">
        <w-grid-column auto>
          <w-button>Get started</w-button>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
