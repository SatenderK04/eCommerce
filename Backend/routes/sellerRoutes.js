import { Router } from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "../controllers/sellerController.js";

const router = Router();

router.post("/products", addProduct);
router.get("/products", getProducts);
router.delete("/products/:id", deleteProduct);

export default router;
