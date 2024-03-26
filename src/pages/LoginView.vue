<template>
  <div class="row q-ma-lg flex-center self-center border">
    <div
      class="col-xs-12 col-sm-6 col-md-4 wrap flex-center self-center shadow-9 border"
    >
      <h3
        class="text-center wrap"
        style="color: blueviolet; font-family: Welcome"
      >
        Restaurant Isla Segura
      </h3>
      <q-form>
        <div class="row">
          <q-img
            class="q-ma-xs"
            src="../assets/images/slider3.jpg"
            :ratio="12 / 6"
            cover
          />
        </div>
        <div class="row-md-4">
          <q-input
            class="q-ma-xs"
            v-model="email"
            filled
            type="text"
            label="email"
            color="accent"
          />
        </div>
        <div class="row-md-4">
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
        <div class="row wrap q-ma-md flex-center">
          <q-btn
            @click="authUser"
            label="Conectar"
            type="submit"
            icon="mdi-check-circle"
            color="green"
            class="q-pa-xs q-ma-xs"
            align="center"
            outline
          />
          <q-btn
            @click="loginGoogle"
            type="submit"
            label="Login con Google"
            color="success"
            icon="mdi-google"
            class="q-pa-xs q-ma-xs"
            align="center"
            outline
            rounded
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style scoped>
.q-btn:hover {
  color: blueviolet;
}

@media only screen and (max-width: 360px) {
  div h3 {
    font-size: 20px;
  }
}
</style>
