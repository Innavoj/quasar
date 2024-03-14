<template>
  <div class="q-gutter q-ma-md text-center items-center">
    <q-card class="my-card q-gutter q-pa-md shadow-9 absolute-center">
      <div>
        <h4 class="q-gutter q-ma-xs" style="color: blueviolet">Restaurant</h4>
      </div>

      <q-separator class="q-ma-xs" color="accent"></q-separator>
      <div>
        <q-img class="q-ma-xs" src="../assets/images/slider3.jpg" cover />
      </div>
      <q-card-section>
        <q-form>
          <div>
            <q-input
              class="q-ma-sm"
              v-model="email"
              filled
              type="text"
              label="email"
              color="accent"
            />
          </div>
          <div>
            <q-input
              class="q-ma-sm"
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
        </q-form>
      </q-card-section>
      <q-separator color="accent"></q-separator>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const isPwd = ref(true);
</script>

<style lang="sass" scoped>
.my-card
  height: 590px
  width: 400px


  @media (max-width: $breakpoint-xs)
  .my-card
      position: relative
      aling: center
      justify: center
      text: center
      background-color: $primary
      height: 590px
      width: 200px
</style>
