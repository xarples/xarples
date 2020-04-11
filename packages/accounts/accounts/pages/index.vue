<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
})
</script>

<template>
  <w-section>
    <w-grid-container>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h1">Welcome, {{ user.firstName }} {{ user.lastName }}</w-text>
          <w-text variant="h5">
            Manage your info, privacy, and security to make Xarples work better
            for you
          </w-text>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>
