<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'auth',
  asyncData(ctx) {
    // @ts-ignore
    const client = ctx.req.client

    // @ts-ignore
    const user = ctx.req.user

    return {
      client,
      user,
      responseType: ctx.query.response_type,
      clientId: ctx.query.client_id,
      redirectUri: ctx.query.redirect_uri,
      codeChallenge: ctx.query.code_challenge,
      codeChallengeMethod: ctx.query.code_challenge_method || 'plain',
      scope: ctx.query.scope,
      state: ctx.query.state || undefined
    }
  }
})
</script>

<template>
  <main class="main has-background">
    <w-section>
      <w-container>
        <w-grid-row horizontal-align="center">
          <w-grid-column :cols="5">
            <w-card :shadow="false">
              <w-card-header>
                <w-text align="center">
                  <strong>Sign in with Xarples</strong>
                </w-text>
              </w-card-header>
              <w-card-body>
                <w-card-title color="primary" align="center">
                  {{ client.name }}
                </w-card-title>
                <w-text variant="h6" align="center">
                  Wants access to your xarples account:
                  <strong>{{ user.email }}</strong>
                </w-text>
                <w-spacer></w-spacer>
                <w-text variant="h6">
                  This will allow
                  <strong>{{ client.name }}</strong> to:
                </w-text>
                <template v-for="item of [1, 2, 3]">
                  <w-spacer :key="`${item}-spacer`"></w-spacer>
                  <w-grid-row :key="item">
                    <w-grid-column>
                      <w-text>
                        View and manage your data across Xarples console
                        services.
                      </w-text>
                    </w-grid-column>
                  </w-grid-row>
                </template>

                <w-spacer></w-spacer>
                <w-text variant="h6">
                  <strong>Make sure you trust {{ client.name }}</strong>
                </w-text>
                <w-text>
                  You may be sharing sensitive info with this site or app. Learn
                  about how {{ client.name }} will handle your data by reviewing
                  its terms of service and privacy policies. You can always see
                  or remove access in your
                </w-text>
              </w-card-body>
              <w-card-footer>
                <form
                  action="/authorize"
                  method="post"
                  enctype="application/x-www-form-urlencoded"
                >
                  <input type="hidden" name="consent" value="allow" />
                  <input type="hidden" name="client_id" :value="clientId" />
                  <input
                    type="hidden"
                    name="redirect_uri"
                    :value="redirectUri"
                  />
                  <input
                    type="hidden"
                    name="response_type"
                    :value="responseType"
                  />
                  <input
                    type="hidden"
                    name="code_challenge"
                    :value="codeChallenge"
                  />
                  <input
                    type="hidden"
                    name="code_challenge_method"
                    :value="codeChallengeMethod"
                  />
                  <input type="hidden" name="scope" :value="scope" />
                  <input type="hidden" name="state" :value="state" />
                  <w-button block type="submit">Allow</w-button>
                </form>
                <w-spacer></w-spacer>
                <form
                  action="/authorize"
                  method="post"
                  enctype="application/x-www-form-urlencoded"
                >
                  <input type="hidden" name="consent" value="deny" />
                  <w-button color="white" block type="submit">Deny</w-button>
                </form>
              </w-card-footer>
            </w-card>
          </w-grid-column>
        </w-grid-row>
      </w-container>
    </w-section>
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
