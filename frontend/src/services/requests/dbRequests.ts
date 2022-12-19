import dbApi from "../config/databaseApi";
import { IDelivery, IFetchError } from "../../interfaces";

export const postDelivery = async (
  delivery: IDelivery
): Promise<IDelivery | IFetchError> => {
  try {
    const { data } = await dbApi.post<IDelivery>("/deliveries", delivery);
    return data;
  } catch (err) {
    const { message, stack } = err as Error;
    return { error: { message, stack } };
  }
};

export const getDeliveries = async (): Promise<IDelivery[] | IFetchError> => {
  try {
    const { data } = await dbApi.get<IDelivery[]>("/deliveries");
    return data;
  } catch (err) {
    const { message, stack } = err as Error;
    return { error: { message, stack } };
  }
};
