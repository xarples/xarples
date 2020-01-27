<template>
  <div class="columns is-vcentered" :class="{ 'is-inverted': inverted }">
    <div class="column" :class="{ 'has-text-right': !inverted }">
      <img src="https://via.placeholder.com/400" alt />
    </div>
    <div class="column" :class="{ 'has-text-right': inverted }">
      <h1 class="title is-3">
        Polaris
      </h1>
      <h2 class="subtitle is-5">
        All our products are available in the console, activate those you need
        and optimize your workflow.
      </h2>
      <b-button type="is-text">
        Learn more
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Product',
  props: {
    inverted: {
      type: Boolean as () => boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style scoped>
.is-inverted {
  flex-direction: row-reverse;
}
</style>
