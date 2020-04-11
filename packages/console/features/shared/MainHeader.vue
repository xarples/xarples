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
    <w-navbar-menu-list>
      <w-navbar-menu-item-logo>
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
        />
      </w-navbar-menu-item-logo>
    </w-navbar-menu-list>
    <w-navbar-menu-list>
      <w-navbar-menu-item active>Alerts</w-navbar-menu-item>
      <w-navbar-menu-item>Badge</w-navbar-menu-item>
      <w-navbar-menu-item>Buttons</w-navbar-menu-item>
      <w-navbar-menu-item>Card</w-navbar-menu-item>
    </w-navbar-menu-list>
  </w-navbar-menu>
</template>
