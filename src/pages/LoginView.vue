<template>
  <q-card
    class="my-card q-ma-lg absolute-center self-center items-center justify-center text-center flex-xs-center shadow-12"
  >
    <q-card-section>
      <q-img class="q-ma-xs" src="../assets/images/slider3.jpg" cover />
    </q-card-section>

    <q-card-section>
      <div>
        <q-input
          class="q-ma-xs"
          v-model="email"
          filled
          type="text"
          label="email"
          color="accent"
        />
      </div>
      <div>
        <q-input
          class="q-ma-xs"
          color="accent"
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          :rules="[
            (val) =>
              (val && val.length > 8) ||
              'La password debe tener mas de 8 caracteres',
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
    </q-card-section>

    <q-separator dark-3 />

    <q-card-actions class="q-pa-lg" align="center">
      <q-btn
        label="Conectar"
        type="submit"
        icon="mdi-check-circle"
        color="accent"
        class="q-mt-xx"
        align="center"
        outline
        @click="authUser"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style scoped>
.my-card {
  height: 550px;
  width: 400px;
}

@media only screen and (max-width: 460px) {
  .my-card {
    height: 0px;
    width: 300px;
    flex-wrap: wrap;
    position: relative;
  }
  .q-img {
    height: 200px;
    width: 250px;
  }
}
</style>
