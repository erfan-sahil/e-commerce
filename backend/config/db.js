import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://erfansahil:sahil1234@cluster0.modnk.mongodb.net/food-del"
      )
      .then(() => {
        console.log("db connected");
      });
  } catch (err) {
    console.log(err, "db connection failed");
  }
};
export default connectDB;
