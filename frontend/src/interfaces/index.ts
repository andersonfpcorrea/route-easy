import { LatLngTuple } from "leaflet";
import { ReactElement } from "react";

export interface IBasicAddress {
  street: string;
  city: string;
  country: string;
}

export interface IAddress extends IBasicAddress {
  geolocation: {
    latitude: number;
    longitude: number;
  };
  number?: string;
  neighbourhood?: string;
  complement?: string;
  state?: string;
  placeId: string;
}

export interface IFormData<W> {
  name?: string;
  weigth?: W;
}

export interface IDelivery extends IFormData<number> {
  _id?: string;
  address?: IAddress;
}

export interface IDeliveryTable extends IBasicAddress, IFormData<number> {
  id: string;
  lat: number;
  long: number;
  placeId: string;
}

export interface ICoords {
  placeId: string;
  coords: LatLngTuple;
}

export interface IInitalState {
  coords: ICoords[] | null;
  setCoords: React.Dispatch<React.SetStateAction<ICoords[] | null>>;
  tableData: IDeliveryTable[] | null;
  errorDeliveries?: IFetchError | null;
  isLoadingDeliveries: boolean;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleAddress: () => Promise<void>;
  error?: IFetchError | null;
  isDeleting: boolean;
  handleDelete: () => void;
}

export interface IUserFormProps {
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
  weigthRef: React.MutableRefObject<HTMLInputElement | null>;
  addressRef: React.MutableRefObject<HTMLInputElement | null>;
}

export interface IFetchError {
  error?: { message: string; stack?: string };
}

export interface IUseDeliveriesReturn {
  tableData: IDeliveryTable[] | null;
  errorDeliveries: IFetchError | null;
  isLoadingDeliveries: boolean;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUseTableReturn {
  tableRows: Array<
    ReactElement<any, string | React.JSXElementConstructor<any>>
  > | null;
  tableError: IFetchError | null;
}

export interface IDatabaseAPIError {
  message?: string;
}
