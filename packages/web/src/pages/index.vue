<template>
  <section class="container">
    <hero />
    <feature-list />
    <food-app-section />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import Hero from '@/components/Hero.vue'
import FeatureList from '@/components/FeatureList.vue'
import FoodAppSection from '@/components/FoodAppSection.vue'

export default Vue.extend({
  components: {
    Hero,
    FeatureList,
    FoodAppSection
  },
  data() {
    return {
      name: 'Hello'
    }
  }
})
</script>

sc
