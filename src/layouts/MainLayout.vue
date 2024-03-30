<template>
  <div v-if="isLayoutA" class="q-gutter">
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

          <q-btn v-if="!isUser" to=/login flat round dense icon="mdi-login"
          class="q-mr-xs" label="Login" />
          <q-btn
            v-if="isUser"
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
      <!--Menu Drawer-->
      <q-drawer
        v-if="isUser"
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
                <div class="text-weight-bold">Razvan Stoenescu</div>
                <div>@rstoenescu</div>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-star" />
              </q-item-section>
              <q-item-section> Platos Favoritos </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-star" />
              </q-item-section>
              <q-item-section> Mis Reservas </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-calendar" />
              </q-item-section>
              <q-item-section> Calendario </q-item-section>
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

      <q-page-container>
        <slot name="main"></slot>
      </q-page-container>
      <!--Footer-->
      <Footer></Footer>
    </q-layout>
  </div>
</template>

<script setup>
//import MenuBar from "src/components/MenuBar.vue";
//import Login from "src/pages/LoginView.vue";
//import Header from "src/components/Header.vue";
import Footer from "src/components/Footer.vue";
import { useCounterStore } from "src/stores/authStore";
//import { getAuth } from "firebase/auth";

import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
//const router = useRouter();

const drawer = ref(false);
const miniState = ref(true);

const store = useCounterStore();
let token = store.token;
let isUser = store.isUser;

const isLayoutA = () => {
  const route = useRouter();
  //console.log('route', route);
  return route.meta.requiredAuth;
};

// console.log('token desde app.vue', token)
watchEffect(() => {
  token = store.token;
  console.log("Token actualizado en app.vue", token);
  if (token) {
    store.isUser = true;
    console.log(isUser);
  } else {
    store.isUser = false;
  }
});
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
