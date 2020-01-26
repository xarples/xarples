<template>
  <div>
    <div class="columns">
      <div class="column">
        <post />
      </div>
      <div class="column">
        <post />
      </div>
      <div class="column">
        <post />
      </div>
    </div>
  </div>
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
