<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData(ctx) {
    // @ts-ignore
    const client = ctx.req.client
    // @ts-ignore
    const user = ctx.req.user
    return {
      client,
      user,
      scope: ctx.query.scope,
      state: ctx.query.state
    }
  }
})
</script>

<template>
  <main class="main has-background">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor has-max-width">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <strong>Sign in with Xarples</strong>
              <hr />
              <p class="title is-3">
                <strong>{{ client.name }}</strong>
              </p>
              <p class="subtitle is-5">
                <span>wants access to your xarples account</span>
              </p>
              <div class="content">
                <p>{{ user.email }}</p>
                <p class="subtitle is-5">
                  This will allow
                  <strong>{{ client.name }}</strong>
                  to:
                </p>
                <ul>
                  <li>
                    View and manage your data across Google Cloud Platform
                    services
                  </li>
                  <li>
                    View and manage your data across Google Cloud Platform
                    services
                  </li>
                  <li>
                    View and manage your data across Google Cloud Platform
                    services
                  </li>
                </ul>

                <p class="subtitle is-6">
                  <strong>Make sure you trust {{ client.name }}</strong>
                </p>
                <p>
                  You may be sharing sensitive info with this site or app. Learn
                  about how {{ client.name }} will handle your data by reviewing
                  its terms of service and privacy policies. You can always see
                  or remove access in your
                </p>
              </div>
              <div class="buttons">
                <form action="/authorize" method="post">
                  <input type="hidden" name="consent" value="deny" />
                  <input
                    type="hidden"
                    name="clientId"
                    :value="client.clientId"
                  />
                  <input
                    type="hidden"
                    name="redirectUri"
                    :value="client.redirectUri"
                  />
                  <input type="hidden" name="state" :value="state" />
                  <input type="submit" class="button is-light" value="Deny" />
                </form>
                <form action="/authorize" method="post">
                  <input type="hidden" name="consent" value="allow" />
                  <input
                    type="hidden"
                    name="clientId"
                    :value="client.clientId"
                  />
                  <input
                    type="hidden"
                    name="redirectUri"
                    :value="client.redirectUri"
                  />
                  <input type="hidden" name="scope" :value="scope" />
                  <input type="hidden" name="state" :value="state" />
                  <input
                    type="submit"
                    class="button is-primary"
                    value="Allow"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.has-max-width {
  max-width: 450px;
}

.has-background {
  background-color: #fbfbfd;
}
</style>
