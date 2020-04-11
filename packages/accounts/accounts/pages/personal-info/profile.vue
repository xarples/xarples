<script lang="ts">
import Vue from 'vue'

interface IField {
  type: string
  name: string
  value: string
}

interface IFields {
  firstName: IField
  lastName: IField
  username: IField
  password: IField
  email: IField
}

export default Vue.extend({
  name: 'Home',
  data() {
    const user = this.$store.state.user

    const fields = {
      firstName: { type: 'text', name: 'First name', value: user.firstName },
      lastName: { type: 'text', name: 'Last name', value: user.lastName },
      username: { type: 'text', name: 'Username', value: user.username },
      password: { type: 'password', name: 'Password', value: 'secret' },
      email: { type: 'text', name: 'Email', value: user.email }
    }

    return {
      isPasswordChanged: false,
      fields
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  watch: {
    'fields.password.value': function password(
      newPassword: IFields,
      oldPassword: IFields
    ) {
      if (newPassword !== oldPassword) {
        this.isPasswordChanged = true
      }
    }
  },
  methods: {
    updateUser() {
      const data = Object.keys(this.fields).reduce((acc, current) => {
        // @ts-ignore
        acc[current] = this.fields[current].value

        return acc
      }, {})

      if (!this.isPasswordChanged) {
        // @ts-ignore
        delete data.password
      }

      // @ts-ignore
      data.id = this.user.id

      fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
})
</script>

<template>
  <w-section>
    <w-grid-container fluid>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h1">Personal Information</w-text>
          <w-text variant="h5">
            Basic information, like your name and photo, that you use on Xarples
            services
          </w-text>
        </w-grid-column>
      </w-grid-row>
      <w-spacer></w-spacer>
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

              <form action>
                <template v-for="field of fields">
                  <w-input
                    :key="field.name"
                    :type="field.type"
                    v-model="field.value"
                  ></w-input>
                  <w-spacer :key="field.name" />
                </template>

                <div class="column is-2">
                  <w-button @click="updateUser">Done</w-button>
                </div>
              </form>
            </w-card-body>
          </w-card>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
