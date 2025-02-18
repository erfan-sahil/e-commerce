import React, { useContext } from "react";
import Fooditem from "../foodItem/Fooditem";
import { StoreContext } from "@/context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { foodData } = useContext(StoreContext);
  console.log(foodData);
  return (
    <div id="food-item">
      <h2 className="text-[#262626] text-2xl font-semibold">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {foodData.map((item, index) => {
          if (category === "all" || category === item.category) {
            return <Fooditem key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
