import express from "express";
import SignUpController from "../Controllers/SignUpController.js";
import LogInController from "../Controllers/LogInController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.post("/signup", SignUpController);
router.post("/login", LogInController);

export default router;
