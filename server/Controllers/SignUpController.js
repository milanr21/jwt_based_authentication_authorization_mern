import { SignUp } from "../Models/SignUpModel.js";
import { createSecretToken } from "../utils/SecretToken.js";

const SignUpController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await SignUp.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = await SignUp.create({
      username,
      password,
      email,
    });

    const token = createSecretToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      withCredentials: true,
    });

    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log("The error in creating user", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default SignUpController;
