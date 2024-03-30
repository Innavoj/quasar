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
            class="wrap"
            style="font-family: Barett; color: cyan; font-size: 25px"
            >Restaurant
            <strong class="wrap" style="font-family: Welcome"
              >Isla Segura</strong
            >
          </q-toolbar-title>

          <q-btn v-if="!store.isUser" to=/login flat round dense
          icon="mdi-login" class="q-mr-xs" label="Login" />
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
      <!--Menu Drawer-->
      <q-drawer
        v-if="store.isUser"
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
                <div>{{ store.userEmail }}</div>
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

      <div>
        <q-page-container>
          <router-view> </router-view>
        </q-page-container>
      </div>
      <!--Footer-->
      <Footer></Footer>
    </q-layout>
  </div>
</template>

<script setup>
//import MenuBar from "src/components/MenuBar.vue";

//import Header from "src/components/Header.vue";
import Footer from "src/components/Footer.vue";
import { useCounterStore } from "src/stores/authStore";

import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const miniState = ref(true);

const store = useCounterStore();

const isLayoutA = () => {
  const route = useRouter();
  //console.log('route', route);
  return route.meta.requiredAuth;
};
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
