import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia";
//import { useRouter } from "vue-router";
//import routes from "src/router/routes";
//const router = useRouter();

import "src/services/AuthFirebase.js";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    token: "null",
    userEmail: "",
    isUser: false,
    errorCode: "",
    errorMessage: "",
    userId: "",
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
  }),

  getters: {},

  actions: {
    userLogin(email, password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((credential) => {
          console.log("Autenticacion exitosa en firebase");
          this.token = credential.user.accessToken;
          this.userId = credential.user.uid;
          this.userEmail = credential.user.email;
          this.isUser = true;
          console.log("token: ", this.token);
          console.log("isUser: ", this.isUser);
          console.log("UserId: ", this.userId);
          return true && this.router.push("/");
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          console.log(
            "Error en la conexion: ",
            this.errorCode + this.errorMessage
          );
          alert("Error en la conexion");
          return false;
        });
    },
    userLogout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Logout Exitoso de Firebase");
          this.token = auth.currentUser;
          this.isUser = false;
          this.userEmail = "";
          this.userId = "";
          console.log("token: ", this.token);
          console.log("isUser:", this.isUser);
          return true;
        })
        .catch((error) => {
          console.log("Error en Logout:", error.message);
          return false;
        });
    },
  },
});
