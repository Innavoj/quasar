<template>
  <q-card
    class="my-card q-pa-md q-gutter-md bg-pink-2 absolute-center self-center items-center justify-center text-center shadow-12"
    ><q-form @submit.prevent>
      <q-card-section>
        <q-img
          class="q-ma-xs"
          src="../assets/images/slider3.jpg"
          :ratio="10 / 6"
          cover
        />
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

      <q-card-actions class="q-mt-xs row" align="center">
        <q-btn
          @click="authUser"
          label="Conectar"
          type="submit"
          icon="mdi-check-circle"
          color="green"
          class="q-mt-xs"
          align="center"
          outline
        />
        <q-btn
          @click.prevent="loginGoogle"
          type="submit"
          label="Login con Google"
          color="success"
          icon="mdi-google"
          class="q-mt-sm"
          align="center"
          outline
          rounded
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyu2RgYwmZrYRcxOLFK7cjbWo-QKwHZCk",
  authDomain: "restaurant-5b3c0.firebaseapp.com",
  projectId: "restaurant-5b3c0",
  storageBucket: "restaurant-5b3c0.appspot.com",
  messagingSenderId: "812325891523",
  appId: "1:812325891523:web:5e8ce53b2b92cd2b042176",
  measurementId: "G-JBZVMYV5VN",
};

initializeApp(firebaseConfig);

const email = ref("");
const password = ref("");
const isPwd = ref(true);

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

import router from "src/router/routes";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const authUser = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("exito");
      router.push("/");
    })
    .catch((error) => {
      alert("error" + error.message);
    });
};

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credencial = GoogleAuthProvider.credentialFromResult(result);
      const token = credencial.accessToken;
      alert("success" + token);
    })
    .catch((error) => {
      alert("login error");
    });
};
</script>

<style scoped>
.my-card {
  height: 550px;
  width: 360px;
}
.q-btn:hover {
  color: blueviolet;
}

@media only screen and (max-width: 360px) {
  .my-card {
    height: 0px;
    width: 300px;
    flex-wrap: wrap;
    position: relative;
  }
  .q-img {
    height: 200px;
    width: 220px;
  }
}
</style>
