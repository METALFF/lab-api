import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.json([]);
});
route.post("/", (req, res) => {
  res.status(201).json({ message: "POST route: orders created"});
});

export default route;