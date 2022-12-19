import { Router } from "express";
import {
  createDelivery,
  getDeliveries,
} from "../controllers/deliveryController";
import "express-async-errors";

const router = Router();

router.route("/").get(getDeliveries).post(createDelivery);

export default router;
