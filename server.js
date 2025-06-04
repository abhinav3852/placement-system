const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const open = (...args) => import("open").then(m => m.default(...args));
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend Running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(🚀 Server running on port ${PORT});
  // Only open browser locally
  if (process.env.NODE_ENV !== "production") {
    open(http://localhost:${PORT}/welcome.html);
  }
});