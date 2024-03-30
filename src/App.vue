<template>
  <div v-if="isLayoutA" class="q-gutter">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh; width: 100vw"
      class="shadow-4"
    >
      <!--Header y MenuBar-->

      <MenuBar></MenuBar>
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
import MenuBar from "src/components/MenuBar.vue";

//import Header from "src/components/Header.vue";
import Footer from "src/components/Footer.vue";
//import { useCounterStore } from "src/stores/authStore";

//import { ref } from "vue";
import { useRouter } from "vue-router";

//const drawer = ref(false);
//const miniState = ref(true);

//const store = useCounterStore();

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
