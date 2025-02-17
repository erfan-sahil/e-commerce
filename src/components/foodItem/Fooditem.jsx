"use client";
import { StoreContext } from "@/context/StoreContext";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Fooditem = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useContext(StoreContext);

  const handleAddToCart = () => {
    addToCart(item._id); // Call addToCart from context
    setCount((prev) => prev + 1); // Update local count
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item._id); // Call removeFromCart from context
    setCount((prev) => Math.max(0, prev - 1)); // Prevent count going below zero
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-md p-4">
        <div>
          <Image
            src={item.image}
            alt={item.name}
            className="h-[200px] w-[300px] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-[#262626] text-xl font-semibold">{item.name}</h1>
          <p className="text-[#262626]">{item.description}</p>
          <h2 className="text-[#262626] text-lg font-semibold">
            ${item.price}
          </h2>
          <button
            className="text-[#49557e] border border-orange-800 rounded-3xl 
            hover:bg-[#fef7f6] transition-all duration-300 transform hover:scale-105"
          >
            {count === 0 ? (
              <p
                className="w-full h-full py-2 px-5"
                onClick={handleAddToCart} // Pass reference to the function
              >
                Add to cart
              </p>
            ) : (
              <div className="flex items-center justify-center gap-3 py-2 px-5">
                <Minus
                  onClick={handleRemoveFromCart} // Pass reference to the function
                  className="text-red-500 w-5 h-5 bg-red-200 rounded-xl p-1 cursor-pointer"
                />
                <span className="text-[#262626] font-medium">{count}</span>
                <Plus
                  onClick={handleAddToCart} // Pass reference to the function
                  className="text-green-500 w-5 h-5 bg-green-200 rounded-xl p-1 cursor-pointer"
                />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fooditem;
