import { Router } from "express";
import {
  createDelivery,
  getDeliveries,
} from "../controllers/deliveryController";

const router = Router();

router.get("/", getDeliveries);
router.post("/", createDelivery);

export default router;
