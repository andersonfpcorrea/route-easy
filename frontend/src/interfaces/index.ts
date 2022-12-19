import { LatLngTuple } from "leaflet";

export interface IAddress {
  street: string;
  city: string;
  country: string;
  geolocation: {
    latitude: number;
    longitude: number;
  };
  number?: string;
  neighbourhood?: string;
  complement?: string;
  state?: string;
}

export interface IFormData<W> {
  name?: string;
  weigth?: W;
}

export interface IDelivery extends IFormData<number> {
  address?: IAddress;
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

export interface IUseFormReturn {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleAddress: () => Promise<void>;
}
