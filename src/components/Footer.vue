<template>
  <div>
    <q-footer elevated class="bg-purple-7">
      <div
        class="row col-xs-12 col-sm-6 col-md-2 text-center align-center justify-center"
      >
        <q-btn
          v-for="(icon, index) in redes"
          flat
          round
          :key="index"
          :icon="icon.icons"
          :href="icon.src"
          class="btn-icons q-ma-xs q-ma-sm q-ma-md"
        >
        </q-btn>
      </div>
      <div class="footer row text-center align-center justify-center">
        <div class="col-xs-12 col-sm-6 col-md-2">
          <q-img src="src/assets/images/slider3.jpg" class="imagen" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <h6>Nosotros</h6>
          <p>Camino de la Isla. Santiago de Cuba</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <h6>Politica</h6>
          <a href="#">Privacida</a>
          <a href="#">Aviso Legal</a>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-2">
          <h6>Contactos</h6>
          <a href="#">islasegura@gmail.com</a>
        </div>
      </div>

      <div class="text-center align-center justify-center">
        <h6>
          {{ new Date().getFullYear() }} — Isla Segura Copyright(R) Derechos
          Reservados. Version 1.0
        </h6>
      </div>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    redes: [
      {
        icons: "mdi-facebook",
        src: "https://www.facebook.com",
      },
      {
        icons: "mdi-instagram",
        src: "https://www.instagram.com",
      },
      {
        icons: "mdi-youtube",
        src: "https://www.youtube.com",
      },
      {
        icons: "mdi-twitter",
        src: "https://www.twitter.com",
      },
    ],
  }),
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 12px;
  margin-top: 25px;
}

.imagen {
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border-radius: 25px;
}

h6 {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: #26c6da;
}
a {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-decoration: none;
  color: white;
}

.btn-icons:hover {
  color: cyan;
}
</style>
