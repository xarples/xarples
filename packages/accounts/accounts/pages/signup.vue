<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Login',
  layout: 'auth',
  data() {
    const fields = {
      firstName: { type: 'text', name: 'First name', value: '' },
      lastName: { type: 'text', name: 'Last name', value: '' },
      email: { type: 'text', name: 'Email', value: '' },
      username: { type: 'text', name: 'Username', value: '' },
      password: { type: 'password', name: 'Password', value: '' }
    }

    return {
      fields
    }
  },
  methods: {
    async createUser() {
      const data = Object.keys(this.fields).reduce((acc, current) => {
        // @ts-ignore
        acc[current] = this.fields[current].value

        return acc
      }, {})

      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      this.$router.push('/signin')
    }
  }
})
</script>

<template>
  <section class="section has-background has-full-height">
    <div class="container has-full-height">
      <div class="columns is-centered is-vcentered has-full-height">
        <div class="column is-3">
          <b-field
            v-for="field of fields"
            :key="field.name"
            :label="field.name"
          >
            <b-input :type="field.type" v-model="field.value"></b-input>
          </b-field>
          <b-button @click="createUser" type="is-primary">Done</b-button>
        </div>
      </div>
    </div>
  </section>
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
