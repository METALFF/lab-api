import express from "express";
import checkApiKeys from "../middleware/checkApiKeys.js";

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 15000,
    category: "Accessories",
    inStock: true
  },
  {
    id: 2,
    name: "Mouse",
    price: 8000,
    category: "Accessories",
    inStock: true
  },
  {
    id: 3,
    name: "Monitor",
    price: 33333,
    category: "Monitors",
    inStock: false
  },
  {
    id: 4,
    name: "PC",
    price: 222,
    category: "Computers",
    inStock: true
  },
  {
    id: 5,
    name: "PC-monitor",
    price: 666666,
    category: "Monitors",
    inStock: true
  },
];

// Функции 
function getProduct(req, res) {
  let result = products;
  const inStock = req.query.inStock;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;

  if(minPrice !== undefined) {
    result = result.filter(
      product => product.price >= Number(minPrice)
    );
  };
  if(maxPrice !== undefined) {
    result = result.filter(
      product => product.price <= Number(maxPrice)
    );
  };
  if (inStock !== undefined) {
    result = result.filter(
      product => product.inStock === (inStock === "true")
    );
  };
  if(req.query.category) {
    result = result.filter(
      product => product.category === req.query.category
    );
  };
  res.json(result);
};

function getProductById (req, res) {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if(!product) {
    return res.status(404).json({message: "Нету такого"});
  };
  res.json(product);
}

function postProducts(req, res) {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json({ message: "POST route: create new product" });
};

function patchProductById (req, res) {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if(!product) {
    return res.status(404).json({ message: "Такого нету" });
  };
  Object.assign(product, req.body);
  res.status(201).json(product);
};

function deleteProductById (req, res) {
  const id = Number(req.params.id);
  const index = products.findIndex(product => product.id === id);

  if(index === -1) {
    return res.status(404).json({ message: "Такого нету" });
  };
  products.splice(index, 1);

  res.status(200).json({ message: "Удаление завершено" });
}

//Запросы 
router.use((req, res, next) => {
console.log("Product Router:", req.method, req.originalUrl); next();
});

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/", checkApiKeys, postProducts);

router.put("/api/products", (req, res) => {
  res.status(200).json({ message: "PUT route: full product replacement" });
});
router.patch("/:id", patchProductById);
router.delete("/:id", deleteProductById);

export default router;