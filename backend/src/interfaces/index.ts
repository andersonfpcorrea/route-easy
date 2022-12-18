export interface IDeliveryModel {
  name: string;
  address: {
    required: unknown[] | unknown[];
    street?: string | undefined;
  };
  city: string;
  country: string;
  geolocation: {
    enum: unknown[];
    type?: string | undefined;
    default?: unknown;
  };
  number?: string | undefined;
  neighbourhood?: string | undefined;
  complement?: string | undefined;
  state?: string | undefined;
  weigth?: number | undefined;
}

export interface IServiceReturn {
  result?: IDeliveryModel[];
  status: number;
  error?: {
    message: string;
  };
}
