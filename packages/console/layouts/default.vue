<script lang="ts">
import Vue from 'vue'

import MainHeader from '@/features/shared/MainHeader.vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    MainHeader
  }
})
</script>

<template>
  <main>
    <main-header />
    <nuxt />
  </main>
</template>
