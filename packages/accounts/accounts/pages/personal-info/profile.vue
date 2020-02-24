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
      { type: 'password', name: 'Password', value: 'secret' },
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
                  <b-button type="is-primary">Done</b-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
