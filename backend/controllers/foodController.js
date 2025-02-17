import foodModel from "../models/food.model.js";
import fs from "fs";
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};
export { addFood, listFood, removeFood };
