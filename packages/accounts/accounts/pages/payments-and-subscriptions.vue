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
          <w-text variant="h1">Payments & subscriptions</w-text>
          <w-text variant="h5">
            Your payment information, transactions, recurring payments, and
            reservations
          </w-text>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
