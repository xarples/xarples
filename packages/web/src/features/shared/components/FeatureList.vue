<template>
  <w-section>
    <w-grid-container>
      <w-grid-row>
        <w-grid-column :sm="12" :md="3">
          <w-icon name="sync" size="2x" />
          <w-text variant="h4">
            <strong>Zero config</strong>
          </w-text>
          <w-text>
            Xarples products work great individually but share data and
            insights, so they work even better together.
          </w-text>
        </w-grid-column>
        <w-grid-column :sm="12" :md="3">
          <w-icon name="sync" size="2x" />
          <w-text variant="h4">
            <strong>Collaborative</strong>
          </w-text>
          <w-text>
            Xarples products work great individually but share data and
            insights, so they work even better together.
          </w-text>
        </w-grid-column>
        <w-grid-column :sm="12" :md="3">
          <w-icon name="sync" size="2x" />

          <w-text variant="h4">
            <strong>Automatic SSL</strong>
          </w-text>
          <w-text>
            Xarples products work great individually but share data and
            insights, so they work even better together.
          </w-text>
        </w-grid-column>
        <w-grid-column :sm="12" :md="3">
          <w-icon name="sync" size="2x" />

          <w-text variant="h4">
            <strong>Blazing fast</strong>
          </w-text>
          <w-text>
            Xarples products work great individually but share data and
            insights, so they work even better together.
          </w-text>
        </w-grid-column>
      </w-grid-row>
    </w-grid-container>
  </w-section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FeatureList'
})
</script>
