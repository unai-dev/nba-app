import axios from "axios";

export const nbaApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: import.meta.env.VITE_API_KEY,
});
