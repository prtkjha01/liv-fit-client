import { defineStore } from "pinia";
import instance from "@/axiosConfig";
import { getCookie } from "@/utils/cookies";
const useUserStore = defineStore("user", {
  state: () => ({
    user: JSON.parse(getCookie("user") as string),
    userInfo: {},
  }),
  actions: {
    getUserInfo() {
      return new Promise((resolve, reject) => {
        instance
          .get("/user")
          .then((response) => {
            this.userInfo = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});
export default useUserStore;
