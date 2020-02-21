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
  <section class="section">
    <div class="columns">
      <div class="column">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
        <p class="title">Welcome, {{ user.firstName }} {{ user.lastName }}</p>
        <p class="subtitle">
          Manage your info, privacy, and security to make Google work better for
          you
        </p>
      </div>
    </div>
    <div class="columns" v-for="(i, index) in [1, 2]" :key="index">
      <div class="column" v-for="(i, index) in [1, 2]" :key="index">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-2">
                  <b-icon
                    icon="view-dashboard"
                    size="is-large"
                    type="is-primary"
                  >
                  </b-icon>
                </div>
                <div class="column is-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Get started</a>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>
