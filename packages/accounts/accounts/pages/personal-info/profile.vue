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
  <section class="container">
    <div class="columns">
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
                <div class="column is-10">
                  <p class="title is-4">Profile</p>
                  <p class="subtitle is-6">
                    Some info may be visible to other people using Xarples
                    services. Learn more
                  </p>
                </div>
              </div>
              <form action>
                <b-field
                  v-for="field of fields"
                  :key="field.name"
                  :label="field.name"
                >
                  <b-input :type="field.type" v-model="field.value"></b-input>
                </b-field>
                <div class="column is-2">
                  <b-button @click="updateUser" type="is-primary"
                    >Done</b-button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
