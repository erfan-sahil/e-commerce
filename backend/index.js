import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/food.route.js";
//app config
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());

//connect to mongodb
connectDB();

//api endpoint
app.use("/api/food", foodRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
