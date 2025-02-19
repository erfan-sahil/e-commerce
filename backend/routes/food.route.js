import express from "express";
import { addFood } from "../controllers/food.controller.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

//middleware image upload
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
export default foodRouter;
