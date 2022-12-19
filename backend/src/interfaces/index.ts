export interface IDeliveryModel {
  name: string;
  weigth: number;
  address: {
    street: string;
    city: string;
    country: string;
    geolocation: {
      latitude: number;
      longitude: number;
    };
    number?: string | undefined;
    neighbourhood?: string | undefined;
    complement?: string | undefined;
    state?: string | undefined;
  };
}

export interface IServiceReturn {
  result?: IDeliveryModel[] | IDeliveryModel;
  status: number;
  error?: {
    message: string;
  };
}
