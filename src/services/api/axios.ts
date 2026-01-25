import axios from "axios";
import { env } from "@/services/config/env";

export const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
