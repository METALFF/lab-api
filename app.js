import express from "express";

const PORT = 3000;
const app = express();
app.use(express.json());
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
const categories = [
  "Computers",
  "Accessories",
  "Monitors"
];




app.get('/', (req, res) => {
    res.send("Internet Shop Api");
});

app.get('/about', (req, res) => {
    res.send('Учебный REST API интернет-магазина компьютерной техники”');
});

app.get('/api/status', (req, res) => {
    res.json({ 
        status: 200, 
        message: 'Server is running'});
});

app.get('/api/shop', (req, res) => {
    res.json(
        {
            name: "Tech Store",
            description: "Учебный интернет-магазин",
            currency: "KZT"

        }
    );
});


function getProduct(req, res) {
  res.json(products);
};

//products
app.get("/api/products", getProduct);

app.post("/api/products", (req, res) => {
  res.status(201).json({message: "POST route: producet created"});
});

app.put("/api/products", (req, res) => {
  res.status(200).json({ message: "PUT route: full product replacement" });
});

app.patch("/api/products", (req, res) => {
  res.json({ message: "PATCH route: partial product update" });
});

app.delete("/api/products", (req, res) => {
  res.json({ message: "DELETE route: product deletion" });
});

//categories
app.get('/api/categories', (req, res) => {
    res.json(categories);
});
app.post("/api/categories", (req, res) => {
  res.status(201).json({message: "POST route: category created"});
});

//orders
app.get("/api/orders", (req, res) => {
  res.json([]);
});
app.post("/api/orders", (req, res) => {
  res.status(201).json({ message: "POST route: orders created"});
});

app.get("/api", (req, res) => {
  res.json({
    "name": "Internet Shop API",
    "version": "1.0",
    "resources": [
    "/api/products",
    "/api/categories",
    "/api/orders"
    ]
  });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});