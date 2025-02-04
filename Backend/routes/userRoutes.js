import authUser from "../middleware/authMiddleware.js";
import { Router } from "express";
import {
  createUser,
  getCurrentUser,
  logInUser,
  logOutUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/me", authUser, getCurrentUser);
router.post("/logout", logOutUser);
router.post("/signup", createUser);
router.post("/login", logInUser);

export default router;
