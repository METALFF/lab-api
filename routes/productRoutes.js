import express from "express";
import { validateCreateProduct } from "../middleware/validateCreateProduct.js";
import { validateUpdateProduct } from "../middleware/validateUpdateProduct.js";
import { getProduct,
      getProductById,
      postProducts,
      patchProductById,
      deleteProductById
 } from "../controllers/products.controller.js";

const router = express.Router();

//Запросы 
router.use((req, res, next) => {
console.log("Product Router:", req.method, req.originalUrl); next();
});

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", validateCreateProduct, postProducts);

router.put("/api/products", (req, res) => {
  res.status(200).json({ message: "PUT route: full product replacement" });
});
router.patch("/:id", validateUpdateProduct, patchProductById);
router.delete("/:id", deleteProductById);

export default router;
