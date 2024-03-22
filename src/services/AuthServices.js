import {  ref } from "vue";

class AuthServices {
  private token ;

  constructor() {
    this.token = ref("");
  }

  getToken()  {
    return this.token;
  }

  async userLogin(email, password) {
    try {
      const url = new URL("https://ademass.com/barbershop/api/login");

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();

      if ("errors" in json) {
        return false;
      }

      this.token.value = json.token;
      return true;
      //
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async userLogout(token) {
    try {
      const url = new URL("https://ademass.com/barbershop/api/logout");

      console.log(url, token);

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };

      const res = await fetch(url, {
        method: "POST",
        headers,
      });
      const json = await res.json();
      console.log(json);

      if (!json.status) {
        return false;
      }

      this.token.value = "";
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}

export default AuthServices;
