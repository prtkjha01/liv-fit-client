import axios from "axios";
import { getCookie } from "./utils/cookies";

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

export default instance;
