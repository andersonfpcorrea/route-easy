import { AxiosResponse } from "axios";
import geoApi from "../config/geocode";

export const getGeolocation = async (address: string): Promise<AxiosResponse> =>
  await geoApi.get(`${address}&key=${import.meta.env.VITE_API_KEY as string}`);
