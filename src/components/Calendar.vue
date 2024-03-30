<template>
  <q-popup-proxy
    @before-show="updateProxy"
    cover
    transition-show="scale"
    transition-hide="scale"
  >
    <q-date v-model="proxyDate" color="orange">
      <div class="row items-center justify-end q-gutter-sm">
        <q-btn label="Cancel" color="primary" flat v-close-popup />
        <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
      </div>
    </q-date>
  </q-popup-proxy>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const date = ref("2024/03/01");
    const proxyDate = ref("2024/03/01");

    return {
      date,
      proxyDate,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
      },
    };
  },
};
</script>
