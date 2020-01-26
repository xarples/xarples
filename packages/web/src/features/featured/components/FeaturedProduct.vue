<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FeaturedProduct'
})
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="is-half is-1 is-narrow has-text-centered">
          <b-tag type="is-primary" size="is-small" rounded>
            NEW
          </b-tag>
        </div>
        <h1 class="title is-2 has-text-centered">
          <span>Food</span>
          <span class="has-text-weight-light">- A new era for the restaurants</span>
        </h1>
        <h2 class="subtitle is-size-4 has-text-centered">
          Food is the best restaurant platform that allows manage your entire
          process from order until payment. Build the future of restaurants your
          clients will be happier.
        </h2>
      </div>
    </section>
    <img src="/food-app.png" style="width: 100%" />
  </div>
</template>
