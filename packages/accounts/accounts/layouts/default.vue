<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/features/shared/MainHeader.vue'
import MainMenu from '~/features/shared/MainMenu.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainMenu
  }
})
</script>

<template>
  <w-container class="main" fluid color="gray1">
    <main-header />
    <w-divider />
    <w-container>
      <w-grid-row vertical-align="top">
        <w-grid-column :cols="3">
          <main-menu />
        </w-grid-column>
        <w-grid-column :cols="9">
          <nuxt />
        </w-grid-column>
      </w-grid-row>
    </w-container>
  </w-container>
</template>

<style scoped>
.main {
  min-height: 100vh;
}
</style>
