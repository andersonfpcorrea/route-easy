import mongoose from "mongoose";

const DB = process.env.MONGO_CONN_STRING;

if (DB === undefined)
  throw new Error("Cannot connect to database. No connection string provided");

mongoose
  .connect(DB)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err: Error) => {
    console.log(`Connection failed: ${err.message}`);
  });
