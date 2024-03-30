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

      <q-btn v-if="!store.userId" to=/login flat round dense icon="mdi-login"
      class="q-mr-xs" label="Login" />
      <q-btn
        v-if="store.userId"
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
  <!--Menu Lateral Drawer-->
  <q-drawer
    v-if="store.userId"
    v-model="drawer"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :width="200"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Alex Hernandez</div>
            <div>{{ store.userEmail }}</div>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item active clickable v-ripple to="/product">
          <q-item-section avatar>
            <q-icon name="mdi-star" />
          </q-item-section>
          <q-item-section> Platos Favoritos </q-item-section>
        </q-item>

        <q-item to="/misreservas">
          <q-item-section avatar>
            <q-icon name="mdi-calendar" />
            <Calendar />
          </q-item-section>
          <q-item-section> Mis Reservas </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>
          <q-item-section> Servicios </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>
          <q-item-section> Productos </q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="mdi-message-text" />
          </q-item-section>
          <q-item-section> Encuesta </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>
          <q-item-section> Contacto </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "src/stores/authStore";
import Calendar from "components/Calendar.vue";

const drawer = ref(false);
const miniState = ref(true);

const store = useCounterStore();
</script>
