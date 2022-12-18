import { IServiceReturn } from "../interfaces";
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
