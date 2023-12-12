import { defineStore } from "pinia";
import instance from "@/axiosConfig";
const useAuthStore = defineStore("auth", {
  state: () => ({
    test: "i am a test value",
  }),
  actions: {
    login(payload: any) {
      return new Promise((resolve, reject) => {
        instance
          .post("/auth/login", payload)
          .then((response: any) => {
            document.cookie = `token=${response.data.data.token}`;
            document.cookie = `user=${JSON.stringify(response.data.data.user)}`;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});
export default useAuthStore;
