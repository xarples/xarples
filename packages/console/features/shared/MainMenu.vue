<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MainMenu',
  data() {
    const pages = [
      { label: 'Home', path: '/', icon: 'information-outline' },
      {
        label: 'Personal information',
        path: '/personal-info',
        icon: 'information-outline'
      },
      { label: 'Security', path: '/security', icon: 'settings' },
      {
        label: 'Payments & subscriptions',
        path: '/payments-and-subscriptions',
        icon: 'information'
      }
    ]

    return {
      pages,
      currentPath: this.$route.path
    }
  }
})
</script>

<template>
  <b-menu>
    <b-menu-list>
      <b-menu-item
        v-for="page of pages"
        :key="page.label"
        :icon="page.icon"
        :label="page.label"
        :to="page.path"
        :active="page.path === currentPath"
        tag="nuxt-link"
        class="b-menu-item"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<style scoped>
.b-menu-item {
  font-weight: bold;
}
</style>
