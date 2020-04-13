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
  <w-section>
    <w-sidebar-menu>
      <w-sidebar-menu-list title="Account">
        <w-sidebar-menu-item
          v-for="page of pages"
          :key="page.label"
          :icon="page.icon"
          :active="page.path === currentPath"
        >
          <nuxt-link :to="page.path">{{ page.label }}</nuxt-link>
        </w-sidebar-menu-item>
      </w-sidebar-menu-list>
      <w-sidebar-menu-list title="Notifications"> </w-sidebar-menu-list>
    </w-sidebar-menu>
  </w-section>
</template>

<style scoped>
.b-menu-item {
  font-weight: bold;
}
</style>
