<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2 has-text-centered">
        The latest Xarples news, articles, tips and more
      </h1>
      <h2 class="subtitle is-4 has-text-centered">
        Keep updated, we are always doing new things so that all businesses
        continue to grow successfully.
      </h2>
      <post-list />
    </div>
  </section>
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
