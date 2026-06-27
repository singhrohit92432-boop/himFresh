require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data
let products = [
  {
    id: 1,
    name: "Organic Honey",
    price: 299
  },
  {
    id: 2,
    name: "Apple Jam",
    price: 199
  },
  {
    id: 3,
    name: "Herbal Tea",
    price: 149
  }
];

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "HimFresh Backend is Running 🚀" });
});

// GET all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// SEARCH products (Moved above :id route)
app.get("/api/products/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  res.status(200).json(results);
});

// GET product by ID
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

// POST new product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and price are required"
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// UPDATE product
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = name || product.name;
  product.price = price || product.price;

  res.status(200).json(product);
});

// DELETE product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.status(204).send();
});
// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});