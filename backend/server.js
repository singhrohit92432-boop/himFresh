require("dns").setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
console.log("🔥 SERVER FILE LOADED - NEW CODE ACTIVE");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const app = express();
app.use((req, res, next) => {
  console.log("🔥 REQUEST HIT:", req.method, req.url);
  next();
});

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

/* ---------------- TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.json({ message: "HimFresh Backend Running 🚀" });
});

/* ---------------- CREATE PRODUCT ---------------- */
app.post("/api/products", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);
const product = await Product.create({
  name: req.body.name,
  price: req.body.price
});
console.log("SAVED PRODUCT:", product);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET ALL PRODUCTS ---------------- */
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET BY ID ---------------- */
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- UPDATE ---------------- */
app.put("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) return res.status(404).json({ message: "Not found" });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- DELETE ---------------- */
app.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) return res.status(404).json({ message: "Not found" });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});