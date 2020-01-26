<template>
  <section class="hero is-medium">
    <div class="container">
      <div class="hero-body">
        <div class="columns is-mobile is-multiline is-centered is-valign">
          <div class="column">
            <h1 class="title is-1 has-text-weight-bold">
              A new way to use Software
            </h1>
            <h2 class="subtitle is-4">
              xarples is the builder of the future of enterprise apps. Become a
              xarples client and access the power that will transform your
              business.
            </h2>
            <b-button type="is-primary" size="is-medium">
              Get started
            </b-button>
          </div>
          <div class="column is-7">
            <img src="/hero.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hero'
})
</script>
