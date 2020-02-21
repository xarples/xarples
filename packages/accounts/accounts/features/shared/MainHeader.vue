<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainHeader'
})
</script>

<template>
  <b-navbar wrapper-class="container" shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <figure class="image is-24x24">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/24x24.png"
          />
        </figure>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
