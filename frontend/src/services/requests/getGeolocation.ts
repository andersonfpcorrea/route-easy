import { AxiosResponse } from "axios";
import geoApi from "../config/geocode";

interface IAddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

interface IResultData {
  address_components: IAddressComponents[];
  formatted_address: string;
  geometry: {
    bounds: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
    location: {
      lat: number;
      lng: number;
    };
    location_type: string;
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  place_id: string;
  types: string[];
}

interface IGeoData {
  results: IResultData[];
  status: string;
}

export const getGeolocation = async (
  address: string
): Promise<AxiosResponse<IGeoData>> =>
  await geoApi.get(`${address}&key=${import.meta.env.VITE_API_KEY as string}`);
