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
    number?: string;
    neighbourhood?: string;
    complement?: string;
    state?: string;
  };
}

export interface IDeleteResult {
  acknowledged: boolean;
  deletedCount: number;
}

export interface IServiceReturn {
  result?: IDeliveryModel[] | IDeliveryModel | IDeleteResult | undefined;
  status: number;
  error?: {
    message: string;
  };
}
