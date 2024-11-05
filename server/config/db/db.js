import mongoose from "mongoose";
import { config } from "./config.js";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connection Established");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Connection Error: " + err);
    });

    await mongoose.connect(config.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDb;
