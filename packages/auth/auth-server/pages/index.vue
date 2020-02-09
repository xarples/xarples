<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData(ctx) {
    // @ts-ignore
    console.log(ctx.req.client.name)
    return {
      // @ts-ignore
      clientName: ctx.req.client.name
    }
  }
})

// import { createComponent, ref, onServerPrefetch } from '@vue/composition-api'

// export default createComponent({
//   setup() {
//     const clientName = ref('')

//     onServerPrefetch(() => {
//       clientName.value = 'Hello'
//     })

//     return {
//       clientName
//     }
//   }
// })
</script>

<template>
  <section>
    <p>{{ clientName }}</p>
  </section>
</template>
