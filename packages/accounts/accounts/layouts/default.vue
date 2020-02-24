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
  <main class="main has-background-gray">
    <main-header />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <main-menu />
          </div>
          <div class="column is-9">
            <nuxt />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
}
</style>
