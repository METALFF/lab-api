import {
        findProductById,
        addProduct,
        updatePorductById,
        deleteProductsById,
        getAllProducts
 } from "../services/productService.js";

export function getProduct(req, res) {
  let result = getAllProducts(req.query);

  if(req.query.category) {
    result = result.filter(
      product => product.category === req.query.category
    );
  };
  res.json(result);
};

export function getProductById (req, res) {
  const id = Number(req.params.id);
  const product = findProductById(id);

  if(!product) {
    return res.status(404).json({message: "Нету такого"});
  };
  res.json(product);
};

export function postProducts(req, res) {
    const product = addProduct(req.body) ;
    products.push(product);
    res.status(201).json({ message: "POST route: create new product" });
};

export function patchProductById (req, res) {
  const id = Number(req.params.id);
  const product = updatePorductById(id, req.body);

  if(!product) {
    return res.status(404).json({ message: "Такого нету" });
  };
  res.status(201).json(product);
};

export function deleteProductById (req, res) {
  const id = Number(req.params.id);
  const product = deleteProductsById(id, req.body);
  products.splice(product, 1);

  res.status(200).json({ message: "Удаление завершено" });
};