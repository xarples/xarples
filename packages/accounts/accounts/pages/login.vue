<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  asyncData() {
    return {
      username: '',
      password: ''
    }
  }
})
</script>

<template>
  <main class="main is-flex">
    <section class="section has-background has-flex-1">
      <div class="container has-full-height">
        <div class="columns is-vcentered has-full-height">
          <div class="column"></div>
          <div class="column">
            <img src="/static/logo.png" alt srcset />
            <form action="/api/auth/login" method="post">
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
                native-type="submit"
                type="is-primary"
                size="is-medium"
                expanded
                class="has-margin"
              >
                <span class="has-text-bold">Sign in</span>
              </b-button>
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

.has-margin {
  margin-top: 1.5em;
}
</style>
