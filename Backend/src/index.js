import { ConnectDB } from "./db/index.js";
import { app } from "./main.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

//connectDB

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port !", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !", error);
  });
