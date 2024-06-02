<template>
  <h2 class="text-center wrap" style="color: blueviolet; font-family: Welcome">
    Mesas Reservadas
  </h2>
  <div class="calendar row q-ma-lg flex-center self-center border">
    <Qalendar :events="events" :config="config" />
  </div>
</template>

<script setup>
import { Qalendar } from 'qalendar'
import { ref } from 'vue'

const events = ref([
  // ...
  {
    title: 'Servicio a la Carta',
    with: 'Chandler Bing',
    time: { start: '2024-04-13 20:00', end: '2024-04-16 21:00' },
    colorScheme: 'carta',
    isEditable: true,
    id: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    title: 'Servicio Buffet',
    with: 'Rachel Greene',
    time: { start: '2024-04-14 08:00', end: '2024-04-15 10:00' },
    colorScheme: 'buffet',
    isEditable: true,
    id: '2'
  },
  {
    title: 'Servicio para Evento',
    with: 'Michael Jan',
    time: { start: '2024-04-14 15:00', end: '2024-04-15 16:00' },
    colorScheme: 'evento',
    isEditable: true,
    id: '3'
  }
  // ...
])
const config = ref({
  locale: 'es-ES',
  defaultMode: 'month',
  style: {
    colorSchemes: {
      buffet: {
        color: 'white',
        backgroundColor: 'cyan'
      },
      carta: {
        color: 'white',
        backgroundColor: 'orange'
      },
      evento: {
        color: 'white',
        backgroundColor: 'green'
      },
      rapido: {
        color: 'white',
        backgroundColor: 'red'
      }
    }
  }
})
</script>

<style>
@import "qalendar/dist/style.css";

.calendar {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blueviolet;
}
</style>
