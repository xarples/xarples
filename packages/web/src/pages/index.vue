<template>
  <main>
    <main-header />
    <w-divider />
    <!-- <w-alert color="info">
      <w-text color="white" align="center">
        <strong>
          Slack is the place for remote work Schedule a consultation with Slack
          experts to learn how to stay productive.
        </strong>
      </w-text>
      <w-icon color="white" name="times" />
    </w-alert>-->
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
