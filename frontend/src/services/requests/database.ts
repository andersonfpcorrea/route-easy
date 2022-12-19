import dbApi from "../config/databaseApi";
import { IDelivery } from "../../interfaces";

export const postDelivery = async (
  delivery: IDelivery
): Promise<IDelivery | { error: string }> => {
  try {
    const { data } = await dbApi.post<IDelivery>("/deliveries", delivery);
    return data;
  } catch (err) {
    const { message } = err as Error;
    return { error: message };
  }
};
