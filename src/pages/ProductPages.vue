<template>
  <div class="q-pa-md row items-start q-gutter-md align-center justify-center">
    <q-card
      v-for="(carta, index) in laCarta"
      :key="index"
      class="my-card"
      flat
      bordered
    >
      <q-img :src="carta.src" :ratio="10 / 6" />

      <q-card-section>
        <div class="row wrap items-center">
          <div class="col text-h6 ellipsis">{{ carta.title }}</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row wrap items-center"
          ></div>
        </div>

        <q-rating v-model="carta.start" :max="5" size="32px" color="yellow-9" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ carta.precio }} $</div>
        <div class="text-caption text-grey">
          {{ carta.descripcion }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions v-if="store.userId">
        <q-icon flat round name="mdi-calendar" />
        <q-btn flat color="primary">
          Reservar
          <calendar />
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "src/stores/authStore";
import Calendar from "src/components/Calendar.vue";
const store = useCounterStore();

const laCarta = ref([
  {
    src: "https://cdn.quasar.dev/img/chicken-salad.jpg",
    title: "Ensalada de Pollo",
    descripcion: "Ensalada de Pollo con Mayonesa y papas fritas",
    start: 2,
    precio: "12.00",
  },
  {
    src: "https://media.traveler.es/photos/63a1da8f440e8e3aa9a3d8dc/master/w_1600,c_limit/Lhardy%202.jpeg",
    title: "Dulce Goubert",
    descripcion: "Dulce Goubert, Arina con Matequilla y Helado Vainilla",
    start: 3,
    precio: "32.00",
  },
  {
    src: "https://media.traveler.es/photos/635eb57b93bb785c9cec6e36/master/w_1600,c_limit/21393.jpg",
    title: "Garbanzos Pistachos",
    descripcion: "Garbanzos Pistachos con Carne de Elefante y cerdo",
    start: 4,
    precio: "122.00",
  },
  {
    src: "https://media.traveler.es/photos/63a055201155668a66d399c9/master/w_1280,c_limit/Tostadita%20langostinos%20zarandeados_5.jpg",
    title: "Langostinos",
    descripcion:
      "Langostinos con mayonesa y mantequilla. Ensaladas de tomate y pepinillos",
    start: 5,
    precio: "322.00",
  },
  {
    src: "https://medias.treew.com/imgproducts/middle/162015.jpg",
    title: "Cerveza Presidente",
    descripcion: "Refrescante Cerveza Presidente",
    start: 5,
    precio: "190.00",
  },
  {
    src: "https://www.rapicargatravel.com/wp-content/uploads/2023/08/Cerveza-Cristal-6-Latas.jpg",
    title: "Cerveza Cristal",
    descripcion: "La Favorita, Cerveza Cristal",
    start: 5,
    precio: "200.00",
  },
  {
    src: "https://medias.treew.com/imgproducts/thumbs/157370.jpg",
    title: "Cerveza Bucanero",
    descripcion: "Fuerte Cerveza Bucanero",
    start: 5,
    precio: "200.00",
  },
  {
    src: "https://www.totalwine.com/dynamic/x1000,6pk/media/sys_master/twmmedia/ha0/h4b/26759934378014.png",
    title: "Cerveza Mayabe",
    descripcion: "Refrescante Cerveza Mayabe",
    start: 5,
    precio: "150.00",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCoENIeujoEZJT4Z_9LV3s-E6YsRGfnlguw&s",
    title: "Refresco Ciego Montero",
    descripcion: "Refresco Limon, Cola, Naranja",
    start: 5,
    precio: "150.00",
  },
  {
    src: "https://medias.treew.com/imgproducts/middle/169168.jpg",
    title: "Refresco Ciego Montero",
    descripcion: "Refresco TuKola",
    start: 5,
    precio: "150.00",
  },
  {
    src: "https://cdnx.jumpseller.com/la-familia-avilena-envios/image/24304256/resize/280/280?1653234946",
    title: "Refresco Ciego Montero",
    descripcion: "Maltas Hollandia",
    start: 5,
    precio: "200.00",
  },
]);
</script>

<style lang="sass" scoped>
.my-card
  height: 450px
  width: 300px
  flex-wrap: wrap
</style>
