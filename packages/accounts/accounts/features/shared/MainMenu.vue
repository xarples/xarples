<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainMenu'
})
</script>

<template>
  <b-menu>
    <b-menu-list>
      <b-menu-item
        class="b-menu-item "
        tag="nuxt-link"
        icon="information-outline"
        label="Home"
        to="/"
      >
      </b-menu-item>
      <b-menu-item
        tag="nuxt-link"
        class="b-menu-item "
        icon="information-outline"
        label="Personal info"
        to="/personal-info"
      ></b-menu-item>
      <b-menu-item
        tag="nuxt-link"
        class="b-menu-item "
        icon="settings"
        label="Security"
        to="/security"
      >
      </b-menu-item>
      <b-menu-item
        tag="nuxt-link"
        class="b-menu-item "
        icon="information"
        label="Payment and subscriptions"
        :to="{ path: '/payment-subscriptions' }"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<style lang="scss" scoped>
.b-menu-item {
  font-weight: bold;
}
</style>
