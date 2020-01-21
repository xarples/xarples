<template>
  <card>{{ name }}</card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/Card.vue'

export default Vue.extend({
  components: {
    Card
  },
  async asyncData() {
    return {
      name: 'asasas'
    }
  }
})
</script>
