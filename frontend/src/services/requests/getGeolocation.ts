import geoApi from "../config/geocodeApi";
import { IFetchError, IGeoData } from "../../interfaces";

export const getGeolocation = async (
  address: string
): Promise<IGeoData | IFetchError> => {
  try {
    const { data } = await geoApi.get<IGeoData>(
      `${address}&key=${import.meta.env.VITE_API_KEY as string}`
    );
    return data;
  } catch (err) {
    const { message, stack } = err as Error;
    return { error: { message, stack } };
  }
};
