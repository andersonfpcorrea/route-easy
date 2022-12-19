import { IDeliveryModel, IServiceReturn } from "../interfaces";
import Delivery from "../models/Delivery";
import statusCodeTable from "../utils/httpStatusCode";

export const findAll = async (): Promise<IServiceReturn> => {
  try {
    const result = await Delivery.find();
    return { result, status: statusCodeTable.OK };
  } catch (err) {
    const { message } = err as Error;
    return { error: { message }, status: statusCodeTable.INTERNAL_ERROR };
  }
};

export const createOne = async (
  delivery: IDeliveryModel
): Promise<IServiceReturn> => {
  try {
    const result = await Delivery.create(delivery);
    return { result, status: statusCodeTable.CREATED };
  } catch (err) {
    const { message } = err as Error;
    return { error: { message }, status: statusCodeTable.INTERNAL_ERROR };
  }
};
