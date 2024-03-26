<template>
  <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title style="font-family: Barett; color: cyan; font-size: 25px"
        >Restaurant
        <strong style="font-family: Welcome">Isla Segura</strong>
      </q-toolbar-title>

      <q-btn to=/login flat round dense icon="mdi-login" class="q-mr-xs" />
      <q-btn flat round dense icon="mdi-logout" class="q-mr-xs" />
    </q-toolbar>
  </q-header>
</template>

<script>
//import { ref } from "vue";

export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
