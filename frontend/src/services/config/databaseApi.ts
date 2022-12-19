import axios from "axios";

const dbApi = axios.create({
  baseURL: import.meta.env.VITE_DB_API_URL as string,
});

export default dbApi;
