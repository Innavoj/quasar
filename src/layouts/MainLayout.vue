<template>
  <div class="q-gutter">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh; width: 100vw"
      class="shadow-4"
    >
      <!--Header-->
      <q-header
        elevated
        :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'"
      >
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title
            style="font-family: Barett; color: cyan; font-size: 25px"
            >Restaurant
            <strong style="font-family: Welcome">Isla Segura</strong>
          </q-toolbar-title>

          <q-btn to=/login flat round dense icon="mdi-login" class="q-mr-xs" />
          <q-btn flat round dense icon="mdi-logout" class="q-mr-xs" />
        </q-toolbar>
      </q-header>
      <!--Menu Drawer-->
      <MenuBar v-if="isUser"></MenuBar>
      <q-page-container>
        <slot name="main"></slot>
      </q-page-container>
      <!--Footer-->
      <Footer></Footer>
    </q-layout>
  </div>
</template>

<script setup>
import MenuBar from "src/components/MenuBar.vue";
import Footer from "src/components/Footer.vue";

import { ref } from "vue";

const isUser = ref(false);
</script>

<style lang="sass" scoped>
.q-header
  display: flex
  flex-wrap: wrap

  .q-btn
    display: flex
    flex-wrap: wrap
    margin: 4px
</style>
