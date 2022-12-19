import express from "express";
import globalErrorHandler from "./controllers/errorController";
import deliveryRouter from "./routers/deliveryRouter";

const app = express();

// Middlewares:
// - Body parser:
app.use(express.json());

// Routes
app.use("/deliveries", deliveryRouter);

// Error handler
app.use(globalErrorHandler);

export default app;
