import { Request, Response } from "express";
import AppError from "../utils/AppError";
import { findAll } from "../services/deliveryService";

export const getDeliveries = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { result, status, error } = await findAll();

  if (error !== undefined) throw new AppError(error.message, status);

  res.status(status).json(result);
};
