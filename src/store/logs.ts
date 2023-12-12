import { defineStore } from "pinia";
import instance from "@/axiosConfig";

const useLogsStore = defineStore("logs", {
  state: () => ({
    workouts: [],
  }),
  actions: {
    getWorkouts() {
      return new Promise((resolve, reject) => {
        instance
          .get("/workout")
          .then((response) => {
            this.workouts = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});

export default useLogsStore;
