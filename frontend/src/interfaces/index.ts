import { LatLngTuple } from "leaflet";

export interface IDelivery {
  name?: string;
  weight?: string;
  geolocation?: IResultData[];
}

export interface IInitalState {
  defaultCoords: LatLngTuple;
  coords: LatLngTuple | null;
  setCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>;
  delivery: IDelivery | null;
  setDelivery: React.Dispatch<React.SetStateAction<IDelivery | null>>;
}

export type IUseMapProps = "standard" | "grey" | "dark";

export interface ILeafletThemeData {
  url: string;
  maxZoom: number;
  attribution: string;
}

export interface ILeafletThemes {
  standard: ILeafletThemeData;
  grey: ILeafletThemeData;
  dark: ILeafletThemeData;
}

export interface IAddressComponents {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface IResultData {
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

export interface IGeoData {
  results: IResultData[];
  status: string;
}
