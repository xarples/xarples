<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  asyncData() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleClick() {
      debugger
    }
  }
})
</script>

<template>
  <main class="main is-flex">
    <b-navbar shadow wrapper-class="container" is-active>
      <template>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item>Sign up</b-navbar-item>
        </template>
      </template>
    </b-navbar>

    <section class="section has-background has-flex-1">
      <div class="container has-full-height">
        <div class="columns is-vcentered has-full-height">
          <div class="column"></div>
          <div class="column">
            <form action>
              <b-field label="Username">
                <b-input
                  v-model="username"
                  name="username"
                  size="is-medium"
                  maxlength="30"
                ></b-input>
              </b-field>
              <b-field label="Password">
                <b-input
                  v-model="password"
                  name="password"
                  size="is-medium"
                  type="password"
                  password-reveal
                ></b-input>
              </b-field>
              <b-button
                type="is-primary"
                size="is-medium"
                expanded
                rounded
                @click="handleClick"
                >Sign in</b-button
              >
            </form>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  flex-direction: column;
}

.has-background {
  background-color: #fbfbfd;
}

.has-flex-1 {
  flex: 1;
}

.has-full-height {
  height: 100%;
}
</style>
