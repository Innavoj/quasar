<template>
  <div class="row q-ma-lg flex-center self-center border">
    <div
      class="col-xs-12 col-sm-6 col-md-4 wrap flex-center self-center shadow-9 border"
    >
      <h3
        class="text-center wrap"
        style="color: blueviolet; font-family: Welcome"
      >
        Encuesta
      </h3>
      <q-form class="q-gutter-md">
        <div
          class="q-ma-lg"
          v-for="(pregunta, index) in preguntas"
          :key="index"
        >
          <strong class="d-flex flex-wrap">{{ pregunta.title }}</strong>
          <q-rating
            name="quality"
            v-model="pregunta.rating"
            max="5"
            size="2.5em"
            color="orange"
            hover
            half-increments
          />
          <span>{{ pregunta.rating }}</span>
          <q-linear-progress
            size="25px"
            :value="pregunta.rating * pregunta.power"
            color="accent"
            stripe
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="accent"
                :label="pregunta.rating * pregunta.power + '%'"
              />
            </div>
          </q-linear-progress>
        </div>
        <div class="text-center justify-center flex-center">
          <q-btn
            class="q-ma-sm"
            align="center"
            label="Enviar"
            color="cyan"
            icon="mdi-checkbox-marked-circle"
            outline
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const preguntas = ref([
  {
    title: "Experiencia general:",
    rating: 5,
    power: 20,
  },
  {
    title: "Bienvenida:",
    rating: 4,
    power: 20,
  },
  {
    title: "Acomodo:",
    rating: 4,
    power: 20,
  },
  {
    title: "Servicio:",
    rating: 5,
    power: 20,
  },
]);
</script>

<style scoped>
@media only screen and (max-width: 320px) {
  .q-linear-progress {
    color: brown;
  }
}
</style>
