import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  picture: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const User = mongoose.model("Users", userSchema);
