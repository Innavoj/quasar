<template>
  <div class="q-gutter">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-4"
    >
      <q-header
        elevated
        :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'"
      >
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title style="font-family: Barett; font-size: 25px"
            >Restaurant
            <strong style="font-family: Welcome">Isla Segura</strong>
          </q-toolbar-title>
        </q-toolbar>
        <q-btn icon="mdi-account"> <span>Iniciar Sesion</span> </q-btn>
        <q-btn icon="mdi-login"> <span>Cerrar Sesion</span> </q-btn>
      </q-header>
      <q-page-container>
        <slot name="main"></slot>
      </q-page-container>

      <Footer />
    </q-layout>
  </div>
</template>

<script setup>
import Footer from "src/components/Footer.vue";
//import { ref } from "vue";

//const isUser = ref(false);
</script>

<style lang="sass" scoped>
.q-header
  display: flex
  flex-direction: row

  .q-btn

    font-size: 10px

    .icon
      size: 10px
</style>
