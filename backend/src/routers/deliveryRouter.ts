import { Router } from "express";
import {
  createDelivery,
  deleteDelivery,
  getDeliveries,
} from "../controllers/deliveryController";
import "express-async-errors";

const router = Router();

router.route("/").get(getDeliveries).post(createDelivery);

router.route("/:id").delete(deleteDelivery);

export default router;
