import express from "express";
import globalErrorHandler from "./controllers/errorController";
import deliveryRouter from "./routers/deliveryRouter";
import cors from "cors";

const app = express();

// Middlewares:
// - Body parser:
app.use(express.json());
// - cors:
app.use(cors());
app.options("/deliveries", cors());

// Routes
app.use("/deliveries", deliveryRouter);

// Error handler
app.use(globalErrorHandler);

export default app;
