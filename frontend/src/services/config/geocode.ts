import axios from "axios";

const geoApi = axios.create({
  baseURL: import.meta.env.VITE_GEO_URL as string,
});

export default geoApi;
