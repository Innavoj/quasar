// Utilities
import { defineStore } from "pinia";
//import IResponse from "@/interfaces/IResponse";
import AuthServices from "@/services/AuthServices";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      token: "",
      rulesPasswd: [
        (val) => !!val || "Password is required",
        (val) =>
          (val && val.length > 8) ||
          "The password must be greater than 8 characters",
      ],
      rulesEmail: [
        (val) => !!val || "This Email is required",
        (val) => /.+@.+\..+/.test(val) || "The email must be valid",
      ],
      rulesName: [(val) => !!val || "This field is required"],
    };
  },
  actions: {
    async register(name, lastname, email, password) {
      //Peticion al endpoint, por método post
      const rawResponse = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
        body: JSON.stringify({
          name: name,
          last_name: lastname,
          email: email,
          password: password,
        }),
      });

      //Obteniendo los resultados json
      const response2: IResponse = await rawResponse.json();
      console.log(response2.message);
      console.log(response2.status);
      console.log(response2.errors?.email);
      console.log(response2.token);
      //manage response

      const response: IResponse = { status: true };
      console.log(
        `El username es: ${name}, El lastname es: ${lastname} El password es: ${password}, El correo es: ${email} `
      );
      if (response.status === false) {
        return false;
      } else {
        // this.token = response.token
        return true;
      }
    },
    async login(email, password) {
      console.log(`El email es: ${email} y el password es: ${password}`);

      // Usando el servicio para autenticaciones

      const authService = new AuthServices();
      const response = await authService.userLogin(email, password);

      if (response) {
        alert("éxito");
        return (this.token = authService.getToken().value);
      } else {
        alert("login incorrecto");
      }
      console.log("usuario logueado", this.token);
    },
    async logout() {
      const authService = new AuthServices();
      const response = await authService.userLogout(this.token);

      console.log(response);

      if (!response) {
        alert("logout falló appstore");
        return false;
      } else {
        alert("éxito");
        this.token = authService.getToken().value;
        console.log("sesión cerró", this.token);
        return this.token;
      }
    },
  },
});
