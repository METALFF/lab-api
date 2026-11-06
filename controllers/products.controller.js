import {
        findProductById,
        addProduct,
        updatePorductById,
        getAllProducts,
        deleteProductByIdService
 } from "../services/productService.js";
import { AppError } from "../errors/AppError.js";

export async function getProduct(req, res, next) {
  try {
    let result = await getAllProducts(req.query);

    if(req.query.category) {
      result = result.filter(
        product => product.category === req.query.category
      );
    };
    res.json(result);
  } catch(error) {
    next(error);
  }
 
};

export async function getProductById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const product = await findProductById(id);

    if (!product) {
      return next(new AppError("Product not found", 404));
    };
    res.json(product);
  } catch(error) {
    next(error);
  }
}

export async function postProducts(req, res, next) {
  try {
    const product = await addProduct(req.body);
    res.status(201).json(product);
  } catch(error) {
    next(error);
  }
}

export async function patchProductById(req, res, next) {
  try{
    const id = Number(req.params.id);
    const product = await updatePorductById(id, req.body);

    res.json(product);
  } catch(error) {
    next(error);
  }
}

export async function deleteProductById(req, res, next) {
  try{
    const id = Number(req.params.id);
    const product = await deleteProductByIdService(id, req.body);

    res.json(product);
  } catch(error) {
    next(error);  
  }
}