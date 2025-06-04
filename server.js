const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const open = (...args) => import("open").then(m => m.default(...args));
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

app.get("/", (req, res) => res.send("Backend Running"));

HEAD
const studentRoutes = require('./routes/studentRoutes');
const studentRoutes = require("./routes/studentRoutes");
65a6504981fd2d6d500aeecb8692324d19edb0a8
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
HEAD
  console.log(🚀 Server running on port ${PORT});
  if (process.env.NODE_ENV !== "production") {
    open(http://localhost:${PORT}/welcome.html);
  }
});
  console.log(`🚀 Server running on port ${PORT}`);
  open(`http://localhost:${PORT}/welcome.html`);
});
65a6504981fd2d6d500aeecb8692324d19edb0a8
