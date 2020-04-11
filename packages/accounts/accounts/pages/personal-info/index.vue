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
          .slice(0, 6)
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
  <w-section>
    <w-grid-container fluid>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h1">Personal information</w-text>
          <w-text variant="h5">
            Basic information, like your name and photo, that you use on Xarples
            services
          </w-text>
        </w-grid-column>
      </w-grid-row>
      <w-spacer />
      <w-grid-row>
        <w-grid-column>
          <w-card :shadow="false">
            <w-card-body>
              <w-text variant="h4">Profile</w-text>
              <w-text variant="h6">
                Some info may be visible to other people using Xarples services.
                Learn more
              </w-text>
              <w-spacer></w-spacer>
              <w-table>
                <w-table-body>
                  <w-table-row v-for="field in fields" :key="field.name">
                    <w-table-body-cell>{{ field.name }}</w-table-body-cell>
                    <w-table-body-cell>{{ field.value }}</w-table-body-cell>
                  </w-table-row>
                </w-table-body>
              </w-table>
            </w-card-body>
            <w-card-footer>
              <nuxt-link to="/personal-info/profile">
                <w-button variant="text">Manage profile</w-button>
              </nuxt-link>
            </w-card-footer>
          </w-card>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
