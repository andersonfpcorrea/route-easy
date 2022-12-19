import express from "express";
import globalErrorHandler from "./controllers/errorController";
import deliveryRouter from "./routers/deliveryRouter";

const app = express();

// Routes
app.use("/deliveries", deliveryRouter);

// Error handler
app.use(globalErrorHandler);

export default app;
