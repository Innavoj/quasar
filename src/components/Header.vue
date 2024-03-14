<template>
  <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'">
    <q-toolbar>
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
      <q-toolbar-title>Restaurant Basilico</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const miniState = ref(true);
const drawer = ref(false);
</script>
