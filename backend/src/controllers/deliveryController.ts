import { Request, Response } from "express";
import AppError from "../utils/AppError";
import { findAll, createOne } from "../services/deliveryService";
import { IDeliveryModel } from "../interfaces";

export const getDeliveries = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { result, status, error } = await findAll();

  if (error !== undefined) throw new AppError(error.message, status);

  res.status(status).json(result);
};

export const createDelivery = async (
  req: Request<unknown, unknown, IDeliveryModel>,
  res: Response
): Promise<void> => {
  const delivery = req.body;
  const { result, status, error } = await createOne(delivery);
  if (error !== undefined) throw new AppError(error.message, status);
  res.status(status).json(result);
};
