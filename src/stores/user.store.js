import { defineStore } from "pinia";
import { useAlertStore } from "src/stores/alert.store";
import router from "src/router";
import { fetchWrapper } from "src/helpers";
import { Notify } from "quasar";

const baseUrl = `${fetchWrapper.apiUrl}/cms/auth`;

export const useAuthStore = defineStore({
  id: "user",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    // user: JSON.parse(localStorage.getItem('user')),
  }),
  actions: {
    async login(username, password) {
      try {
        const user = await fetchWrapper.post(`${baseUrl}/login`, {
          username,
          password,
        });

        // update pinia state
        this.user = user;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        // localStorage.setItem('user', JSON.stringify(user));

        // redirect to previous url or default to home page
        console.log(user);
        Notify.create({
          color: "positive",
          textColor: "white",
          icon: "warning",
          message: "Đăng nhập thành công",
          position: "top",
          timeout: "1000",
        });
        this.router.push("/user/home");
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error);
        Notify.create({
          color: "negative",
          textColor: "white",
          icon: "warning",
          message: "Sai tên đăng nhập hoặc mật khẩu",
          position: "top",
          timeout: "1000",
        });
      }
    },
    logout() {
      this.user = null;
      // localStorage.removeItem('user');
      router.push("/account/login");
    },
  },
});
