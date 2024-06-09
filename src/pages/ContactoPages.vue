<template>
  <div class="row q-ma-lg flex-center self-center border">
    <div
      class="col-xs-12 col-sm-6 col-md-4 wrap flex-center self-center shadow-9 border"
    >
      <h3
        class="text-center wrap"
        style="color: blueviolet; font-family: Welcome"
      >
        Contáctanos
      </h3>
      <q-form>
        <div>
          <q-input
            :rules="store.rulesName"
            v-model="nombreyapellidos"
            type="text"
            class="q-ma-lg"
            color="accent"
            label="Nombre y Apellidos"
          />
        </div>
        <div>
          <q-input
            :rules="store.rulesEmail"
            v-model="email"
            type="text"
            class="q-ma-lg"
            color="accent"
            label="Email"
          />
        </div>
        <div>
          <q-input
            type="textarea"
            v-model="textarea"
            class="q-ma-lg"
            color="accent"
            label="Comentarios"
            outlined
          />
        </div>

        <div class="q-ma-md self-center" align="center">
          <q-btn
            @click="contactos()"
            icon="mdi-check-circle"
            label="Aceptar"
            color="cyan"
            outline
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "src/stores/authStore";
const store = useCounterStore();

const nombreyapellidos = ref("");
const email = ref("");
const textarea = ref("");
</script>

<style scoped></style>
