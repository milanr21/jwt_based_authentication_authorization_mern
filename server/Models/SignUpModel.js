import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SignUpModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

SignUpModel.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

export const SignUp = mongoose.model("SignUp", SignUpModel);
