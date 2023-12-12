import axios from "axios";
import { getCookie } from "./utils/cookies";
const instance = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "https://liv-fit-server.onrender.com",
  headers: {
    Authorization: `Bearer ${getCookie("token")}` || null,
  },
});

export default instance;
