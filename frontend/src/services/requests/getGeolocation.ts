import { AxiosResponse } from "axios";
import geoApi from "../config/geocodeApi";
import { IGeoData } from "../../interfaces";

export const getGeolocation = async (
  address: string
): Promise<AxiosResponse<IGeoData>> =>
  await geoApi.get(`${address}&key=${import.meta.env.VITE_API_KEY as string}`);
