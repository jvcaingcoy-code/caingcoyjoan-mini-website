// server/server.js
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve your website

// Load products
const products = JSON.parse(fs.readFileSync("server/products.json"));

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get single product by ID
app.get("/api/product/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
