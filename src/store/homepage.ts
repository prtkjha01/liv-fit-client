import { defineStore } from "pinia";
import instance from "@/axiosConfig";
const useHomepageStore = defineStore("homepage", {
  state: () => ({
    blogs: [],
    sleepData: [],
    steps: 0,
    glassesOfWater: 0,
  }),
  actions: {
    getBlogs() {
      return new Promise((resolve, reject) => {
        instance
          .get(`/blogs`)
          .then((response) => {
            // console.log(response);
            this.blogs = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
    getSleepData() {
      return new Promise((resolve, reject) => {
        instance
          .get("sleep")
          .then((response) => {
            this.sleepData = response.data;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
    getSteps() {
      return new Promise((resolve, reject) => {
        instance
          .get("steps")
          .then((response) => {
            this.steps = response.data.count;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
    getWaterRecord() {
      return new Promise((resolve, reject) => {
        instance
          .get("water")
          .then((response) => {
            this.glassesOfWater = response.data.count;
            resolve(response);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    },
  },
});
export default useHomepageStore;
