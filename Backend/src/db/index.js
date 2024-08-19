import mongoose from "mongoose";

const DB_NAME = "google-oauth";

export const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`
    );
    console.log("MongoDB hosted on !! ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error while connecting to database", error);
    process.exit(1);
  }
};
