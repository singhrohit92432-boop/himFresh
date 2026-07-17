require("dns").setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const authRoutes = require("./routes/authRoutes");
const app = express();
const verifyToken = require("./middleware/authMiddleware");
const rateLimit = require("express-rate-limit");
const aiRoutes = require("./routes/aiRoutes");

// Connect DB
connectDB();

// Middleware
// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    message: "Too many requests. Please try again after 15 minutes.",
  },
});

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

/* ---------------- TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.json({ message: "HimFresh Backend Running 🚀" });
});

/* ---------------- CREATE PRODUCT ---------------- */
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET ALL PRODUCTS ---------------- */
app.get("/api/products", verifyToken, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- SEARCH PRODUCTS ---------------- */
app.get("/api/products/search", async (req, res) => {
  try {
    const query = req.query.q || "";

    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET PRODUCT BY ID ---------------- */
app.get("/api/products/:id", verifyToken, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- UPDATE PRODUCT ---------------- */
app.put("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- DELETE PRODUCT ---------------- */
app.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

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