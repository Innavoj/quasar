<template>
  <div class="row q-ma-lg flex-center self-center border">
    <div
      class="col-xs-12 col-sm-6 col-md-4 wrap flex-center self-center shadow-9 border"
    >
      <h3
        class="text-center wrap"
        style="color: blueviolet; font-family: Welcome"
      >
        Restaurant {{ store.titulo }}
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
            :rules="store.rulesEmail"
            class="q-ma-lg"
            v-model="email"
            filled
            type="text"
            label="email"
            color="accent"
          />
        </div>
        <div class="row-md-4">
          <q-input
            class="q-ma-lg"
            color="accent"
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            :rules="store.rulesPasswd"
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
            @click="store.userLogin(email, password)"
            label="Conectar"
            type="submit"
            icon="mdi-check-circle"
            color="cyan"
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
import { useCounterStore } from "src/stores/authStore";

const store = useCounterStore();

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
