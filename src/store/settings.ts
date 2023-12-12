import { defineStore } from "pinia";
import instance from "@/axiosConfig";

const useSettingsStore = defineStore("settings", {
  state: () => ({
    settings: [
      {
        id: 1,
        name: "Account",
        path: "/account",
      },
      {
        id: 2,
        name: "Stats",
        path: "/stats",
      },
      {
        id: 3,
        name: "Privacy & Security",
        path: "/privacy-and-security",
      },
      {
        id: 4,
        name: "Notifications",
        path: "/notifications",
      },
    ],
    userInfo: {},
    stats: {},
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
    getStats() {
      return new Promise((resolve, reject) => {
        instance
          .get("/stats")
          .then((response) => {
            this.stats = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});
export default useSettingsStore;
