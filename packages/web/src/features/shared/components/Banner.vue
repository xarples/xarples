<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Banner'
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <img
          style="width: 100px; margin-bottom: 1em"
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <h1 class="title is-3">
          Become a Xarples client
        </h1>
        <b-button type="is-primary" size="is-medium">
          Get started
        </b-button>
      </div>
    </div>
  </section>
</template>
