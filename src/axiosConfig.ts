import axios, { AxiosResponse } from "axios";
// import { getCookie } from "./utils/cookies";
import { getCookie, deleteCookie } from "@/utils/cookies";
import router from "@/router";
const getBaseUrl = (type: string): string =>
  type === "prod"
    ? "https://liv-fit-server.onrender.com"
    : "http://localhost:4000";

const instance = axios.create({
  baseURL: getBaseUrl("prod"),
  headers: {
    Authorization: `Bearer ${getCookie("token")}` || null,
  },
});

instance.interceptors.response.use(
  (response): AxiosResponse<any, any> => {
    return response;
  },
  (error: any) => {
    if (error.response.data.message === "jwt expired") {
      deleteCookie("token");
      deleteCookie("user");
      router.push({ path: "/login" });
    }
  }
);

export default instance;
