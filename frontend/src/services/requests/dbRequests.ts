import dbApi from "../config/databaseApi";
import { IDatabaseAPIError, IDelivery, IFetchError } from "../../interfaces";

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

export const deleteDelivery = async (
  id: string
): Promise<IFetchError | null> => {
  try {
    const {
      data: { message },
    } = await dbApi.delete<IDatabaseAPIError>(`/deliveries/${id}`);
    if (message !== undefined) return { error: { message } };
    return null;
  } catch (err) {
    const { message, stack } = err as Error;
    console.log(message, stack);
    return { error: { message, stack } };
  }
};

export const deleteDeliveries = async (): Promise<IFetchError | null> => {
  try {
    const {
      data: { message },
    } = await dbApi.delete<IDatabaseAPIError>("/deliveries");
    if (message !== undefined) return { error: { message } };
    return null;
  } catch (err) {
    const { message, stack } = err as Error;
    console.log(message, stack);
    return { error: { message, stack } };
  }
};
