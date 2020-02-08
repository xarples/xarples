<script lang="ts">
import { createComponent, watch } from '@vue/composition-api'
import useLogin from '../features/login/use/login'

export default createComponent({
  setup() {
    const { state, handleLogin } = useLogin()

    watch(() => {
      console.log(state.username)
    })

    return {
      state,
      handleLogin
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
            <img src="/static/logo.png" alt="" srcset="" />
            <form action>
              <b-field label="Username">
                <b-input
                  v-model="state.username"
                  name="username"
                  size="is-medium"
                  maxlength="30"
                ></b-input>
              </b-field>
              <b-field label="Password">
                <b-input
                  v-model="state.password"
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
                class="has-margin"
                @click="handleLogin"
              >
                <span class="has-text-bold">
                  Sign in
                </span>
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
