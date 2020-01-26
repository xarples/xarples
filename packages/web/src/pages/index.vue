<template>
  <main>
    <main-header />
    <hero />
    <feature-list />
    <featured-section />
    <product-section />
    <blog-section />
    <banner />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import MainHeader from '@/features/shared/components/Header.vue'
import Hero from '@/features/shared/components/Hero.vue'
import FeatureList from '@/features/shared/components/FeatureList.vue'
import FeaturedSection from '@/features/featured/components/FeaturedSection.vue'
import ProductSection from '@/features/products/components/ProductSection.vue'
import BlogSection from '@/features/blog/components/BlogSection.vue'
import Banner from '@/features/shared/components/Banner.vue'

export default Vue.extend({
  components: {
    MainHeader,
    Hero,
    FeatureList,
    FeaturedSection,
    ProductSection,
    BlogSection,
    Banner
  },
  data() {
    return {
      name: 'Hello'
    }
  }
})
</script>

sc
