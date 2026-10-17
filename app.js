import express from "express";
import productRoute from "./routes/productRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js";
import orderRoute from "./routes/ordersRoute.js";
import logger from "./middleware/logger.js";
import requestTime from "./middleware/requestTime.js";

const PORT = 3000;
const app = express();
app.use(logger);
app.use(requestTime);
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/products/categories", categoryRoute);
app.use("/api/orders", orderRoute);


app.patch("/api/products/:id/settings", (req, res) => { // 11 задание 3 лрка
  const id = Number(req.params.id);
  const notify = req.query.notify === "true";
  const changes = req.body;

  res.json({
    id,
    notify,
    changes
  });
});

app.get("/api/status", (req, res) => {
    res.status(200).json({
      status: "ok",
      requestTime: req.requestTime
    });
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
})