import express from "express";
import SignUpController from "../Controllers/SignUpController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.post("/signup", SignUpController);

export default router;
