<template>
  <main>
    <main-header></main-header>
    <Nuxt />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import MainHeader from '@/components/Header.vue'

export default Vue.extend({
  components: {
    MainHeader
  }
})
</script>
