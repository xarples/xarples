<template>
  <section class="container">
    <main-header />
    <hero />
    <feature-list />
    <food-app-section />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import MainHeader from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import FeatureList from '@/components/FeatureList.vue'
import FoodAppSection from '@/components/FoodAppSection.vue'

export default Vue.extend({
  components: {
    MainHeader,
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
