import express from "express";
import globalErrorHandler from "./controllers/errorController";
import deliveryRouter from "./routers/deliveryRouter";

const app = express();

app.use("/deliveries", deliveryRouter);

app.use(globalErrorHandler);

export default app;
