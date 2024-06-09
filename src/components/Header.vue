<template>
  <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title
        class="wrap"
        style="font-family: Barett; color: cyan; font-size: 25px"
        >Restaurant
        <strong class="wrap" style="font-family: Welcome">Isla Segura</strong>
      </q-toolbar-title>

      <q-btn v-if="!store.isUser" to=/login flat round dense icon="mdi-login"
      class="q-mr-xs" label="Login" />
      <q-btn
        v-if="store.isUser"
        @click="store.userLogout"
        flat
        round
        dense
        icon="mdi-logout"
        class="q-mr-xs"
        label="Logout"
      />
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
