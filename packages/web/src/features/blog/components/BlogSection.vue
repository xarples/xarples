<template>
  <w-section size="medium">
    <w-grid-container>
      <w-grid-row>
        <w-grid-column>
          <w-text variant="h2" align="center">
            <strong>The latest Xarples news, articles, tips and more</strong>
          </w-text>
          <w-text variant="h5" align="center">
            Keep updated, we are always doing new things so that all businesses
            continue to grow successfully.
          </w-text>
        </w-grid-column>
      </w-grid-row>
      <w-spacer size="3x" />
      <post-list />
    </w-grid-container>
  </w-section>
</template>

<script lang="ts">
import Vue from 'vue'

import PostList from '@/features/blog/components/PostList.vue'

export default Vue.extend({
  name: 'PostSection',
  components: {
    PostList
  }
})
</script>
