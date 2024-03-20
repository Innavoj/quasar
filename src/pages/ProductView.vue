<template>
  <div class="q-pa-md row items-start q-gutter-md align-center justify-center">
    <q-card
      v-for="(carta, index) in laCarta"
      :key="index"
      class="my-card"
      flat
      bordered
    >
      <q-img :src="carta.src" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ carta.title }}</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          ></div>
        </div>

        <q-rating v-model="carta.stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ carta.precio }} $</div>
        <div class="text-caption text-grey">
          {{ carta.descripcion }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary"> Reservar </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const laCarta = ref([
  {
    src: "https://cdn.quasar.dev/img/chicken-salad.jpg",
    title: "Ensalada de Pollo",
    descripcion: "Ensalada de Pollo con Mayonesa y papas fritas",
    start: 1,
    precio: "12.00",
  },
  {
    src: "https://media.traveler.es/photos/63a1da8f440e8e3aa9a3d8dc/master/w_1600,c_limit/Lhardy%202.jpeg",
    title: "Dulce Goubert",
    descripcion: "Dulce Goubert, Arina con Matequilla y Helado Vainilla",
    start: 1,
    precio: "32.00",
  },
  {
    src: "https://media.traveler.es/photos/635eb57b93bb785c9cec6e36/master/w_1600,c_limit/21393.jpg",
    title: "Garbanzos Pistachos",
    descripcion: "Garbanzos Pistachos con Carne de Elefante y cerdo",
    start: 1,
    precio: "122.00",
  },
  {
    src: "https://media.traveler.es/photos/63a055201155668a66d399c9/master/w_1280,c_limit/Tostadita%20langostinos%20zarandeados_5.jpg",
    title: "Langostinos",
    descripcion: "Langostinos en salsa ",
    start: 1,
    precio: "322.00",
  },
]);
</script>

<style lang="sass" scoped>
.my-card
  height: 450px
  width: 300px
  flex-wrap: wrap
</style>
