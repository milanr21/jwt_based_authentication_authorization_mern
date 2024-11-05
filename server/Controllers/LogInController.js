import { SignUp } from "../Models/SignUpModel.js";
import { createSecretToken } from "../utils/SecretToken.js";
import bcrypt from "bcrypt";

const LogInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email or password is missing",
      });
    }

    const existingUser = await SignUp.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const auth = await bcrypt.compare(password, existingUser.password);

    if (!auth) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token = createSecretToken(existingUser._id);

    res.cookie("token", token, {
      httpOnly: false,
      withCredentials: true,
    });

    res.status(200).json({
      message: "User Logged In Successfully",
      success: true,
    });

    next();
  } catch (error) {
    console.log("The error is", error);
    res.status(500).json({
      message: "Error while login",
    });
  }
};

export default LogInController;
