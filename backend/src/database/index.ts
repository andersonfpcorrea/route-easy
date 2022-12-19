import mongoose from "mongoose";

const URL = process.env.DB_URL;

if (URL === undefined)
  throw new Error("Cannot connect to database. No URL provided");

mongoose
  .connect(URL)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err: Error) => {
    console.log(`Connection failed: ${err.message}`);
  });
