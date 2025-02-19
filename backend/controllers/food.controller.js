import foodModel from "../models/food.model.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  let image_fileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: image_fileName,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addFood };
