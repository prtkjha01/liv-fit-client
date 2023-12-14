import axios from "axios";
import { getCookie } from "./utils/cookies";
console.log(import.meta.env);

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  // "http://localhost:4000",
  // baseURL: "https://liv-fit-server.onrender.com",
  headers: {
    Authorization: `Bearer ${getCookie("token")}` || null,
  },
});

export default instance;
