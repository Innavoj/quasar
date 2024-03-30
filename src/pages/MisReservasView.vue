<template>
  <div class="q-pa-md justify-center align-center text-center">
    <div class="q-gutter-md justify-center align-center">
      <q-date
        v-model="date"
        :events="events"
        color="purple"
        :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'orange')"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      date: ref("2024/02/01"),
      events: [
        "2024/02/01",
        "2024/02/05",
        "2024/02/06",
        "2024/02/09",
        "2024/02/23",
      ],
    };
  },
};
</script>
