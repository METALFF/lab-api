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

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});