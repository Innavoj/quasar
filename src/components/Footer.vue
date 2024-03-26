<template>
  <!--Footer---->

  <q-footer elevated class="bg-purple-7">
    <div
      class="row col-xs-12 col-sm-6 col-md-2 text-center align-center justify-center"
    ></div>
    <div class="footer row text-center align-center justify-center">
      <div class="colunm col-xs-12 col-sm-6 col-md-2">
        <a style="color: cyan; font-size: 24px; font-family: Welcome">{{
          titulo
        }}</a>
        <q-img src="src/assets/images/slider3.jpg" class="imagen" />
        <div class="row">
          <q-btn
            v-for="(icon, index) in redes"
            flat
            round
            :key="index"
            :icon="icon.icons"
            :href="icon.src"
            class="btn-icons q-ma-xs q-ma-sm"
          >
          </q-btn>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-2">
        <h6>Nosotros</h6>
        <a>Camino de la Isla. Santiago de Cuba</a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-2">
        <h6>Politica</h6>
        <a href="#">Privacida</a>
        <a href="#">Aviso Legal</a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-2">
        <h6>Contactos</h6>
        <a href="#"><q-icon name="mdi-email" />gerente@gmail.com</a>
        <a href="#"><q-icon name="mdi-email" />islasegura@gmail.com</a>
      </div>
    </div>
    <q-separator />
    <div class="text-center align-center justify-center">
      <p>
        <strong>
          {{ new Date().getFullYear() }} — {{ titulo }} Copyright(R) Derechos
          Reservados. Version 1.0</strong
        >
      </p>
    </div>
  </q-footer>
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
    titulo: "Isla Segura",
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
  width: 150px;
  height: 130px;
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

p {
  color: cyan;
  font-size: medium;
}
.btn-icons:hover {
  color: cyan;
}
</style>
