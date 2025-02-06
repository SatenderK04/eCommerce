import { Router } from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
  editProduct,
} from "../controllers/sellerController.js";

const router = Router();

router.post("/products", addProduct);
router.get("/products", getProducts);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", editProduct);

export default router;
