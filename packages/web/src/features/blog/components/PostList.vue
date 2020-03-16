<template>
  <w-grid-row>
    <w-grid-column :sm="12" :md="4">
      <post />
    </w-grid-column>
    <w-grid-column :sm="12" :md="4">
      <post />
    </w-grid-column>
    <w-grid-column :sm="12" :md="4">
      <post />
    </w-grid-column>
  </w-grid-row>
</template>

<script lang="ts">
import Vue from 'vue'

import post from '@/features/blog/components/Post.vue'

export default Vue.extend({
  name: 'PostList',
  components: {
    post
  }
})
</script>
