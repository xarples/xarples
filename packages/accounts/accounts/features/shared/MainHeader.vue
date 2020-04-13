<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainHeader',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
})
</script>

<template>
  <w-navbar-menu>
    <w-container>
      <w-navbar-menu-container>
        <w-navbar-menu-list>
          <w-navbar-menu-item-logo>
            <img
              src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            />
          </w-navbar-menu-item-logo>
        </w-navbar-menu-list>
      </w-navbar-menu-container>
    </w-container>
  </w-navbar-menu>
</template>
