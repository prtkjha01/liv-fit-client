import { defineStore } from "pinia";
import instance from "@/axiosConfig";
const useTutorialStore = defineStore("tutorial", {
  state: () => ({
    tutorials: <any[]>[],
  }),
  actions: {
    getTutorials() {
      return new Promise((resolve, reject) => {
        instance
          .get(`/tutorials`)
          .then((response) => {
            // console.log(response);
            this.tutorials = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});
export default useTutorialStore;
