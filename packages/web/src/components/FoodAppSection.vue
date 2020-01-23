<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-half is-1 is-narrow">
        <b-tag type="is-primary" size="is-medium" rounded>
          NEW
        </b-tag>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="is-size-2 has-text-centered">
          <span class="has-text-weight-bold">Food</span>
          <span>
            - A new era for the restaurants
          </span>
        </p>
        <p class="is-size-5 has-text-centered">
          Food is the best restaurant platform that allows manage your entire
          process from order until payment. Build the future of restaurants your
          clients will be happier.
        </p>
      </div>
    </div>
    <div class="column">
      <div class="column">
        <img src="/food-app.png" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FoodAppSection'
})
</script>
