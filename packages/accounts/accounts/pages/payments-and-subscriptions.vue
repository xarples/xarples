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
  <section class="container">
    <div class="columns">
      <div class="column">
        <p class="title">
          Payments & subscriptions
        </p>
        <p class="subtitle">
          Your payment information, transactions, recurring payments, and
          reservations
        </p>
      </div>
    </div>
  </section>
</template>
