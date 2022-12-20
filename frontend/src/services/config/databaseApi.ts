import axios from "axios";

const url = `${import.meta.env.VITE_DB_API_PROTOCOL as string}://${
  import.meta.env.VITE_DB_API_HOST as string
}`;

const dbApi = axios.create({
  baseURL: url,
});

export default dbApi;
