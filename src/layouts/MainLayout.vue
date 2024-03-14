<template>
  <div class="q-gutter">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-4"
    >
      <MenuBar></MenuBar>

      <q-page-container>
        <slot name="main"></slot>
      </q-page-container>

      <Footer />
    </q-layout>
  </div>
</template>

<script setup>
import Footer from "src/components/Footer.vue";
import MenuBar from "src/components/MenuBar.vue";
</script>

<style lang="sass" scoped></style>
