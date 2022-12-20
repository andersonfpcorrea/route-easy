import { Router } from "express";
import {
  createDelivery,
  deleteDeliveries,
  deleteDelivery,
  getDeliveries,
} from "../controllers/deliveryController";
import "express-async-errors";

const router = Router();

router
  .route("/")
  .get(getDeliveries)
  .post(createDelivery)
  .delete(deleteDeliveries);

router.route("/:id").delete(deleteDelivery);

export default router;
