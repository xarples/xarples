<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
})
</script>

<template>
  <w-section>
    <w-grid-container fluid>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h1">Security</w-text>
          <w-text variant="h5">Settings and recommendations to help you keep your account secure</w-text>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
