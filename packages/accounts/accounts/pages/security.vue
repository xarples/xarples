<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Home',
  asyncData(ctx) {
    // @ts-ignore
    const currentUser = ctx.req.user

    return {
      currentUser
    }
  }
})
</script>

<template>
  <section class="main">
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
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <b-menu>
              <b-menu-list>
                <b-menu-item
                  icon="information-outline"
                  label="Home"
                ></b-menu-item>
                <b-menu-item
                  icon="information-outline"
                  label="Personal info"
                ></b-menu-item>
                <b-menu-item icon="settings" label="Security"></b-menu-item>
                <b-menu-item
                  icon="information"
                  label="Payment and subscriptions"
                ></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
          <div class="column is-9">
            <div class="columns">
              <div class="column">
                <p class="title">
                  Security
                </p>
                <p class="subtitle">
                  Settings and recommendations to help you keep your account
                  secure
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-5">
                        Ways we can verify it's you
                      </p>
                      <p class="subtitle is-6">
                        These can be used to make sure it's really you signing
                        in or to reach you if there's suspicious activity in
                        your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
