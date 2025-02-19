"use client";
import { foodData } from "@/assets/food_menu/FoodDatabase";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      console.log("item", item);
      if (cartItems[item] > 0) {
        let itemInfo = foodData.find((food) => food._id == item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };
  getTotalAmount();
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    foodData,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
