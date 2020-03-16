<template>
  <w-section size="medium">
    <w-grid-container>
      <w-grid-row>
        <w-grid-column :sm="12" :md="5">
          <w-text variant="display1">
            <strong>A new way to use Software</strong>
          </w-text>
          <w-text variant="lead">
            xarples is the builder of the future of enterprise apps. Become a
            xarples client and access the power that will transform your
            business.
          </w-text>
          <w-button size="lg">Get Started</w-button>
          <w-button color="white" size="lg">Contact us</w-button>
        </w-grid-column>
        <w-grid-column :sm="12" :md="7">
          <img :style="{ maxWidth: '100%' }" src="/hero.png" />
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Hero'
})
</script>
