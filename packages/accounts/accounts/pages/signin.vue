<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  layout: 'auth',
  asyncData() {
    return {
      username: '',
      password: ''
    }
  }
})
</script>

<template>
  <w-section color="gray1">
    <w-grid-container no-gutters>
      <w-grid-row
        no-gutters
        horizontal-align="center"
        :style="{ height: '100%' }"
      >
        <w-grid-column :cols="4">
          <w-image
            :style="{ width: '100px', display: 'block', margin: 'auto' }"
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt
          />
          <w-spacer size="2x" />
          <w-card>
            <w-card-body>
              <w-text variant="h4" align="center">
                Sign in
              </w-text>
              <w-spacer />
              <form action="/api/auth/signin" method="post">
                <w-input
                  v-model="username"
                  name="username"
                  placeholder="Username"
                ></w-input>
                <w-spacer />
                <w-input
                  v-model="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                ></w-input>
                <w-spacer />
                <w-spacer />
                <w-text>Forgot your password?</w-text>
                <w-spacer />
                <w-button type="submit" block>
                  Sign in
                </w-button>
                <w-spacer />

                <w-button block color="white">
                  Sign up
                </w-button>
              </form>
            </w-card-body>
          </w-card>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
