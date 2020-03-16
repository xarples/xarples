<template>
  <w-grid-container>
    <w-navbar-menu>
      <w-navbar-menu-list>
        <w-navbar-menu-item-logo>
          <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png" />
        </w-navbar-menu-item-logo>
      </w-navbar-menu-list>
      <w-navbar-menu-list>
        <!-- <w-navbar-menu-item>Sign in</w-navbar-menu-item> -->
        <w-navbar-menu-item active>
          <w-dropdown>
            <w-dropdown-trigger>
              <w-image
                size="sm"
                variant="avatar"
                src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
              />
              <!-- <w-button size="default">Get started</w-button> -->
            </w-dropdown-trigger>
            <w-dropdown-list align="right" :style="{ width: '350px' }">
              <w-spacer />
              <w-grid-row horizontal-align="center">
                <w-grid-column auto>
                  <w-image
                    size="xl"
                    variant="avatar"
                    src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-2.jpg"
                  />
                </w-grid-column>
              </w-grid-row>
              <w-spacer />
              <w-grid-row>
                <w-grid-column>
                  <w-text align="center">
                    <strong>Guillermo Lopez</strong>
                  </w-text>
                </w-grid-column>
              </w-grid-row>
              <w-grid-row>
                <w-grid-column>
                  <w-text align="center">guillermolopez2529@gmail.com</w-text>
                </w-grid-column>
              </w-grid-row>
              <w-spacer size="2x" />
              <w-divider></w-divider>
              <w-dropdown-item>
                <w-text align="center">Manage your Xarples Account</w-text>
              </w-dropdown-item>
              <w-divider></w-divider>
              <w-dropdown-item>
                <w-text align="center">Sign out</w-text>
              </w-dropdown-item>
            </w-dropdown-list>
          </w-dropdown>
        </w-navbar-menu-item>
      </w-navbar-menu-list>
    </w-navbar-menu>
  </w-grid-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header'
})
</script>
