<template>
  <div>
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'">
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
  </div>
</template>

<script setup>
import { ref } from "vue";

//const miniState = ref(true);
const drawer = ref(false);
</script>
