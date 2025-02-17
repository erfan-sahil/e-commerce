import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
