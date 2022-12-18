import { Router } from "express";
import { getDeliveries } from "../controllers/deliveryController";

const router = Router();

router.get("/", getDeliveries);

export default router;
