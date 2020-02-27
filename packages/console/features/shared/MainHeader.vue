<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainHeader',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
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
      <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
        <a slot="trigger" class="navbar-item">
          <figure class="image is-24x24">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/24x24.png"
            />
          </figure>
          <b-icon icon="menu-down"></b-icon>
        </a>

        <b-dropdown-item
          aria-role="menu-item"
          :focusable="false"
          custom
          paddingless
        >
          <div class="modal-card" style="width:300px;">
            <section class="modal-card-body">
              <p class="title is-6 has-text-centered">
                {{ user.firstName }} {{ user.lastName }}
              </p>
              <p class="subtitle is-6 has-text-centered">
                {{ user.email }}
              </p>
              <b-button expanded rounded>
                Manage your xarples accounts
              </b-button>
            </section>
            <footer class="modal-card-foot">
              <b-button expanded tag="a" href="/api/auth/logout">
                Sign out
              </b-button>
            </footer>
          </div>
        </b-dropdown-item>
      </b-dropdown>
    </template>
  </b-navbar>
</template>
