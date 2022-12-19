import mongoose from "mongoose";

const URL = process.env.DB_URL;

mongoose
  .connect(URL as string)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err: Error) => {
    console.log(`Connection failed: ${err.message}`);
  });
