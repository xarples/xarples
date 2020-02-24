<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    const user = this.$store.state.user

    const fields = [
      { type: 'text', name: 'First name', value: user.firstName },
      { type: 'text', name: 'Last name', value: user.lastName },
      { type: 'text', name: 'Username', value: user.username },
      {
        type: 'password',
        name: 'Password',
        value: user.password
          .split('')
          .map(() => '*')
          .join('')
      },
      { type: 'text', name: 'Email', value: user.email }
    ]

    return {
      fields
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
})
</script>

<template>
  <section class="container">
    <div class="columns is-vcentered">
      <div class="column">
        <p class="title">Personal Information</p>
        <p class="subtitle">
          Basic information, like your name and photo, that you use on Xarples
          services
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column">
                  <p class="title is-4">Profile</p>
                  <p class="subtitle is-6">
                    Some info may be visible to other people using Xarples
                    services. Learn more
                  </p>
                </div>
              </div>
              <table class="table">
                <tbody>
                  <tr v-for="field in fields" :key="field.name">
                    <td>{{ field.name }}</td>
                    <td>{{ field.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item">
              <nuxt-link to="/personal-info/profile">
                Manage profile
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
